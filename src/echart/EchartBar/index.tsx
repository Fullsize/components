import React, { useEffect } from "react";
import * as echarts from "echarts";
import Echart from "../Echart";
import _ from "lodash";
import { useSetState } from "react-use";
interface Props {
  data: any;
  xDataName?: string;
  data_deconstruction?: {
    name: string;
    unit: string;
    value: string;
  };
  isCustomBar?: boolean;
  scatter?: boolean;
  /** 颜色映射 */
  barColors?: string[];
}

const renderBarItem = function (
  params: any,
  api: any,
  seriesLength: number = 1
) {
  const categoryIndex = api.value(0);
  const value = api.value(1);
  const x = api.coord([categoryIndex, 0])[0];
  const y = api.coord([0, value])[1];
  const width = api.size([1, 0])[0] * (1 / seriesLength);
  const height = api.size([0, value])[1];
  const rectShape = echarts.graphic.clipRectByRect(
    {
      x: x - width / 2,
      y,
      width,
      height,
    },
    {
      x: params.coordSys.x,
      y: params.coordSys.y,
      width: params.coordSys.width,
      height: params.coordSys.height,
    }
  );

  return (
    rectShape && {
      type: "rect",
      shape: rectShape,
      style: api.style(),
    }
  );
};
/**
 * ehcart line or bar
 */
const Page: React.FC<Props> = (props) => {
  const {
    xDataName = "time_name",
    data_deconstruction = {
      name: "index_code_full_cname",
      value: "val",
      unit: "unit_name",
    },
    isCustomBar = false,
    barColors = [
      "#0080FF",
      "#48E679",
      "#5ED1FF",
      "#FF8E32",
      "#FFCB35",
      "#A46CFF",
    ],
  } = props;
  const [state, setState] = useSetState({
    xData: [],
    option: {},
  });
  useEffect(() => {
    const datas = props.data;
    const hasData = datas?.empty || _.isEmpty(datas);
    // if (hasData) {
    //   setState({})
    //   return;
    // }
    const xData: any = hasData
      ? []
      : _.uniqBy(datas, xDataName).map((item: any) => "" + item[xDataName]) ??
        [];
    // 展示数据数量
    const yData = _.uniqBy(datas, data_deconstruction.name);
    // y轴
    const types = _.uniqBy(datas, "type").map((item, i) => ({
      ...item,
      yIndex: i,
    }));
    const yAxis = types.map((item: any) => ({
      type: "value",
      name: item.unit_name,
      nameTextStyle: {
        color: "rgba(0,0,0,0.85)",
        fontSize: 14,
      },
      scale: true,
      alignTicks: true,
      axisLine: {
        show: true,
        lineStyle: {
          show: true,
          color: "rgba(161,186,225,0.2)",
        },
      },
      splitLine: {
        show: true,
        lineStyle: {
          show: true,
          type: "dashed",
          color: "#D9E2F8",
        },
      },
      axisLabel: {
        color: "rgba(0,0,0,0.85)",
        fontSize: 14,
      },
    }));
    const barColor = barColors;
    const lineColor = [
      "#FF8E32",
      "#48E679",
      "#5ED1FF",
      "#0080FF",
      "#FFCB35",
      "#A46CFF",
    ];
    const color: string[] = [];
    let barIndex = 0;
    let lineIndex = 0;
    const legendData: any = [];
    const series = yData.map((item: any) => {
      const currentType = _.find(types, ["type", item.type]);
      const json: any = {
        name: item[data_deconstruction.name],
        type: item.type,
        smooth: false,
        step: false,
        symbol: "none",
        yAxisIndex: currentType?.yIndex,
        barMaxWidth: "30",
        data: datas
          .filter(
            (ddd: any) =>
              ddd[data_deconstruction.name] == item[data_deconstruction.name]
          )
          .map((a: any) => ({
            lineStyle: {
              width: 2,
            },
            symbol: props.scatter ? "circle" : "emptyCircle",
            symbolSize: xDataName == "time_name" ? 4 : 10, // 调整symbol 大小，类目轴使用
            name: a.index_code_full_cname,
            value: ["" + a[xDataName], a[data_deconstruction.value]],
            unit: a[data_deconstruction.unit],
          })),
      };
      if (item.type == "bar") {
        color.push(barColor[barIndex % barColor.length]);
        barIndex = barIndex + 1;
        // isCustomBar 逻辑
        if (isCustomBar) {
          json.type = "custom";
          json.renderItem = (params: any, api: any) => {
            return renderBarItem(params, api, xData.length);
          };
        }
      } else {
        color.push(lineColor[lineIndex % barColor.length]);
        lineIndex = lineIndex + 1;
      }
      // isCustomBar 逻辑
      if (isCustomBar) {
        if (json.type == "custom") {
          legendData.push({
            name: item[data_deconstruction.name],
            icon: "rect",
          });
        } else {
          legendData.push({
            name: item[data_deconstruction.name],
            icon: "circle",
          });
        }
      }

      return json;
    });
    const option: any = hasData
      ? {}
      : {
          // background: "rgba(255, 255, 255, 0.5)",
          grid: {
            containLabel: true,
            left: 16,
            right: 16,
            top: 50,
            bottom: 10,
          },
          xAxis: {
            type: "category",
            nameTextStyle: {
              color: "rgba(0,0,0,0.85)",
              fontSize: 12,
            },
            data: xData,
            splitArea: {
              show: false,
            },
            splitLine: {
              show: false,
            },
            axisLabel: {
              color: "rgba(0,0,0,0.85)",
              fontSize: 14,
            },
            axisLine: {
              lineStyle: {
                show: true,
                color: "#D9E2F8",
              },
            },
          },
          legend: {
            show: true,
            top: 0,

            type: "scroll",
            pageIconColor: "rgba(0,0,0,0.85)",
            pageTextStyle: {
              color: "rgba(0,0,0,0.85)",
            },
            textStyle: {
              fontSize: 14,
              color: "rgba(0,0,0,0.85)",
            },
          },
          yAxis,
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "shadow",
            },
            formatter: function (params: any[] | null) {
              let tip = "";
              if (params !== null && params.length) {
                params.map((item: any) => {
                  tip += `${item.marker}${item.seriesName}:  ${item.value[1]}${item.data?.unit}<br/>`;
                  return item;
                });
                return `${params[0].name}<br/>${tip}`;
              }
              return tip;
            },
          },
          color,
          series,
        };
    // isCustomBar 逻辑
    if (isCustomBar && option.legend) {
      option.legend.data = legendData;
    }

    setState({
      xData,
      option,
    });
  }, [props.data]);
  return (
    <Echart
      empty={props.data?.empty}
      msgs={props.data?.msg}
      clear
      category={state.xData}
      option={state.option}
    />
  );
};

Page.defaultProps = {
  data_deconstruction: {
    name: "index_code_full_cname",
    value: "val",
    unit: "unit_name",
  },
};
export default Page;

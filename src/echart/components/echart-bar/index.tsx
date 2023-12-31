import React, { useEffect, useState } from "react";
import Echart from "../echart";
import _ from "lodash";
interface Props {
  data: any;
  xDataName?: string;
  data_deconstruction?: {
    name: string;
    unit: string;
    value: string;
    type: string;
  };
  isCustomBar?: boolean;
}

const EchartBar = (props: Props) => {
  const {
    xDataName = "time_name",
    data_deconstruction = {
      name: "index_code_full_cname",
      value: "val",
      unit: "unit_name",
      type: "type",
    },
  } = props;
  const [option, setOption] = useState({});
  useEffect(() => {
    const datas = props.data;
    const noData = datas?.empty || _.isEmpty(datas);
    if (noData) {
      setOption({});
      return;
    }
    // x轴数据
    const xData: any = _.uniqBy(datas, xDataName).map(
      (item: any) => `${item[xDataName]}`
    );
    // 数据分类
    const group = _.uniqBy(datas, data_deconstruction.name);
    // echart 类型
    const types = _.uniqBy(datas, data_deconstruction.type).map((item, i) => ({
      ...item,
      yIndex: i,
    }));
    // y轴设置
    const yAxis = types.map((item: any) => ({
      type: "value",
      name: item.unit_name,
      scale: true,
      alignTicks: true,
      axisLine: {
        show: true,
        lineStyle: {
          show: true,
        },
      },
      splitLine: {
        show: true,
        lineStyle: {
          show: true,
          type: "dashed",
        },
      },
      axisLabel: {
        formatter: (value: number) => {
          if (_.isNumber(value)) {
            return _.round(value, 1);
          }
          return value;
        },
      },
    }));
    //
    const series = group.map((item: any) => {
      const currentType = _.find(types, [data_deconstruction.type, item.type]);
      const json: any = {
        name: item[data_deconstruction.name],
        type: item.type,
        smooth: false,
        step: false,
        symbol: "circle",
        yAxisIndex: currentType?.yIndex,
        data: datas
          .filter(
            (ddd: any) =>
              ddd[data_deconstruction.name] == item[data_deconstruction.name]
          )
          .map((a: any) => ({
            lineStyle: {
              width: 2,
            },
            symbolSize: xDataName == "time_name" ? 4 : 10, // 调整symbol 大小，类目轴使用
            name: a.index_code_full_cname,
            value: ["" + a[xDataName], a[data_deconstruction.value]],
            unit: a[data_deconstruction.unit],
          })),
      };
      return json;
    });
    const option = {
      xAxis: {
        type: "category",
        data: xData,
        splitArea: {
          show: false,
        },
        splitLine: {
          show: false,
        },
        axisLine: {
          lineStyle: {
            show: true,
          },
        },
      },
      legend: {
        show: true,
      },
      grid: {
        containLabel: true,
        left: 16,
        right: 16,
        top: 50,
        bottom: 10,
      },
      yAxis,
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
        formatter: function (params: any[] | null) {
          let tip = "";
          console.log(134, params);
          if (params !== null && params.length) {
            params.map((item: any) => {
              tip += `${item.marker}${item.seriesName}:  ${item.value[1]}${item.data?.unit}<br/>`;
              return item;
            });
            return `${params[0].axisValue}<br/>${tip}`;
          }
          return tip;
        },
      },
      series,
    };
    setOption(option);
  }, [props.data]);
  return <Echart option={option} />;
};
export default EchartBar;

/* eslint-disable @typescript-eslint/restrict-plus-operands */
/*
 * @Date: 2023-03-23 10:19:23
 * @LastEditors: Fullsize
 * @LastEditTime: 2023-10-11 16:36:58
 * @FilePath: /components/src/echart/components/rankbar/index.tsx
 * @Author: Fullsize
 */
import React, { useEffect, useRef } from "react";
import { useSetState } from "react-use";
import Echart from "../echart";
import _, { isArray } from "lodash";

export interface RankBarProps {
  /**
   * 配置对象
   */
  style?: React.CSSProperties;
  levelColor: string[];
  showNumber: number; // 6,
  barWidth: number; // 14,
  data_deconstruction: { [x: string]: any };

  /** 线性渐变，起止色值  */
  color?: [string, string];
  backgroud?: string;
  hasRank?: boolean;
  fontSize?: number;
  // 数据，支持二维数组
  data: any | any[];
}

const RankBar = (props: RankBarProps) => {
  const {
    hasRank = true,
    data,
    data_deconstruction = {
      name: "index_code_full_cname",
      value: "val",
      unit: "unit_name",
    },
    color = ["rgba(0, 253, 254, 1)", "rgba(0, 127, 255, 1)"],
    backgroud = "rgba(96, 179, 255, 0.19)",
    barWidth = 12,
    showNumber = 9,
    fontSize = 14,
    levelColor = ["#E32727", "#FE8401", "#F4DC13", "#007FFF"],
  } = props;
  const echartRef = useRef<any>(null);
  const [state, setState] = useSetState({
    data: [],
    option: {},
  });
  const fns = {
    textWidth(arr: any[], label: string, fontSize: number = 14) {
      const textMax: number =
        _.maxBy(arr, (o: any) => {
          return o[label].toString().length;
        })[label].toString().length ?? 0;

      return textMax * fontSize;
    },
  };
  useEffect(() => {
    if (_.isEmpty(data) || data.no_data || data.empty) {
      setState({
        data: [],
        option: {},
      });
      return;
    }
    let newData: any[] = [];

    if (isArray(data)) {
      newData = data.map((item: any) => {
        const json: { [x: string]: any } = {};
        for (const i in data_deconstruction) {
          json[i] = item[data_deconstruction[i]] ?? data_deconstruction[i];
          if (i === "value") {
            json[i] = Math.abs(item[data_deconstruction[i]]);
            json["originValue"] = item[data_deconstruction[i]];
          }
          // json["originData"] = item;
        }
        return json;
      });
    } else {
      newData = data.series[0].data.map((item: any, index: number) => ({
        name: data.xAxis[0].data[index],
        // name: data.series[0].name,
        value: Math.abs(item),
        originValue: item,
        unit: data.series[0].unit,
      }));
    }
    newData = newData.sort((a, b) => {
      return b.originValue - a.originValue;
    });
    const maxData = newData.map(() => {
      const maxValue: number =
        _.maxBy(newData, (o: any) => o.value)?.value ?? 0;

      return maxValue + maxValue * 0.1;
    });
    let yAxis1 = newData;
    if (!_.isEmpty(data?.series?.[1])) {
      yAxis1 = data.series[1].data.map((item: any, index: number) => ({
        name: data.xAxis[0].data[index],
        // name: data.series[0].name,
        value: Math.abs(item),
        originValue: item,
        unit: data.series[1].unit,
      }));
    }
    //

    const option = {
      // grid: {
      //   top: 32,
      //   bottom: 0,
      //   left: -10,
      //   right: 20,
      //   containLabel: true
      // },
      grid: {
        top: 40,
        bottom: 0,
        left:
          fns.textWidth(newData, "name", fontSize) + (hasRank ? 40 : fontSize),
        right:
          fns.textWidth(newData, "value", fontSize) +
          fns.textWidth(newData, "unit"),
        containLabel: false,
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
        formatter: function (params: any[]) {
          return (
            params[0].name +
            "<br/>" +
            params[0].marker +
            params[0].data.originValue +
            (params[0].data.unit || "")
          );
        },
      },
      xAxis: [
        {
          show: true,
          type: "value",
          position: "top",
          name: yAxis1[0].unit ?? "",
          offset: 15,
          nameGap: 30,
          splitLine: {
            show: false,
          },
          min: function () {
            return 0;
          },
          max: function (value: any) {
            return Math.round(value.max);
          },
          axisLine: {
            show: false,
          },
          splitArea: {
            show: false,
          },
          axisTick: {
            show: true,
          },
          axisLabel: {
            show: true,
          },
        },
      ],
      yAxis: [
        {
          type: "category",
          name: "",

          axisLine: {
            show: false,
          },
          splitLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          interval: 0,
          splitArea: {
            show: false,
          },
          axisLabel: {
            show: true,
            formatter: function (value: string | number) {
              let indexs = 0;

              newData.forEach((item: any, index: number) => {
                if (item.name.toString() === value.toString()) {
                  indexs = index + 1;
                }
              });
              return hasRank
                ? `{a|${indexs}}{value|${value}}`
                : `{value|${value}}`;
            },
          },
          data: newData
            .map((item: any, i: number) => {
              return {
                value: item.name,
                textStyle: {
                  rich: {
                    a: {
                      color: "#fff",
                      fontSize,
                      width: 20,
                      height: 20,
                      align: "center",
                      verticalAlign: "middle",
                      backgroundColor:
                        levelColor[i] ?? levelColor[levelColor.length - 1],
                      borderColor: "rgba(8, 138, 213, 0.15)",
                      borderWidth: 1,
                      padding: [0, 0, 0, 0],
                    },

                    value: {
                      width: fns.textWidth(newData, "name"),
                      align: "right",
                      fontSize,
                      padding: [0, 0, 0, 3],
                    },
                  },
                },
              };
            })
            .map((item: any) => item)
            .reverse(),
        },
        {
          type: "category",
          interval: 0,
          name: "",
          axisLine: {
            show: false,
          },
          splitLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          splitArea: {
            show: false,
          },
          axisLabel: {
            show: true,
            // width: maxRightWidth()
          },
          data: yAxis1
            .map((item: any) => ({
              // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
              value: item.originValue + item.unit,

              textStyle: {
                fontSize,
              },
            }))
            .map((item: any) => item)
            .reverse(),
        },
      ],

      series: [
        {
          // 内容
          type: "bar",
          // showBackground: true,
          // barCategoryGap: '30%',
          // backgroundStyle: {
          //   color: "rgba(96, 179, 255, 0.19)"
          // },
          name: newData[0].name,
          barWidth,
          legendHoverLink: false,

          silent: true,
          itemStyle: {
            normal: {
              color: {
                type: "linear",
                x: 1,
                y: 0,
                x2: 0,
                y2: 0,
                colorStops: [
                  {
                    offset: 0,
                    color: color[0], // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: color[1], // 100% 处的颜色
                  },
                ],
                global: false, // 缺省为 false
              },
            },
          },
          data: newData.map((item: any) => item).reverse(),
        },
        {
          name: "外框",
          type: "bar",
          barGap: "-100%", // 设置外框粗细
          data: maxData,
          barWidth,
          itemStyle: {
            normal: {
              color: backgroud, // 填充色
              barBorderColor: "", // 边框色
              opacity: 0.4,
              barBorderWidth: 0, // 边框宽度
              // barBorderRadius: 0, //圆角半径
              label: {
                // 标签显示位置
                show: false,
                position: "top", // insideTop 或者横向的 insideLeft
              },
            },
          },
          z: 0,
        },
      ],
      dataZoom: [
        {
          show: false,
          right: 0,
          width: 8,

          showDetail: false, // 即拖拽时候是否显示详细数值信息 默认true

          startValue: newData.length,
          endValue: newData.length - showNumber,
          brushSelect: false, // 是否开启刷选功能
          orient: "vertical",
          backgroundColor: "transparent",
          showDataShadow: false,
          fillerColor: "rgba(64, 83, 133, 0.8)",
          // borderColor: 'transparent',
          handleSize: 0,
        },
        {
          zoomOnMouseWheel: false,
          moveOnMouseMove: true,
          moveOnMouseWheel: true,
          // zoomLock: true, // 这个开启之后只能通过鼠标左右拉动，不能滚动显示
          type: "inside",
          orient: "vertical",
        },
      ],
    };

    setState({
      data,
      option,
    });
  }, [props]);
  return <Echart ref={echartRef} option={state.option} />;
};
export default RankBar;

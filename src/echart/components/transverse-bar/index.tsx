import React, { useEffect, useState } from "react";
import Ehcart from "../echart";
import _ from "lodash";
interface Props {
  data_deconstruction?: {
    name: string;
    unit: string;
    value: string;
    inverse: string;
    xData: string;
  };
  data: any[] | any;
}
const EchartTransverseEar = (props: Props) => {
  const {
    data_deconstruction = {
      name: "",
      value: "",
      unit: "",
      inverse: "",
      xData: "",
    },
  } = props;
  const [option, setOption] = useState({});
  useEffect(() => {
    const noData = props.data?.empty || _.isEmpty(props.data);
    if (noData) {
      setOption({});
      return;
    }

    // 数据类别
    const entries = _.uniqBy(props.data, data_deconstruction?.name);
    // x
    const yAxisData = _.uniqBy(props.data, data_deconstruction?.xData).map(
      (item: any) => item[data_deconstruction?.xData]
    );
    // series
    const series = entries.map((item: any) => ({
      type: "bar",
      name: item[data_deconstruction?.name],
      xAxisIndex: item[data_deconstruction.inverse] ? 2 : 0,
      yAxisIndex: item[data_deconstruction.inverse] ? 2 : 0,
      data: _.filter(props.data, data_deconstruction?.name)?.map(
        (item: any) => item[data_deconstruction?.value]
      ),
    }));
    //
    console.log(34, props.data[0][data_deconstruction.unit]);
    const option = {
      tooltip: {
        show: true,
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
        formatter: function (parmas) {
          console.log(parmas);
          return "";
        },
      },

      legend: {
        show: false,
      },
      grid: [
        {
          show: false,
          left: "10%",
          top: "15%",
          width: "40%",
          containLabel: true,
          bottom: 60,
        },
        {
          show: false,
          left: "4%",
          top: "15%",
          bottom: 60,
          width: "0%",
        },
        {
          show: false,
          left: "50%",
          top: "15%",
          bottom: 60,
          containLabel: true,
          width: "40%",
        },
      ],
      xAxis: [
        {
          name: props.data[0][data_deconstruction.unit] ?? "",
          type: "value",
          inverse: true,
          axisLabel: {
            show: true,

            margin: 0,
          },
        },
        {
          gridIndex: 1,
          show: true,
          axisLabel: {
            margin: 0,
          },
          splitLine: {},
        },
        {
          name: props.data[0][data_deconstruction.unit] ?? "",
          gridIndex: 2,
          type: "value",
          axisLabel: {
            show: true,
            margin: 0,
          },
        },
      ],
      yAxis: [
        {
          type: "category",
          inverse: false,
          position: "right",
          axisLabel: {
            show: false,
          },
          axisLine: {
            show: true,
            lineStyle: {},
          },
          axisTick: {
            show: false,
          },
          data: yAxisData,
        },
        {
          type: "category",

          inverse: false,
          gridIndex: 1,
          position: "left",
          axisLabel: {
            align: "left",
            padding: [8, 0, 0, 0],
          },
          axisLine: {
            show: false,
            lineStyle: {},
          },
          axisTick: {
            show: false,
          },
          data: yAxisData,
        },
        {
          type: "category",
          inverse: false,
          gridIndex: 2,
          position: "left",
          axisLabel: {
            show: false,
          },
          axisLine: {
            show: true,
          },
          axisTick: {
            show: false,
          },
          data: yAxisData,
        },
      ],
      // series: [
      //   {
      //     type: "bar",
      //     name: "供应情况",
      //     data: data1,
      //   },
      //   {
      //     type: "bar",
      //     xAxisIndex: 2,
      //     yAxisIndex: 2,
      //     name: "需求情况",
      //     data: data2,
      //   },
      // ],
      series,
    };
    setOption(option);
  }, [props.data]);
  return <Ehcart option={option}></Ehcart>;
};
export default EchartTransverseEar;

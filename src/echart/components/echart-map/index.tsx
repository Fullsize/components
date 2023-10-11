import React, { useEffect, useState } from "react";
import Echart, { OPTIONTYPE } from "../echart";
import _, { isArray } from "lodash";
import * as echarts from "echarts";
interface Props {
  geojson: any;
  scatter?: {
    data: {
      name: string;
      lon: string | number;
      lat: string | number;
      value: number | string;
      unit?: string;
      [x: string]: any;
    }[];
    symbol?: string;
  };
  areaData?: { name: string; value: number; unit?: string }[];
}

const EchartMap = (props: Props) => {
  const [option, setOption] = useState<OPTIONTYPE>({});
  const fns = {
    setMap(op: OPTIONTYPE) {
      if (_.isEmpty(props.geojson)) return op;
      echarts.registerMap("echart_map", props.geojson);
      const option: OPTIONTYPE = {
        geo: {
          show: true,
          label: {
            show: false,
          },
          map: "echart_map",
          zoom: 1.2,
        },
        visualMap: {
          show: false,
          calculable: true,
        },
      };
      return _.merge(op, option);
    },
    setArea(op: OPTIONTYPE) {
      if (_.isEmpty(props.areaData)) return op;
      const ot: OPTIONTYPE = {
        visualMap: {
          min: _.minBy(props.areaData, "value")?.value || 0,
          max: _.maxBy(props.areaData, "value")?.value,
        },
        series: {
          name: "area",
          type: "map",
          map: "echart_map",
          emphasis: {
            disabled: true,
          },
          label: {
            show: true,
          },
          zoom: 1.2,
          data: props.areaData,
        },
      };
      ot.series = _.concat(op.series ?? [], ot.series ?? []);
      delete op.series;
      return echarts.util.merge(op, ot);
    },
    setScatter(op: OPTIONTYPE) {
      if (_.isEmpty(props.scatter?.data)) return op;
      const arr: any[] | undefined = props.scatter?.data.map((item) => ({
        name: item.name,
        value: [item.lon, item.lat, item.value],
        unit: item.unit,
        itemStyle: {
          color: "rgb(255, 138, 12)",
        },
      }));
      const ot: OPTIONTYPE = {
        series: [
          {
            name: "dot",
            type: "scatter",
            coordinateSystem: "geo",
            symbol: props.scatter?.symbol,
            data: arr,
            zlevel: 6,
          },
        ],
      };
      ot.series = _.concat(op.series ?? [], ot.series ?? []);
      delete op.series;
      return echarts.util.merge(op, ot);
    },
  };
  useEffect(() => {
    let option: OPTIONTYPE = {
      tooltip: {
        show: true,
        trigger: "item",
        formatter: (params: any) => {
          let str = "";
          if (isArray(params)) {
            str = "";
          } else {
            if (params.seriesType === "map") {
              str =
                params.data?.name +
                "<br/>" +
                (params.data.value ?? "") +
                (params.data.unit ?? "");
            }
            if (params.seriesType === "scatter") {
              str =
                params.data?.name +
                "<br/>" +
                (params.data.value[2] ?? "") +
                (params.data.unit ?? "");
            }
          }

          return str;
        },
      },
    };
    // 地图设置
    option = fns.setMap(option);
    // 地图数据设置
    option = fns.setArea(option);
    // 地图打点
    option = fns.setScatter(option);
    setOption(option);
  }, [props.geojson, props.areaData, props.scatter]);
  return <Echart option={option} />;
};
export default EchartMap;

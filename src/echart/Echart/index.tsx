import React, { useEffect, useRef, useState } from "react";
import { useDebounce, useMeasure } from "react-use";
import _ from "lodash";
import * as echarts from "echarts";
import "./index.css";

interface Props {
  category: any[];
  style?: React.CSSProperties;
  className?: string;
  clear?: boolean | number;
  download?: boolean;
  option: echarts.EChartsOption;
  empty?: boolean;
  msgs?: string[];
  getEchartObj?: (echart: any) => void;
}
const Echart: React.FC<Props> = (props) => {
  const option: any = {
    title: {
      text: !_.isEmpty(props.category) ? "" : props.empty ? "" : "暂无数据",
      x: "center",
      y: "center",
      textStyle: {
        color: "#000",
        fontWeight: "normal",
        fontSize: 16,
      },
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
      formatter: function (params: any) {
        let relVal = params[0].name;
        for (let i = 0; i < params.length; i++) {
          relVal +=
            '<div><span style="background:' +
            params[i].color +
            '; display: inline-block;height: 10px;width: 10px;margin-right: 5px;vertical-align: middle;border-radius: 50%;"></span>' +
            params[i].seriesName +
            " : " +
            params[i].value[1] +
            "</div>";
        }
        return relVal;
      },
      // formatter: function (params) {
      //   // console.log(params[1])
      //   return tar?.name + '<br/>' + tar?.seriesName + ' : ' + tar?.value;
      // }
      // formatter: '{b}<br/>{a}:{c}'
    },
    grid: {
      top: "40px",
      bottom: 40,
      left: 30,
      right: "20px",
      containLabel: true,
    },
    legend: {
      show: true,
      type: "scroll",
      bottom: 3,
      width: "76%",
      itemWidth: 12,
      itemHeight: 12,
      lineStyle: {
        color: "inherit",
        type: "inherit",
        width: 2,
      },
      textStyle: {
        fontSize: 12,
        color: "rgba(8, 138, 213, 1)",
        fontFamily: "MicrosoftYaHei",
        fontWeight: 500,
      },
      pageIconColor: "#555555",
      pageIconInactiveColor: "rgba(8, 138, 213, 1)",
      pageTextStyle: {
        color: "rgba(8, 138, 213, 1)",
      },
    },
    xAxis: {
      show: !_.isEmpty(props.category),
      type: "category",
      axisLine: {
        lineStyle: {
          color: "#fff",
        },
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
        color: "#fff",
        fontSize: 14,
        margin: 13,
      },
      nameTextStyle: {
        color: "#fff",
        fontSize: 14,
      },
      data: props.category,
    },
    yAxis: {
      show: !_.isEmpty(props.category),
      type: "value",
      name: "",
      scale: true,

      axisLabel: {
        color: "#fff",
        fontSize: 14,
      },
      nameTextStyle: {
        color: "#fff",
        fontSize: 14,
      },
      axisLine: {
        lineStyle: {
          color: "#fff",
        },
      },
      axisTick: {
        show: false,
      },
      splitArea: {
        show: false,
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: ["rgba(8, 138, 213, 0.25)"],
          width: 1,
          type: "solid",
        },
      },
    },
  };

  const [constainerRef, { width, height }] = useMeasure();
  const [echartObj, setEchartObj] = useState<any>(null);
  const echartRef = useRef(null);
  const init = () => {
    if (!echartRef.current) {
      return false;
    }

    const chart = echarts.init(echartRef.current);
    // const canvasE: any = chart.getDom().querySelector("canvas");

    console.log(157, chart.getDom());
    // chart.setOption(_.merge(option, props.option));
    chart.setOption(option);
    props.getEchartObj?.(chart);
    setEchartObj(chart);
  };

  const change = (echartObj: any) => {
    echartObj?.clear();
    echartObj?.resize();

    if (props.clear) {
      if (_.isEmpty(props.option)) {
        echartObj.setOption({
          title: {
            text: !_.isEmpty(props.category)
              ? ""
              : props.empty
              ? ""
              : "暂无数据",
            x: "center",
            y: "center",
            textStyle: {
              color: "#000",
              fontWeight: "normal",
              fontSize: 16,
            },
          },
        });
      } else {
        echartObj.setOption(props.option);
      }
    } else {
      echartObj.setOption(_.merge(option, props.option));
    }
    console.log(182, props.option);
  };
  useEffect(() => {
    init();
    return () => {
      try {
        // echartObj.dispose();
      } catch (e) {
        console.log(e);
      }
    };
  }, []);
  useDebounce(
    () => {
      if (echartObj) {
        change(echartObj);
      }
    },
    0,
    [props.option, props.clear]
  );
  // const downloadImg = () => {
  //   echartObj.getDataURL({
  //     backgroundColor: "rgba(3,10,48,0.2)",
  //   });
  //   const link = document.createElement("a");
  //   // let blob = new Blob([res.data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' })
  //   const fileName = "echart.png";
  //   link.style.display = "none";
  //   link.href = echartObj.getDataURL({
  //     backgroundColor: "rgba(3,10,48,1)",
  //   });
  //   link.setAttribute("download", fileName);
  //   document.body.appendChild(link);
  //   link.click();
  //   setTimeout(() => {
  //     document.body.removeChild(link);
  //   }, 0);
  // };
  return (
    <div
      ref={constainerRef}
      style={{
        width: "100%",
        height: "100%",
        ...props.style,
        minHeight: 200,
        position: "relative",
      }}
    >
      <div
        className={props.className ?? ""}
        ref={echartRef}
        style={{ width, height }}
      ></div>
      {props.empty && (
        <div className="echart_empty_constainer">
          <img
            className="echart_empty_img"
            src="http://192.170.13.66/economyxz/assets/imgs/icons/nodata.png"
            alt=""
          />
          <p>暂无数据</p>
          <div className="echart_empty_info">
            <span>指标:</span>
            {props.msgs?.map((item, i, arr) => (
              <span key={i}>
                {item}
                {i === arr.length - 1 ? "" : ","}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* <div className={styles['download']} onClick={downloadImg}></div> */}
    </div>
  );
};

export default Echart;

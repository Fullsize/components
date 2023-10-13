import React from "react";
import { EchartTransverseEar } from "../src/echart";
import type { StoryObj } from "@storybook/react";
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const DefaultComponent = (props) => (
  <div style={{ height: 500 }}>
    <EchartTransverseEar {...props} />
  </div>
);
export default {
  title: "echart/EchartTransverseEar",
  component: DefaultComponent,
  // parameters: {
  //   // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
  //   layout: 'centered',
  // },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    data_deconstruction: {
      description: "数据转换方法",
      control: {
        type: "object",
      },
    },

    data: {
      description: "数据列表",
    },
  },
};
type Story = StoryObj<typeof EchartTransverseEar>;
// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    data_deconstruction: {
      name: "index_code_full_cname",
      unit: "unit_name",
      value: "val",
      inverse: "inverse",
      xData: "time_name",
    },
    data: [
      {
        index_code: "ZB00170103",
        type_code: "LX0301",
        unit_code: "DW020103",
        time_name: "202205",
        val: 108.64,
        index_full_code: "F01ZB00170103LX0301",
        index_code_full_cname: "进口总额",
        unit_name: "亿元",
        index_code_full_type_name: "累计值",
        time_type: 6,
        inverse: false,
      },
      {
        index_code: "ZB00170102",
        type_code: "LX0301",
        unit_code: "DW020103",
        time_name: "202205",
        val: 1261.71,
        index_full_code: "F01ZB00170102LX0301",
        index_code_full_cname: "出口总额",
        unit_name: "亿元",
        index_code_full_type_name: "累计值",
        time_type: 6,
        inverse: true,
      },
      {
        index_code: "ZB001701",
        type_code: "LX0301",
        unit_code: "DW020103",
        time_name: "202205",
        val: 1370.35,
        index_full_code: "F01ZB001701LX0301",
        index_code_full_cname: "进出口总额",
        unit_name: "亿元",
        index_code_full_type_name: "累计值",
        time_type: 6,
        inverse: false,
      },
      {
        index_code: "ZB00170102",
        type_code: "LX0301",
        unit_code: "DW020103",
        time_name: "202206",
        val: 1558.7,
        index_full_code: "F01ZB00170102LX0301",
        index_code_full_cname: "出口总额",
        unit_name: "亿元",
        index_code_full_type_name: "累计值",
        time_type: 6,
        inverse: true,
      },
      {
        index_code: "ZB00170103",
        type_code: "LX0301",
        unit_code: "DW020103",
        time_name: "202206",
        val: 135.5,
        index_full_code: "F01ZB00170103LX0301",
        index_code_full_cname: "进口总额",
        unit_name: "亿元",
        index_code_full_type_name: "累计值",
        time_type: 6,
        inverse: false,
      },
      {
        index_code: "ZB001701",
        type_code: "LX0301",
        unit_code: "DW020103",
        time_name: "202206",
        val: 1694.2,
        index_full_code: "F01ZB001701LX0301",
        index_code_full_cname: "进出口总额",
        unit_name: "亿元",
        index_code_full_type_name: "累计值",
        time_type: 6,
        inverse: false,
      },
      {
        index_code: "ZB00170103",
        type_code: "LX0301",
        unit_code: "DW020103",
        time_name: "202207",
        val: 157.33,
        index_full_code: "F01ZB00170103LX0301",
        index_code_full_cname: "进口总额",
        unit_name: "亿元",
        index_code_full_type_name: "累计值",
        time_type: 6,
        inverse: false,
      },
      {
        index_code: "ZB001701",
        type_code: "LX0301",
        unit_code: "DW020103",
        time_name: "202207",
        val: 2083.36,
        index_full_code: "F01ZB001701LX0301",
        index_code_full_cname: "进出口总额",
        unit_name: "亿元",
        index_code_full_type_name: "累计值",
        time_type: 6,
        inverse: false,
      },
      {
        index_code: "ZB00170102",
        type_code: "LX0301",
        unit_code: "DW020103",
        time_name: "202207",
        val: 1926.04,
        index_full_code: "F01ZB00170102LX0301",
        index_code_full_cname: "出口总额",
        unit_name: "亿元",
        index_code_full_type_name: "累计值",
        time_type: 6,
        inverse: true,
      },
      {
        index_code: "ZB00170103",
        type_code: "LX0301",
        unit_code: "DW020103",
        time_name: "202208",
        val: 182.05,
        index_full_code: "F01ZB00170103LX0301",
        index_code_full_cname: "进口总额",
        unit_name: "亿元",
        index_code_full_type_name: "累计值",
        time_type: 6,
        inverse: false,
      },
      {
        index_code: "ZB00170102",
        type_code: "LX0301",
        unit_code: "DW020103",
        time_name: "202208",
        val: 2266.84,
        index_full_code: "F01ZB00170102LX0301",
        index_code_full_cname: "出口总额",
        unit_name: "亿元",
        index_code_full_type_name: "累计值",
        time_type: 6,
        inverse: true,
      },
      {
        index_code: "ZB001701",
        type_code: "LX0301",
        unit_code: "DW020103",
        time_name: "202208",
        val: 2448.89,
        index_full_code: "F01ZB001701LX0301",
        index_code_full_cname: "进出口总额",
        unit_name: "亿元",
        index_code_full_type_name: "累计值",
        time_type: 6,
        inverse: false,
      },
      {
        index_code: "ZB00170102",
        type_code: "LX0301",
        unit_code: "DW020103",
        time_name: "202209",
        val: 2567.36,
        index_full_code: "F01ZB00170102LX0301",
        index_code_full_cname: "出口总额",
        unit_name: "亿元",
        index_code_full_type_name: "累计值",
        time_type: 6,
        inverse: true,
      },
      {
        index_code: "ZB00170103",
        type_code: "LX0301",
        unit_code: "DW020103",
        time_name: "202209",
        val: 209.49,
        index_full_code: "F01ZB00170103LX0301",
        index_code_full_cname: "进口总额",
        unit_name: "亿元",
        index_code_full_type_name: "累计值",
        time_type: 6,
        inverse: false,
      },
      {
        index_code: "ZB001701",
        type_code: "LX0301",
        unit_code: "DW020103",
        time_name: "202209",
        val: 2776.85,
        index_full_code: "F01ZB001701LX0301",
        index_code_full_cname: "进出口总额",
        unit_name: "亿元",
        index_code_full_type_name: "累计值",
        time_type: 6,
        inverse: false,
      },
      {
        index_code: "ZB00170102",
        type_code: "LX0301",
        unit_code: "DW020103",
        time_name: "202210",
        val: 2829.42,
        index_full_code: "F01ZB00170102LX0301",
        index_code_full_cname: "出口总额",
        unit_name: "亿元",
        index_code_full_type_name: "累计值",
        time_type: 6,
        inverse: true,
      },
      {
        index_code: "ZB00170103",
        type_code: "LX0301",
        unit_code: "DW020103",
        time_name: "202210",
        val: 239.63,
        index_full_code: "F01ZB00170103LX0301",
        index_code_full_cname: "进口总额",
        unit_name: "亿元",
        index_code_full_type_name: "累计值",
        time_type: 6,
        inverse: false,
      },
      {
        index_code: "ZB001701",
        type_code: "LX0301",
        unit_code: "DW020103",
        time_name: "202210",
        val: 3069.04,
        index_full_code: "F01ZB001701LX0301",
        index_code_full_cname: "进出口总额",
        unit_name: "亿元",
        index_code_full_type_name: "累计值",
        time_type: 6,
        inverse: false,
      },
      {
        index_code: "ZB00170102",
        type_code: "LX0301",
        unit_code: "DW020103",
        time_name: "202211",
        val: 3118.03,
        index_full_code: "F01ZB00170102LX0301",
        index_code_full_cname: "出口总额",
        unit_name: "亿元",
        index_code_full_type_name: "累计值",
        time_type: 6,
        inverse: true,
      },
      {
        index_code: "ZB00170103",
        type_code: "LX0301",
        unit_code: "DW020103",
        time_name: "202211",
        val: 265.77,
        index_full_code: "F01ZB00170103LX0301",
        index_code_full_cname: "进口总额",
        unit_name: "亿元",
        index_code_full_type_name: "累计值",
        time_type: 6,
        inverse: false,
      },
      {
        index_code: "ZB001701",
        type_code: "LX0301",
        unit_code: "DW020103",
        time_name: "202211",
        val: 3383.8,
        index_full_code: "F01ZB001701LX0301",
        index_code_full_cname: "进出口总额",
        unit_name: "亿元",
        index_code_full_type_name: "累计值",
        time_type: 6,
        inverse: false,
      },
      {
        index_code: "ZB001701",
        type_code: "LX0301",
        unit_code: "DW020103",
        time_name: "202212",
        val: 3691.93,
        index_full_code: "F01ZB001701LX0301",
        index_code_full_cname: "进出口总额",
        unit_name: "亿元",
        index_code_full_type_name: "累计值",
        time_type: 6,
        inverse: false,
      },
      {
        index_code: "ZB00170103",
        type_code: "LX0301",
        unit_code: "DW020103",
        time_name: "202212",
        val: 282.96,
        index_full_code: "F01ZB00170103LX0301",
        index_code_full_cname: "进口总额",
        unit_name: "亿元",
        index_code_full_type_name: "累计值",
        time_type: 6,
        inverse: false,
      },
      {
        index_code: "ZB00170102",
        type_code: "LX0301",
        unit_code: "DW020103",
        time_name: "202212",
        val: 3408.98,
        index_full_code: "F01ZB00170102LX0301",
        index_code_full_cname: "出口总额",
        unit_name: "亿元",
        index_code_full_type_name: "累计值",
        time_type: 6,
        inverse: true,
      },
      {
        index_code: "ZB00170103",
        type_code: "LX0301",
        unit_code: "DW020103",
        time_name: "202302",
        val: 45.86,
        index_full_code: "F01ZB00170103LX0301",
        index_code_full_cname: "进口总额",
        unit_name: "亿元",
        index_code_full_type_name: "累计值",
        time_type: 6,
        inverse: false,
      },
      {
        index_code: "ZB001701",
        type_code: "LX0301",
        unit_code: "DW020103",
        time_name: "202302",
        val: 530.43,
        index_full_code: "F01ZB001701LX0301",
        index_code_full_cname: "进出口总额",
        unit_name: "亿元",
        index_code_full_type_name: "累计值",
        time_type: 6,
        inverse: false,
      },
      {
        index_code: "ZB00170102",
        type_code: "LX0301",
        unit_code: "DW020103",
        time_name: "202302",
        val: 484.56,
        index_full_code: "F01ZB00170102LX0301",
        index_code_full_cname: "出口总额",
        unit_name: "亿元",
        index_code_full_type_name: "累计值",
        time_type: 6,
        inverse: true,
      },
      {
        index_code: "ZB00170103",
        type_code: "LX0301",
        unit_code: "DW020103",
        time_name: "202303",
        val: 66.7,
        index_full_code: "F01ZB00170103LX0301",
        index_code_full_cname: "进口总额",
        unit_name: "亿元",
        index_code_full_type_name: "累计值",
        time_type: 6,
        inverse: false,
      },
      {
        index_code: "ZB001701",
        type_code: "LX0301",
        unit_code: "DW020103",
        time_name: "202303",
        val: 924.99,
        index_full_code: "F01ZB001701LX0301",
        index_code_full_cname: "进出口总额",
        unit_name: "亿元",
        index_code_full_type_name: "累计值",
        time_type: 6,
        inverse: false,
      },
      {
        index_code: "ZB00170102",
        type_code: "LX0301",
        unit_code: "DW020103",
        time_name: "202303",
        val: 858.29,
        index_full_code: "F01ZB00170102LX0301",
        index_code_full_cname: "出口总额",
        unit_name: "亿元",
        index_code_full_type_name: "累计值",
        time_type: 6,
        inverse: true,
      },
      {
        index_code: "ZB00170102",
        type_code: "LX0301",
        unit_code: "DW020103",
        time_name: "202304",
        val: 1258.16,
        index_full_code: "F01ZB00170102LX0301",
        index_code_full_cname: "出口总额",
        unit_name: "亿元",
        index_code_full_type_name: "累计值",
        time_type: 6,
        inverse: true,
      },
      {
        index_code: "ZB00170103",
        type_code: "LX0301",
        unit_code: "DW020103",
        time_name: "202304",
        val: 92.45,
        index_full_code: "F01ZB00170103LX0301",
        index_code_full_cname: "进口总额",
        unit_name: "亿元",
        index_code_full_type_name: "累计值",
        time_type: 6,
        inverse: false,
      },
      {
        index_code: "ZB001701",
        type_code: "LX0301",
        unit_code: "DW020103",
        time_name: "202304",
        val: 1350.61,
        index_full_code: "F01ZB001701LX0301",
        index_code_full_cname: "进出口总额",
        unit_name: "亿元",
        index_code_full_type_name: "累计值",
        time_type: 6,
        inverse: false,
      },
      {
        index_code: "ZB001701",
        type_code: "LX0301",
        unit_code: "DW020103",
        time_name: "202305",
        val: 1721.11,
        index_full_code: "F01ZB001701LX0301",
        index_code_full_cname: "进出口总额",
        unit_name: "亿元",
        index_code_full_type_name: "累计值",
        time_type: 6,
        inverse: false,
      },
      {
        index_code: "ZB00170103",
        type_code: "LX0301",
        unit_code: "DW020103",
        time_name: "202305",
        val: 129.91,
        index_full_code: "F01ZB00170103LX0301",
        index_code_full_cname: "进口总额",
        unit_name: "亿元",
        index_code_full_type_name: "累计值",
        time_type: 6,
        inverse: false,
      },
      {
        index_code: "ZB00170102",
        type_code: "LX0301",
        unit_code: "DW020103",
        time_name: "202305",
        val: 1591.2,
        index_full_code: "F01ZB00170102LX0301",
        index_code_full_cname: "出口总额",
        unit_name: "亿元",
        index_code_full_type_name: "累计值",
        time_type: 6,
        inverse: true,
      },
      {
        index_code: "ZB001701",
        type_code: "LX0301",
        unit_code: "DW020103",
        time_name: "202306",
        val: 2008.39,
        index_full_code: "F01ZB001701LX0301",
        index_code_full_cname: "进出口总额",
        unit_name: "亿元",
        index_code_full_type_name: "累计值",
        time_type: 6,
        inverse: false,
      },
      {
        index_code: "ZB00170102",
        type_code: "LX0301",
        unit_code: "DW020103",
        time_name: "202306",
        val: 1841.89,
        index_full_code: "F01ZB00170102LX0301",
        index_code_full_cname: "出口总额",
        unit_name: "亿元",
        index_code_full_type_name: "累计值",
        time_type: 6,
        inverse: true,
      },
      {
        index_code: "ZB00170103",
        type_code: "LX0301",
        unit_code: "DW020103",
        time_name: "202306",
        val: 166.5,
        index_full_code: "F01ZB00170103LX0301",
        index_code_full_cname: "进口总额",
        unit_name: "亿元",
        index_code_full_type_name: "累计值",
        time_type: 6,
        inverse: false,
      },
    ],
  },
};

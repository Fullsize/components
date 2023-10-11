import React from "react";
import { EchartBar } from "../src/echart";
import type { StoryObj } from "@storybook/react";
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const DefaultComponent = (props) => (
  <div style={{ height: 300 }}>
    <EchartBar {...props} />
  </div>
);
export default {
  title: "echart/EchartBar",
  component: DefaultComponent,
  // parameters: {
  //   // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
  //   layout: 'centered',
  // },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    xDataName: {
      description: "x轴绑定key",
      control: {
        type: "text",
      },
    },
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
type Story = StoryObj<typeof EchartBar>;
// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    data: [
      {
        time_name: "2020Q2",
        val: 2661.15,

        index_code_full_cname: "增长值",
        unit_name: "亿元",

        type: "bar",
      },
      {
        time_name: "2020Q2",
        val: 0.7,

        index_code_full_cname: "增涨速度",
        unit_name: "%",

        type: "line",
      },
      {
        time_name: "2020Q3",
        val: 4143.97,
        index_code_full_cname: "增长值",
        unit_name: "亿元",
        type: "bar",
      },
      {
        time_name: "2020Q3",
        val: 1.4,
        index_code_full_cname: "增涨速度",
        unit_name: "%",
        type: "line",
      },
      {
        time_name: "2020Q4",
        val: 6000.66,
        index_code_full_cname: "增长值",
        unit_name: "亿元",
        type: "bar",
      },
      {
        time_name: "2020Q4",
        val: 3.3,
        index_code_full_cname: "增涨速度",
        unit_name: "%",
        type: "line",
      },
      {
        time_name: "2021Q1",
        val: 1434.49,
        index_code_full_cname: "增长值",
        unit_name: "亿元",
        type: "bar",
      },
      {
        time_name: "2021Q1",
        val: 17.4,
        index_code_full_cname: "增涨速度",
        unit_name: "%",
        type: "line",
      },
      {
        time_name: "2021Q2",
        val: 3188.61,
        index_code_full_cname: "增长值",
        unit_name: "亿元",
        type: "bar",
      },
      {
        time_name: "2021Q2",
        val: 13.7,
        index_code_full_cname: "增涨速度",
        unit_name: "%",
        type: "line",
      },
      {
        time_name: "2021Q3",
        val: 4900.95,
        index_code_full_cname: "增长值",
        unit_name: "亿元",
        type: "bar",
      },
      {
        time_name: "2021Q3",
        val: 11.4,
        index_code_full_cname: "增涨速度",
        unit_name: "%",
        type: "line",
      },
      {
        time_name: "2021Q4",
        val: 6795.26,

        index_code_full_cname: "增长值",
        unit_name: "亿元",

        type: "bar",
      },
      {
        time_name: "2021Q4",
        val: 8.7,
        index_code_full_cname: "增涨速度",
        unit_name: "%",
        type: "line",
      },
      {
        time_name: "2022Q1",
        val: 1609.64,
        index_code_full_cname: "增长值",
        unit_name: "亿元",
        type: "bar",
      },
      {
        time_name: "2022Q1",
        val: 5.3,
        index_code_full_cname: "增涨速度",
        unit_name: "%",
        type: "line",
      },
      {
        time_name: "2022Q2",
        val: 3360.14,
        index_code_full_cname: "增长值",
        unit_name: "亿元",
        type: "bar",
      },
      {
        time_name: "2022Q2",
        val: 3.2,
        index_code_full_cname: "增涨速度",
        unit_name: "%",
        type: "line",
      },
      {
        time_name: "2022Q3",
        val: 5236.13,
        index_code_full_cname: "增长值",
        unit_name: "亿元",
        type: "bar",
      },
      {
        time_name: "2022Q3",
        val: 4.3,
        index_code_full_cname: "增涨速度",
        unit_name: "%",
        type: "line",
      },
      {
        time_name: "2022Q4",
        val: 7350.55,
        index_code_full_cname: "增长值",
        unit_name: "亿元",
        type: "bar",
      },
      {
        time_name: "2022Q4",
        val: 4.4,
        index_code_full_cname: "增涨速度",
        unit_name: "%",
        type: "line",
      },
      {
        time_name: "2023Q1",
        val: 1738.76,
        index_code_full_cname: "增长值",
        unit_name: "亿元",
        type: "bar",
      },
      {
        time_name: "2023Q1",
        val: 6.1,
        index_code_full_cname: "增涨速度",
        unit_name: "%",
        type: "line",
      },
      {
        time_name: "2023Q2",
        val: 3621.93,
        index_code_full_cname: "增长值",
        unit_name: "亿元",
        type: "bar",
      },
      {
        time_name: "2023Q2",
        val: 7.9,
        index_code_full_cname: "增涨速度",
        unit_name: "%",
        type: "line",
      },
    ],
    data_deconstruction: {
      name: "index_code_full_cname",
      value: "val",
      unit: "unit_name",
      type: "type",
    },
  },
};

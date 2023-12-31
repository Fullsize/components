import React from "react";
import { RankBar } from "../src/echart";
import type { StoryObj } from "@storybook/react";
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const DefaultComponent = (props) => (
  <div style={{ height: 300 }}>
    <RankBar {...props} />
  </div>
);
export default {
  title: "echart/RankBar",
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
    color: {
      description: "柱图颜色",
      control: {
        type: "object",
      },
    },
    backgroud: {
      description: "柱图背景颜色",
      control: {
        type: "text",
      },
    },
    barWidth: {
      description: "柱图宽度",
      control: {
        type: "number",
      },
    },
    showNumber: {
      description: "显示数量",
      control: {
        type: "number",
      },
    },
    fontSize: {
      description: "字体大小",
      control: {
        type: "number",
      },
    },
    levelColor: {
      description: "排名色块颜色列表",
      control: {
        type: "object",
      },
    },
    hasRank: {
      description: "是否显示排名色块",
      control: {
        type: "boolean",
      },
    },
    data: {
      description: "数据列表",
    },
  },
};
type Story = StoryObj<typeof RankBar>;
// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    hasRank: true,
    data: [
      {
        index_code: "ZB00060105",
        group_code: "FHY2017B",
        type_code: "LX0301",
        unit_code: "DW090102",
        time_name: "2021",
        time_code: "2021",
        val: 0.21,
        index_full_code: "FHY2017BZB00060105LX0301",
        index_code_full_cname: "采矿业",
        unit_name: "万人",
        index_code_full_type_name: "累计值",
        group_name: "全部",
        time_type: 4,
      },
      {
        index_code: "ZB00060105",
        group_code: "FHY2017D",
        type_code: "LX0301",
        unit_code: "DW090102",
        time_name: "2021",
        time_code: "2021",
        val: 1.65,
        index_full_code: "FHY2017DZB00060105LX0301",
        index_code_full_cname: "电力、燃气及水的生产和供应业",
        unit_name: "万人",
        index_code_full_type_name: "累计值",
        group_name: "全部",
        time_type: 4,
      },
      {
        index_code: "ZB00060105",
        group_code: "FHY2017N",
        type_code: "LX0301",
        unit_code: "DW090102",
        time_name: "2021",
        time_code: "2021",
        val: 1.78,
        index_full_code: "FHY2017NZB00060105LX0301",
        index_code_full_cname: "水利、环境和公共设施管理业",
        unit_name: "万人",
        index_code_full_type_name: "累计值",
        group_name: "全部",
        time_type: 4,
      },
      {
        index_code: "ZB00060105",
        group_code: "FHY2017I",
        type_code: "LX0301",
        unit_code: "DW090102",
        time_name: "2021",
        time_code: "2021",
        val: 2.67,
        index_full_code: "FHY2017IZB00060105LX0301",
        index_code_full_cname: "信息传输、计算机服务和软件业",
        unit_name: "万人",
        index_code_full_type_name: "累计值",
        group_name: "全部",
        time_type: 4,
      },
      {
        index_code: "ZB00060105",
        group_code: "FHY2017R",
        type_code: "LX0301",
        unit_code: "DW090102",
        time_name: "2021",
        time_code: "2021",
        val: 3.19,
        index_full_code: "FHY2017RZB00060105LX0301",
        index_code_full_cname: "文化、体育和娱乐业",
        unit_name: "万人",
        index_code_full_type_name: "累计值",
        group_name: "全部",
        time_type: 4,
      },
      {
        index_code: "ZB00060105",
        group_code: "FHY2017M",
        type_code: "LX0301",
        unit_code: "DW090102",
        time_name: "2021",
        time_code: "2021",
        val: 3.97,
        index_full_code: "FHY2017MZB00060105LX0301",
        index_code_full_cname: "科学研究、技术服务和地质勘查业",
        unit_name: "万人",
        index_code_full_type_name: "累计值",
        group_name: "全部",
        time_type: 4,
      },
      {
        index_code: "ZB00060105",
        group_code: "FHY2017J",
        type_code: "LX0301",
        unit_code: "DW090102",
        time_name: "2021",
        time_code: "2021",
        val: 4.73,
        index_full_code: "FHY2017JZB00060105LX0301",
        index_code_full_cname: "金融业",
        unit_name: "万人",
        index_code_full_type_name: "累计值",
        group_name: "全部",
        time_type: 4,
      },
      {
        index_code: "ZB00060105",
        group_code: "FHY2017Q",
        type_code: "LX0301",
        unit_code: "DW090102",
        time_name: "2021",
        time_code: "2021",
        val: 5.02,
        index_full_code: "FHY2017QZB00060105LX0301",
        index_code_full_cname: "卫生、社会保障和社会福利业",
        unit_name: "万人",
        index_code_full_type_name: "累计值",
        group_name: "全部",
        time_type: 4,
      },
      {
        index_code: "ZB00060105",
        group_code: "FHY2017K",
        type_code: "LX0301",
        unit_code: "DW090102",
        time_name: "2021",
        time_code: "2021",
        val: 5.23,
        index_full_code: "FHY2017KZB00060105LX0301",
        index_code_full_cname: "房地产业",
        unit_name: "万人",
        index_code_full_type_name: "累计值",
        group_name: "全部",
        time_type: 4,
      },
      {
        index_code: "ZB00060105",
        group_code: "FHY2017S",
        type_code: "LX0301",
        unit_code: "DW090102",
        time_name: "2021",
        time_code: "2021",
        val: 7.43,
        index_full_code: "FHY2017SZB00060105LX0301",
        index_code_full_cname: "公共管理和社会组织",
        unit_name: "万人",
        index_code_full_type_name: "累计值",
        group_name: "全部",
        time_type: 4,
      },
      {
        index_code: "ZB00060105",
        group_code: "FHY2017O",
        type_code: "LX0301",
        unit_code: "DW090102",
        time_name: "2021",
        time_code: "2021",
        val: 8.43,
        index_full_code: "FHY2017OZB00060105LX0301",
        index_code_full_cname: "居民服务和其他服务业",
        unit_name: "万人",
        index_code_full_type_name: "累计值",
        group_name: "全部",
        time_type: 4,
      },
      {
        index_code: "ZB00060105",
        group_code: "FHY2017P",
        type_code: "LX0301",
        unit_code: "DW090102",
        time_name: "2021",
        time_code: "2021",
        val: 9.94,
        index_full_code: "FHY2017PZB00060105LX0301",
        index_code_full_cname: "教育",
        unit_name: "万人",
        index_code_full_type_name: "累计值",
        group_name: "全部",
        time_type: 4,
      },
      {
        index_code: "ZB00060105",
        group_code: "FHY2017L",
        type_code: "LX0301",
        unit_code: "DW090102",
        time_name: "2021",
        time_code: "2021",
        val: 10.91,
        index_full_code: "FHY2017LZB00060105LX0301",
        index_code_full_cname: "租赁和商务服务业",
        unit_name: "万人",
        index_code_full_type_name: "累计值",
        group_name: "全部",
        time_type: 4,
      },
      {
        index_code: "ZB00060105",
        group_code: "FHY2017G",
        type_code: "LX0301",
        unit_code: "DW090102",
        time_name: "2021",
        time_code: "2021",
        val: 14.82,
        index_full_code: "FHY2017GZB00060105LX0301",
        index_code_full_cname: "交通运输、仓储和邮政业",
        unit_name: "万人",
        index_code_full_type_name: "累计值",
        group_name: "全部",
        time_type: 4,
      },
      {
        index_code: "ZB00060105",
        group_code: "FHY2017H",
        type_code: "LX0301",
        unit_code: "DW090102",
        time_name: "2021",
        time_code: "2021",
        val: 16.98,
        index_full_code: "FHY2017HZB00060105LX0301",
        index_code_full_cname: "住宿和餐饮业",
        unit_name: "万人",
        index_code_full_type_name: "累计值",
        group_name: "全部",
        time_type: 4,
      },
      {
        index_code: "ZB00060105",
        group_code: "FHY2017A",
        type_code: "LX0301",
        unit_code: "DW090102",
        time_name: "2021",
        time_code: "2021",
        val: 17.72,
        index_full_code: "FHY2017AZB00060105LX0301",
        index_code_full_cname: "农、林、牧、渔业",
        unit_name: "万人",
        index_code_full_type_name: "累计值",
        group_name: "全部",
        time_type: 4,
      },
      {
        index_code: "ZB00060105",
        group_code: "FHY2017E",
        type_code: "LX0301",
        unit_code: "DW090102",
        time_name: "2021",
        time_code: "2021",
        val: 47.01,
        index_full_code: "FHY2017EZB00060105LX0301",
        index_code_full_cname: "建筑业",
        unit_name: "万人",
        index_code_full_type_name: "累计值",
        group_name: "全部",
        time_type: 4,
      },
      {
        index_code: "ZB00060105",
        group_code: "FHY2017F",
        type_code: "LX0301",
        unit_code: "DW090102",
        time_name: "2021",
        time_code: "2021",
        val: 57.28,
        index_full_code: "FHY2017FZB00060105LX0301",
        index_code_full_cname: "批发和零售业",
        unit_name: "万人",
        index_code_full_type_name: "累计值",
        group_name: "全部",
        time_type: 4,
      },
      {
        index_code: "ZB00060105",
        group_code: "FHY2017C",
        type_code: "LX0301",
        unit_code: "DW090102",
        time_name: "2021",
        time_code: "2021",
        val: 111.03,
        index_full_code: "FHY2017CZB00060105LX0301",
        index_code_full_cname: "制造业",
        unit_name: "万人",
        index_code_full_type_name: "累计值",
        group_name: "全部",
        time_type: 4,
      },
    ],
    data_deconstruction: {
      name: "index_code_full_cname",
      value: "val",
      unit: "unit_name",
    },
    color: ["rgba(0, 253, 254, 1)", "rgba(0, 127, 255, 1)"],
    backgroud: "rgba(96, 179, 255, 0.19)",
    barWidth: 12,
    showNumber: 9,
    fontSize: 14,
    levelColor: ["#E32727", "#FE8401", "#F4DC13", "#007FFF"],
  },
};

import React from "react";
import { EchartMap } from "../../src/echart";
import map from "./map.json";
import type { StoryObj } from "@storybook/react";
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const DefaultComponent = (props) => (
  <div style={{ height: 300 }}>
    <EchartMap {...props} />
  </div>
);
export default {
  title: "echart/EchartMap",
  component: DefaultComponent,
  // parameters: {
  //   // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
  //   layout: 'centered',
  // },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    geojson: {
      description: "geojson",
      control: {
        type: "object",
      },
    },
    scatter: {
      description: "打点数据",
      control: {
        type: "object",
      },
    },
    areaData: {
      description: "地图色块数据",
      control: {
        type: "object",
      },
    },
  },
};
type Story = StoryObj<typeof EchartMap>;
// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    geojson: map,
    scatter: {
      data: [
        {
          name: "嵊州市",
          value: 7.1,
          unit: "%",
          lon: "120.82888",
          lat: "29.586606",
        },
        {
          name: "越城区",
          value: 6.8,
          unit: "%",
          lon: "120.585315",
          lat: "29.996993",
        },
        {
          name: "柯桥区",
          value: 6.7,
          unit: "%",
          lon: "120.476075",
          lat: "30.078038",
        },
        {
          name: "新昌县",
          value: 6.1,
          unit: "%",
          lon: "120.905665",
          lat: "29.501205",
        },
        {
          name: "上虞区",
          value: 5.6,
          unit: "%",
          lon: "120.874185",
          lat: "30.016769",
        },
        {
          name: "诸暨市",
          value: 4.9,
          unit: "%",
          lon: "120.244326",
          lat: "29.713662",
        },
      ],
    },
    areaData: [
      { name: "嵊州市", value: 7.1, unit: "%" },
      { name: "越城区", value: 6.8, unit: "%" },
      { name: "柯桥区", value: 6.7, unit: "%" },
      { name: "新昌县", value: 6.1, unit: "%" },
      { name: "上虞区", value: 5.6, unit: "%" },
      { name: "诸暨市", value: 4.9, unit: "%" },
    ],
  },
};

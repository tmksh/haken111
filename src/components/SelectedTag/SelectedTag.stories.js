import { SelectedTag } from ".";

export default {
  title: "Components/SelectedTag",
  component: SelectedTag,

  argTypes: {
    type: {
      options: ["big-grey-big", "big-blue-mini"],
      control: { type: "select" },
    },
    state: {
      options: ["default"],
      control: { type: "select" },
    },
    iconRight: {
      options: ["off"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    prop: "テキスト",
    2: "テキスト",
    type: "big-grey-big",
    state: "default",
    iconRight: "off",
    className: {},
  },
};

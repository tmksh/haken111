import { Btn } from ".";

export default {
  title: "Components/Btn",
  component: Btn,

  argTypes: {
    type: {
      options: ["fill", "outline"],
      control: { type: "select" },
    },
    state: {
      options: ["default"],
      control: { type: "select" },
    },
    iconLeft: {
      options: ["off", "on"],
      control: { type: "select" },
    },
    iconRight: {
      options: ["off", "on"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    prop: "検索",
    2: "検索",
    3: "検索",
    4: "検索",
    5: "検索",
    6: "検索",
    7: "検索",
    8: "検索",
    9: "検索",
    10: "検索",
    11: "検索",
    12: "検索",
    13: "検索",
    14: "検索",
    15: "検索",
    type: "fill",
    state: "default",
    iconLeft: "off",
    iconRight: "off",
    className: {},
    divClassName: {},
    divClassNameOverride: {},
  },
};

import { NavTab } from ".";

export default {
  title: "Components/NavTab",
  component: NavTab,

  argTypes: {
    one: {
      options: ["off", "on"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    prop: "求人を探す",
    one: "off",
    className: {},
    text: "求人を紹介してもらう",
  },
};

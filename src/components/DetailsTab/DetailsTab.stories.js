import { DetailsTab } from ".";

export default {
  title: "Components/DetailsTab",
  component: DetailsTab,

  argTypes: {
    one: {
      options: ["off", "on"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    prop: "基本情報",
    one: "off",
    className: {},
  },
};

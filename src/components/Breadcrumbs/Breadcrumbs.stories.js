import { Breadcrumbs } from ".";

export default {
  title: "Components/Breadcrumbs",
  component: Breadcrumbs,

  argTypes: {
    one: {
      options: ["grey", "blue"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    prop: "テキスト",
    2: "テキスト",
    one: "grey",
    className: {},
  },
};

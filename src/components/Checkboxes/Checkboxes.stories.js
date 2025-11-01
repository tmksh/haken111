import { Checkboxes } from ".";

export default {
  title: "Components/Checkboxes",
  component: Checkboxes,

  argTypes: {
    one: {
      options: ["default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    one: "default",
    className: {},
  },
};

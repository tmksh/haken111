import { Label } from ".";

export default {
  title: "Components/Label",
  component: Label,

  argTypes: {
    type: {
      options: ["big", "small"],
      control: { type: "select" },
    },
    state: {
      options: ["required", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    prop: "ラベル",
    2: "ラベル",
    3: "ラベル",
    4: "ラベル",
    5: "ラベル",
    6: "ラベル",
    type: "big",
    state: "required",
    className: {},
  },
};

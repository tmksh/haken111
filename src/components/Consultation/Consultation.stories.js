import { Consultation } from ".";

export default {
  title: "Components/Consultation",
  component: Consultation,

  argTypes: {
    one: {
      options: ["line", "chat", "online", "phone"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    one: "line",
    className: {},
  },
};

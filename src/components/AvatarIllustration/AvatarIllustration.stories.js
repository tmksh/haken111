import { AvatarIllustration } from ".";

export default {
  title: "Components/AvatarIllustration",
  component: AvatarIllustration,

  argTypes: {
    one: {
      options: ["two", "four", "three", "one"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    one: "two",
    className: {},
  },
};

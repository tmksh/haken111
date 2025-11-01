import { Avatar } from ".";

export default {
  title: "Components/Avatar",
  component: Avatar,

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
    element: "/img/1-1.svg",
    img: "/img/1-2.svg",
    element1: "/img/1-3.svg",
    element2: "/img/1-4.svg",
  },
};

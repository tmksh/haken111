import React from "react";
import { Frame5 } from "./sections/Frame5";
import { FvWrapper } from "./sections/FvWrapper";
import { Header2 } from "./sections/Header2";

export const Screen5 = () => {
  return (
    <div
      className="bg-grey1-bg overflow-hidden w-full min-w-[1440px] min-h-[4036px] relative"
      data-model-id="322:4448"
    >
      <FvWrapper />
      <Header2 />
      <Frame5 />
    </div>
  );
};

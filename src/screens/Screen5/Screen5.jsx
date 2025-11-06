import React from "react";
import { Frame5 } from "./sections/Frame5";
import { FvWrapper } from "./sections/FvWrapper";
import { Header2 } from "./sections/Header2";

export const Screen5 = () => {
  return (
    <div
      className="bg-grey1-bg w-full relative"
      data-model-id="322:4448"
    >
      <Header2 />
      <FvWrapper />
      <div className="flex flex-col w-full max-w-[1440px] mx-auto items-start relative top-0 lg:top-[380px] pb-0 px-4 md:px-0">
        <div className="flex flex-col items-center gap-0 md:gap-0 pt-8 md:pt-0 pb-0 md:pb-0 px-0 relative self-stretch w-full flex-[0_0_auto]">
          <Frame5 />
        </div>
      </div>
    </div>
  );
};

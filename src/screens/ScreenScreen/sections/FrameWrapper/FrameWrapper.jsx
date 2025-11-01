import React from "react";
import { SectionHeader } from "../../../../components/SectionHeader";

export const FrameWrapper = () => {
  return (
    <div className="w-[1440px] h-[269px] mt-8 flex-col items-start flex relative">
      <div className="absolute top-0 left-0 w-[1440px] h-[269px] bg-blue" />

      <div className="flex flex-col h-[269px] items-center justify-center gap-10 p-10 relative self-stretch w-full">
        <div className="flex-col items-center justify-center gap-[26px] self-stretch w-full flex-[0_0_auto] flex relative">
          <SectionHeader
            className="!self-stretch !h-[unset] !flex-[0_0_auto] !left-[unset] !w-full !top-[unset]"
            divClassName="!text-white"
            divClassNameOverride="!text-white"
            h1="利用規約"
            prop="派遣市場サービス利用に関する規約"
          />
        </div>
      </div>
    </div>
  );
};

import React from "react";
import { SectionHeader } from "../../../../components/SectionHeader";

export const FrameWrapper = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto h-auto md:h-[269px] mt-8 flex-col items-start flex relative">
      <div className="absolute top-0 left-0 w-full h-full bg-blue" />

      <div className="flex flex-col h-full min-h-[200px] md:h-[269px] items-center justify-center gap-6 md:gap-10 p-6 md:p-10 relative self-stretch w-full">
        <div className="flex-col items-center justify-center gap-[26px] self-stretch w-full flex-[0_0_auto] flex relative">
          <SectionHeader
            className="!self-stretch !h-[unset] !flex-[0_0_auto] !left-[unset] !w-full !top-[unset]"
            divClassName="!text-white !text-xl md:!text-3xl"
            divClassNameOverride="!text-white !text-xs md:!text-sm"
            h1="利用規約"
            prop="派遣市場サービス利用に関する規約"
          />
        </div>
      </div>
    </div>
  );
};

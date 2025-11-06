import React from "react";
import { SectionHeader } from "../../../../components/SectionHeader";

export const Frame1 = () => {
  return (
    <div className="flex w-full max-w-[1440px] mx-auto h-auto md:h-[269px] relative mt-4 md:mt-8 flex-col items-start px-4 md:px-0">
      <div className="absolute top-0 left-0 w-full md:w-[1440px] h-full md:h-[269px] bg-blue rounded-[14px] md:rounded-none" />

      <div className="flex flex-col h-auto md:h-[269px] items-center justify-center gap-6 md:gap-10 p-6 md:p-10 relative self-stretch w-full">
        <div className="flex flex-col items-center justify-center gap-4 md:gap-[26px] relative self-stretch w-full flex-[0_0_auto]">
          <SectionHeader
            className="!self-stretch !h-[unset] !flex-[0_0_auto] !left-[unset] !w-full !top-[unset]"
            divClassName="!text-white"
            divClassNameOverride="!text-white"
            h1="無料転職相談のお申し込み"
            prop="XXXのキャリアアドバイザーがあなたの転職を徹底サポートします"
          />
        </div>
      </div>
    </div>
  );
};

import React from "react";
import { SectionHeader } from "../../../../components/SectionHeader";

export const Frame1 = () => {
  return (
    <div className="flex w-[1440px] h-[269px] relative mt-8 flex-col items-start">
      <div className="absolute top-0 left-0 w-[1440px] h-[269px] bg-blue" />

      <div className="flex flex-col h-[269px] items-center justify-center gap-10 p-10 relative self-stretch w-full">
        <div className="flex flex-col items-center justify-center gap-[26px] relative self-stretch w-full flex-[0_0_auto]">
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

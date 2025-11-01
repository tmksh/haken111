import React from "react";
import { SectionHeader } from "../../../../components/SectionHeader";

export const Frame7 = () => {
  return (
    <div className="flex flex-col w-[1440px] items-start absolute top-[207px] left-0">
      <div className="absolute top-0 left-0 w-[1440px] h-[269px] bg-blue bg-[url(/img/369863540-5.png)] bg-[100%_100%]" />

      <div className="flex flex-col h-[269px] items-center justify-center gap-10 p-10 relative self-stretch w-full">
        <div className="flex flex-col items-center justify-center gap-[26px] relative self-stretch w-full flex-[0_0_auto]">
          <div className="relative w-[147px] h-[37px]">
            <img
              className="absolute top-0 left-0 w-[145px] h-[37px]"
              alt="Union"
              src="/img/union-13.svg"
            />

            <div className="absolute top-2 left-[25px] [font-family:'Noto_Sans_JP',Helvetica] font-bold text-white text-base text-center tracking-[0] leading-4 whitespace-nowrap">
              転職成功者の
            </div>
          </div>

          <SectionHeader
            className="!self-stretch !h-[unset] !flex-[0_0_auto] !left-[unset] !w-full !top-[unset]"
            divClassName="!text-white"
            divClassNameOverride="!text-white"
            h1="履歴書・面接 徹底解剖コラム"
            prop="転職成功に役立つ実践的なノウハウをお届けします"
          />
        </div>
      </div>
    </div>
  );
};

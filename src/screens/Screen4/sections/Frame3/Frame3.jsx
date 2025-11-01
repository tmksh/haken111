import React from "react";
import { SectionHeader } from "../../../../components/SectionHeader";

export const Frame3 = () => {
  return (
    <div className="flex w-[1440px] h-[269px] relative mt-8 flex-col items-start">
      <div className="absolute top-0 left-0 w-[1440px] h-[269px] bg-blue bg-[url(/img/369863540-5.png)] bg-[100%_100%]" />

      <div className="flex flex-col items-center gap-10 p-10 relative self-stretch w-full flex-[0_0_auto]">
        <SectionHeader
          className="!self-stretch !h-[unset] !flex-[0_0_auto] !left-[unset] !w-full !top-[unset]"
          divClassName="!text-white"
          divClassNameOverride="!text-white"
          h1="転職成功事例"
          prop="XXXXの方々の転職成功ストーリーをご紹介"
        />
        <div className="inline-flex items-center gap-[31px] relative flex-[0_0_auto]">
          <div className="relative w-48 h-[91px]">
            <div className="flex flex-col w-[138px] h-[76px] items-center gap-[10.87px] absolute top-[15px] left-[27px]">
              <div className="inline-flex items-baseline justify-center relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.36px] [font-family:'Open_Sans',Helvetica] font-bold text-white text-[43px] text-center tracking-[0] leading-[43px] whitespace-nowrap">
                  1,247
                </div>

                <div className="relative w-fit [font-family:'Noto_Sans_JP',Helvetica] font-bold text-white text-2xl text-center tracking-[0] leading-6 whitespace-nowrap">
                  名
                </div>
              </div>

              <div className="relative w-fit [font-family:'Noto_Sans_JP',Helvetica] font-medium text-white text-[22px] text-center tracking-[0] leading-[22px] whitespace-nowrap">
                転職成功者数
              </div>
            </div>

            <img
              className="w-[193px] absolute -top-px -left-px h-[84px]"
              alt="Vector"
              src="/img/vector-7-3.svg"
            />
          </div>

          <div className="relative w-[200px] h-[91px]">
            <div className="flex flex-col w-[173px] h-[76px] items-center gap-[10.87px] absolute top-[15px] left-3.5">
              <div className="inline-flex items-baseline justify-center relative flex-[0_0_auto]">
                <div className="relative w-fit [font-family:'Noto_Sans_JP',Helvetica] font-bold text-white text-2xl text-center tracking-[0] leading-6 whitespace-nowrap">
                  平均
                </div>

                <div className="mt-[-1.36px] text-[43px] text-center leading-[43px] relative w-fit [font-family:'Open_Sans',Helvetica] font-bold text-white tracking-[0] whitespace-nowrap">
                  142
                </div>

                <div className="relative w-fit [font-family:'Noto_Sans_JP',Helvetica] font-bold text-white text-2xl text-center tracking-[0] leading-6 whitespace-nowrap">
                  万円
                </div>
              </div>

              <div className="relative w-fit [font-family:'Noto_Sans_JP',Helvetica] font-bold text-white text-[22px] text-center tracking-[0] leading-[22px] whitespace-nowrap">
                年収アップ額
              </div>
            </div>

            <img
              className="w-[201px] absolute -top-px -left-px h-[84px]"
              alt="Vector"
              src="/img/vector-8-3.svg"
            />
          </div>

          <div className="relative w-48 h-[91px]">
            <div className="flex flex-col w-28 h-[76px] items-center gap-[10.87px] absolute top-[15px] left-[41px]">
              <div className="inline-flex items-baseline justify-center relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.36px] [font-family:'Open_Sans',Helvetica] font-bold text-white text-[43px] text-center tracking-[0] leading-[43px] whitespace-nowrap">
                  96.8
                </div>

                <div className="relative w-fit [font-family:'Noto_Sans_JP',Helvetica] font-bold text-white text-2xl text-center tracking-[0] leading-6 whitespace-nowrap">
                  %
                </div>
              </div>

              <div className="relative w-fit [font-family:'Noto_Sans_JP',Helvetica] font-medium text-white text-[22px] text-center tracking-[0] leading-[22px] whitespace-nowrap">
                転職満足度
              </div>
            </div>

            <img
              className="w-[193px] absolute -top-px -left-px h-[84px]"
              alt="Vector"
              src="/img/vector-9-5.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

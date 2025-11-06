import React from "react";
import { SectionHeader } from "../../../../components/SectionHeader";

export const Frame3 = () => {
  return (
    <div className="flex w-full max-w-[1440px] mx-auto h-auto md:h-[269px] relative mt-4 md:mt-8 flex-col items-start">
      <div className="absolute top-0 left-0 w-full h-full bg-blue" />

      <div className="flex flex-col items-center gap-6 md:gap-10 p-4 md:p-10 relative self-stretch w-full flex-[0_0_auto]">
        <SectionHeader
          className="!self-stretch !h-[unset] !flex-[0_0_auto] !left-[unset] !w-full !top-[unset]"
          divClassName="!text-white !text-base md:!text-lg"
          divClassNameOverride="!text-white !text-2xl md:!text-4xl"
          h1="転職成功事例"
          prop="XXXXの方々の転職成功ストーリーをご紹介"
        />
        <div className="inline-flex flex-wrap items-center justify-center gap-4 md:gap-[31px] relative flex-[0_0_auto] px-4 md:px-0">
          <div className="relative w-[134px] md:w-48 h-[64px] md:h-[91px]">
            <div className="flex flex-col w-[96px] md:w-[138px] h-[53px] md:h-[76px] items-center gap-[7px] md:gap-[10.87px] absolute top-[10px] md:top-[15px] left-[19px] md:left-[27px]">
              <div className="inline-flex items-baseline justify-center relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.36px] [font-family:'Open_Sans',Helvetica] font-bold text-white text-[30px] md:text-[43px] text-center tracking-[0] leading-[30px] md:leading-[43px] whitespace-nowrap">
                  1,247
                </div>

                <div className="relative w-fit [font-family:'Noto_Sans_JP',Helvetica] font-bold text-white text-lg md:text-2xl text-center tracking-[0] leading-5 md:leading-6 whitespace-nowrap">
                  名
                </div>
              </div>

              <div className="relative w-fit [font-family:'Noto_Sans_JP',Helvetica] font-medium text-white text-base md:text-[22px] text-center tracking-[0] leading-[18px] md:leading-[22px] whitespace-nowrap">
                転職成功者数
              </div>
            </div>

            <img
              className="w-[134px] md:w-[193px] absolute -top-px -left-px h-[64px] md:h-[84px]"
              alt="Vector"
              src="/img/vector-7-3.svg"
            />
          </div>

          <div className="relative w-[150px] md:w-[200px] h-[64px] md:h-[91px]">
            <div className="flex flex-col w-[120px] md:w-[173px] h-[53px] md:h-[76px] items-center gap-[7px] md:gap-[10.87px] absolute top-[10px] md:top-[15px] left-[15px] md:left-3.5">
              <div className="inline-flex items-baseline justify-center relative flex-[0_0_auto]">
                <div className="relative w-fit [font-family:'Noto_Sans_JP',Helvetica] font-bold text-white text-lg md:text-2xl text-center tracking-[0] leading-5 md:leading-6 whitespace-nowrap">
                  平均
                </div>

                <div className="mt-[-1.36px] text-[30px] md:text-[43px] text-center leading-[30px] md:leading-[43px] relative w-fit [font-family:'Open_Sans',Helvetica] font-bold text-white tracking-[0] whitespace-nowrap">
                  142
                </div>

                <div className="relative w-fit [font-family:'Noto_Sans_JP',Helvetica] font-bold text-white text-lg md:text-2xl text-center tracking-[0] leading-5 md:leading-6 whitespace-nowrap">
                  万円
                </div>
              </div>

              <div className="relative w-fit [font-family:'Noto_Sans_JP',Helvetica] font-bold text-white text-base md:text-[22px] text-center tracking-[0] leading-[18px] md:leading-[22px] whitespace-nowrap">
                年収アップ額
              </div>
            </div>

            <img
              className="w-[150px] md:w-[201px] absolute -top-px -left-px h-[64px] md:h-[84px]"
              alt="Vector"
              src="/img/vector-8-3.svg"
            />
          </div>

          <div className="relative w-[134px] md:w-48 h-[64px] md:h-[91px]">
            <div className="flex flex-col w-[96px] md:w-28 h-[53px] md:h-[76px] items-center gap-[7px] md:gap-[10.87px] absolute top-[10px] md:top-[15px] left-[19px] md:left-[41px]">
              <div className="inline-flex items-baseline justify-center relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.36px] [font-family:'Open_Sans',Helvetica] font-bold text-white text-[30px] md:text-[43px] text-center tracking-[0] leading-[30px] md:leading-[43px] whitespace-nowrap">
                  96.8
                </div>

                <div className="relative w-fit [font-family:'Noto_Sans_JP',Helvetica] font-bold text-white text-lg md:text-2xl text-center tracking-[0] leading-5 md:leading-6 whitespace-nowrap">
                  %
                </div>
              </div>

              <div className="relative w-fit [font-family:'Noto_Sans_JP',Helvetica] font-medium text-white text-base md:text-[22px] text-center tracking-[0] leading-[18px] md:leading-[22px] whitespace-nowrap">
                転職満足度
              </div>
            </div>

            <img
              className="w-[134px] md:w-[193px] absolute -top-px -left-px h-[64px] md:h-[84px]"
              alt="Vector"
              src="/img/vector-9-5.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

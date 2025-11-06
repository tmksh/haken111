import React from "react";
import { BreadcrumbsList } from "../../components/BreadcrumbsList";
import { Footer4 } from "./sections/Footer4";
import { Frame9 } from "./sections/Frame9";
import { Frame10 } from "./sections/Frame10";
import { Header5 } from "./sections/Header5";

export const Screen8 = () => {
  return (
    <div
      className="bg-grey1-bg w-full relative min-h-screen"
      data-model-id="322:5029"
    >
      <Header5 />
      <div className="inline-flex items-center justify-center gap-1.5 px-2 py-1.5 absolute top-[120px] md:top-[299px] left-4 md:left-[804px] bg-grey-2 rounded-sm">
        <div className="w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#000000] text-sm leading-[14px] whitespace-nowrap relative tracking-[0]">
          求人番号：25311
        </div>
      </div>

      <BreadcrumbsList
        breadcrumbs2="求人一覧"
        breadcrumbsOne="blue"
        breadcrumbsProp="テキスト"
        className="!inline-flex !absolute md:!left-10 !left-4 !w-[unset] !top-[80px] md:!top-[162px]"
        hasDiv={false}
        visible={false}
      />
      <div className="flex flex-col w-full max-w-[1440px] mx-auto items-center relative top-0 md:top-[207px] px-4 md:px-0 pt-[120px] md:pt-0 pb-8 md:pb-0">
        <Frame9 />
        <Frame10 />
        <Footer4 />
      </div>
    </div>
  );
};

import React from "react";
import { BreadcrumbsList } from "../../components/BreadcrumbsList";
import { Footer4 } from "./sections/Footer4";
import { Frame9 } from "./sections/Frame9";
import { Frame10 } from "./sections/Frame10";
import { Header5 } from "./sections/Header5";

export const Screen8 = () => {
  return (
    <div
      className="bg-grey1-bg w-full min-w-[1440px] min-h-[5083px] relative"
      data-model-id="322:5029"
    >
      <Header5 />
      <div className="inline-flex items-center justify-center gap-1.5 px-2 py-1.5 absolute top-[299px] left-[804px] bg-grey-2 rounded-sm">
        <div className="w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#000000] text-sm leading-[14px] whitespace-nowrap relative tracking-[0]">
          求人番号：25311
        </div>
      </div>

      <BreadcrumbsList
        breadcrumbs2="求人一覧"
        breadcrumbsOne="blue"
        breadcrumbsProp="テキスト"
        className="!inline-flex !absolute !left-10 !w-[unset] !top-[162px]"
        hasDiv={false}
        visible={false}
      />
      <div className="flex flex-col w-[1440px] items-center absolute top-[207px] left-0">
        <Frame9 />
        <Frame10 />
        <Footer4 />
      </div>
    </div>
  );
};

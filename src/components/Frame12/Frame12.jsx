/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Caretright39 } from "../../icons/Caretright39";

export const Frame12 = ({
  prop = "佐藤さん（32歳）",
  beforeAfter = "個人事務所 → 上場企業税務部",
  beforeAfter1 = "年収480万円 → 650万円",
  className,
}) => {
  return (
    <div
      className={`flex flex-col items-start gap-4 relative top-[66px] left-6 ${className}`}
    >
      <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
        <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-text text-[14.6px] tracking-[0] leading-[14.6px] whitespace-nowrap">
            {prop}
          </div>
        </div>

        <div className="relative self-stretch [font-family:'Noto_Sans_JP',Helvetica] font-normal text-text-2 text-sm tracking-[0] leading-[14px]">
          {beforeAfter}
        </div>

        <div className="relative self-stretch [font-family:'Noto_Sans_JP',Helvetica] font-bold text-blue text-sm tracking-[0] leading-[14px]">
          {beforeAfter1}
        </div>
      </div>

      <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
        <div className="relative w-fit [font-family:'Noto_Sans_JP',Helvetica] font-normal text-text text-sm tracking-[0] leading-[14px] whitespace-nowrap">
          詳細を見る
        </div>

        <Caretright39
          className="!relative !w-[18px] !h-[18px] !aspect-[1]"
          color="#222222"
        />
      </div>
    </div>
  );
};

Frame12.propTypes = {
  prop: PropTypes.string,
  beforeAfter: PropTypes.string,
  beforeAfter1: PropTypes.string,
};

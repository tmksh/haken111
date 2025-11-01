/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Eye } from "../../icons/Eye";

export const Ranking = ({
  prop = "【未経験者向け】税理士事務所への転職完全ガイド",
  prop1 = "5,234",
  prop2 = "1",
  className,
  rankBadgeClassName,
}) => {
  return (
    <div
      className={`flex flex-col w-[254px] items-start gap-2 relative top-[10425px] left-[1480px] ${className}`}
    >
      <div className="flex items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
        <div
          className={`flex w-10 h-10 items-center justify-center relative bg-[#ffe22e] rounded-[20.7px] aspect-[1] ${rankBadgeClassName}`}
        >
          <div className="relative w-fit [font-family:'Open_Sans',Helvetica] font-bold text-[#ffffff] text-lg tracking-[0] leading-[18px] whitespace-nowrap">
            {prop2}
          </div>
        </div>

        <div className="relative flex-1 mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-bold text-text text-[14.6px] tracking-[0] leading-[20.4px]">
          {prop}
        </div>
      </div>

      <div className="inline-flex items-center justify-end gap-2 pl-12 pr-0 py-0 relative flex-[0_0_auto] opacity-[0.48]">
        <Eye className="!relative !w-4 !h-4 !aspect-[1]" />
        <div className="relative w-fit [font-family:'Open_Sans',Helvetica] font-normal text-text-2 text-sm text-justify tracking-[0] leading-[14px] whitespace-nowrap">
          {prop1}
        </div>
      </div>
    </div>
  );
};

Ranking.propTypes = {
  prop: PropTypes.string,
  prop1: PropTypes.string,
  prop2: PropTypes.string,
};

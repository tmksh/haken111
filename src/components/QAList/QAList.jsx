/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { X } from "../../icons/X";

export const QAList = ({
  q = "料金形態や掲載料について教えてください。",
  a = "完全成功報酬制となっており、初期費用・掲載費用は一切かかりません。",
  prop = "初期費用：0円\n掲載費用：0円\n成功報酬：理論年収の10〜15%（採用決定時のみ）",
  className,
  divClassName,
}) => {
  return (
    <div
      className={`flex flex-col w-[704px] items-start gap-4 p-4 relative top-[6839px] left-[163px] bg-grey1-bg rounded-[14px] ${className}`}
    >
      <div className="flex items-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex w-[624px] items-center gap-4 relative">
          <div className="bg-blue flex w-10 h-10 items-center justify-center relative rounded-[20px]">
            <div className="relative w-fit [font-family:'Open_Sans',Helvetica] font-bold text-[#ffffff] text-base tracking-[0] leading-4 whitespace-nowrap">
              Q
            </div>
          </div>

          <div className="text-base leading-[22.4px] relative flex-1 [font-family:'Noto_Sans_JP',Helvetica] font-extrabold text-text text-justify tracking-[0]">
            {q}
          </div>
        </div>

        <X className="!relative !w-6 !h-6 !aspect-[1]" color="#11A5B1" />
      </div>

      <div className="flex flex-col items-start gap-[3px] pl-0 pr-8 py-0 relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex items-center gap-4 relative self-stretch w-full flex-[0_0_auto]">
          <div className="bg-yellow flex w-10 h-10 items-center justify-center relative rounded-[20px]">
            <div className="relative w-fit [font-family:'Open_Sans',Helvetica] font-bold text-[#ffffff] text-base tracking-[0] leading-4 whitespace-nowrap">
              A
            </div>
          </div>

          <div
            className={`text-sm leading-[19.6px] relative flex-1 [font-family:'Noto_Sans_JP',Helvetica] font-extrabold text-text text-justify tracking-[0] ${divClassName}`}
          >
            {a}
          </div>
        </div>

        <div className="flex items-center pl-14 pr-0 py-0 relative self-stretch w-full flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-normal text-text text-sm tracking-[0] leading-[22.4px]">
            {prop}
          </div>
        </div>
      </div>
    </div>
  );
};

QAList.propTypes = {
  q: PropTypes.string,
  a: PropTypes.string,
  prop: PropTypes.string,
};

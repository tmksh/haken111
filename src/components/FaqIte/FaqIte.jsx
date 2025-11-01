/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const FaqIte = ({
  prop = "サービスの利用料金はかかりますか？",
  prop1 = "派遣市場のサービスは完全無料でご利用いただけます。求人紹介、キャリア相談、面接対策など、すべてのサービスに料金は一切かかりません。",
  className,
}) => {
  return (
    <div
      className={`flex flex-col w-[797px] h-32 items-start gap-3.5 p-6 relative top-[3962px] left-[97px] bg-white rounded-[14px] ${className}`}
    >
      <div className="flex items-center gap-[11.09px] relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col w-[29.56px] h-[29.56px] items-center justify-center relative rounded-[14.78px] bg-[linear-gradient(90deg,rgba(137,185,41,1)_0%,rgba(87,195,132,1)_50%,rgba(17,165,177,1)_100%)]">
          <div className="relative w-fit [font-family:'Open_Sans',Helvetica] font-bold text-[#ffffff] text-base tracking-[0] leading-4 whitespace-nowrap">
            Q
          </div>
        </div>

        <div className="font-black text-base leading-4 relative flex-1 [font-family:'Noto_Sans_JP',Helvetica] text-text tracking-[0]">
          {prop}
        </div>
      </div>

      <div className="flex items-center gap-[11.09px] relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col w-[29.56px] h-[29.56px] items-center justify-center relative bg-grey1-bg rounded-[14.78px] border-[none] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[14.78px] before:[background:linear-gradient(90deg,rgba(137,185,41,1)_0%,rgba(87,195,132,1)_50%,rgba(17,165,177,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
          <div className="relative w-fit bg-[linear-gradient(90deg,rgba(137,185,41,1)_0%,rgba(87,195,132,1)_50%,rgba(17,165,177,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Open_Sans',Helvetica] font-bold text-transparent text-base tracking-[0] leading-4 whitespace-nowrap">
            A
          </div>
        </div>

        <div className="font-normal text-sm leading-[18.2px] relative flex-1 [font-family:'Noto_Sans_JP',Helvetica] text-text tracking-[0]">
          {prop1}
        </div>
      </div>
    </div>
  );
};

FaqIte.propTypes = {
  prop: PropTypes.string,
  prop1: PropTypes.string,
};

/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Flow2 } from "../../icons/Flow2";

export const FlowList = ({
  prop = "02",
  prop1 = "募集要項・画像素材のご提出",
  className,
  hasDiv = true,
  icon = <Flow2 className="!absolute !top-[-15px] !left-8 !w-20 !h-20" />,
  frameClassName,
  divClassName,
}) => {
  return (
    <div
      className={`inline-flex items-center gap-4 relative ${className}`}
    >
      <div className="relative w-fit bg-[linear-gradient(90deg,rgba(137,185,41,1)_0%,rgba(87,195,132,1)_50%,rgba(17,165,177,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Open_Sans',Helvetica] font-bold text-transparent text-[40px] text-justify tracking-[0] leading-10 whitespace-nowrap">
        {prop}
      </div>

      <div className="flex flex-col w-[433px] h-[87px] items-center justify-center gap-2.5 pl-[136px] pr-8 py-[22px] relative bg-grey1-bg rounded-[14px]">
        <div
          className={`flex flex-col w-[234px] items-center gap-2 relative flex-[0_0_auto] ${frameClassName}`}
        >
          <div
            className={`mt-[-1.00px] font-black text-lg leading-[18px] relative self-stretch [font-family:'Noto_Sans_JP',Helvetica] text-text text-center tracking-[0] ${divClassName}`}
          >
            {prop1}
          </div>

          {hasDiv && (
            <div className="font-normal text-base leading-4 relative self-stretch [font-family:'Noto_Sans_JP',Helvetica] text-text text-center tracking-[0]">
              弊社ご担当者様が行います
            </div>
          )}
        </div>

        {icon}
      </div>
    </div>
  );
};

FlowList.propTypes = {
  prop: PropTypes.string,
  prop1: PropTypes.string,
  hasDiv: PropTypes.bool,
};

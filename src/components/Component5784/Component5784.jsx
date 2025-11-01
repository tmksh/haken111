/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Clock3 } from "../../icons/Clock3";

export const Component5784 = ({
  prop = "フレックス制",
  prop1 = "コアタイム10-15時",
  className,
  icon = (
    <Clock3
      className="!relative !w-[28.98px] !h-[28.98px] !aspect-[1]"
      color="#727272"
    />
  ),
}) => {
  return (
    <div
      className={`flex-col w-[184px] gap-2 px-4 py-3.5 top-[8209px] left-[163px] bg-white rounded-[14px] border border-solid border-grey-3 flex items-center relative ${className}`}
    >
      <div className="flex w-12 h-12 items-center gap-[9.06px] p-[9.06px] relative bg-grey1-bg rounded-3xl">
        {icon}
      </div>

      <div className="inline-flex flex-col items-center gap-2 relative flex-[0_0_auto]">
        <div className="justify-center w-fit mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-bold text-text text-sm text-center tracking-[0] leading-[14px] whitespace-nowrap flex items-center relative">
          {prop}
        </div>

        <div className="relative flex items-center justify-center w-fit [font-family:'Noto_Sans_JP',Helvetica] font-normal text-text-2 text-sm text-center tracking-[0] leading-[14px] whitespace-nowrap">
          {prop1}
        </div>
      </div>
    </div>
  );
};

Component5784.propTypes = {
  prop: PropTypes.string,
  prop1: PropTypes.string,
};

/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Notepencil } from "../../icons/Notepencil";

export const StepSmall = ({
  className,
  icon = (
    <Notepencil className="!relative !w-[28.98px] !h-[28.98px] !aspect-[1]" />
  ),
  divClassName,
  text = "応募発生",
}) => {
  return (
    <div
      className={`flex flex-col w-[134px] h-28 items-center gap-2 px-4 py-3.5 relative top-[6061px] left-[2686px] bg-blue rounded-[14px] ${className}`}
    >
      <div className="flex w-12 h-12 items-center gap-[9.06px] p-[9.06px] relative bg-white rounded-3xl">
        {icon}
      </div>

      <div
        className={`relative flex items-center justify-center w-fit [font-family:'Noto_Sans_JP',Helvetica] font-bold text-[#ffffff] text-sm text-center tracking-[0] leading-[16.8px] whitespace-nowrap ${divClassName}`}
      >
        {text}
      </div>
    </div>
  );
};

StepSmall.propTypes = {
  text: PropTypes.string,
};

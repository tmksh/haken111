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
      className={`flex flex-col w-[110px] md:w-[134px] h-24 md:h-28 items-center gap-1.5 md:gap-2 px-3 md:px-4 py-2.5 md:py-3.5 relative bg-blue rounded-[14px] ${className}`}
    >
      <div className="flex w-10 h-10 md:w-12 md:h-12 items-center gap-[9.06px] p-[7px] md:p-[9.06px] relative bg-white rounded-3xl">
        {icon}
      </div>

      <div
        className={`relative flex items-center justify-center w-fit [font-family:'Noto_Sans_JP',Helvetica] font-bold text-[#ffffff] text-xs md:text-sm text-center tracking-[0] leading-[14px] md:leading-[16.8px] whitespace-nowrap ${divClassName}`}
      >
        {text}
      </div>
    </div>
  );
};

StepSmall.propTypes = {
  text: PropTypes.string,
};

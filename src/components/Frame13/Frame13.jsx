/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Caretright39 } from "../../icons/Caretright39";

export const Frame13 = ({
  className,
  text = "年収UP事例",
  text1 = "124件",
}) => {
  return (
    <div
      className={`flex flex-col items-start gap-4 relative top-[66px] left-6 ${className}`}
    >
      <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
        <div className="relative w-fit [font-family:'Noto_Sans_JP',Helvetica] font-normal text-text text-[14.6px] tracking-[0] leading-[14.6px] whitespace-nowrap">
          {text}
        </div>

        <div className="inline-flex h-[18px] items-center gap-1 relative flex-[0_0_auto]">
          <div className="relative w-fit [font-family:'Noto_Sans_JP',Helvetica] font-bold text-blue text-sm tracking-[0] leading-[14px] whitespace-nowrap">
            {text1}
          </div>

          <Caretright39
            className="!relative !w-[18px] !h-[18px] !aspect-[1]"
            color="#727272"
          />
        </div>
      </div>
    </div>
  );
};

Frame13.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
};

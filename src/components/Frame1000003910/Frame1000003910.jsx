/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Caretright39 } from "../../icons/Caretright39";

export const Frame1000003910 = ({
  className,
  text = "プライバシーポリシー",
}) => {
  return (
    <div
      className={`flex flex-col items-start gap-3 md:gap-4 relative top-0 md:top-[66px] left-0 md:left-6 ${className}`}
    >
      <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
        <div className="relative w-fit [font-family:'Noto_Sans_JP',Helvetica] font-normal text-text text-xs md:text-[14.6px] tracking-[0] leading-[14.6px] whitespace-nowrap">
          {text}
        </div>

        <Caretright39
          className="!relative !w-[18px] !h-[18px] !aspect-[1]"
          color="#727272"
        />
      </div>
    </div>
  );
};

Frame1000003910.propTypes = {
  text: PropTypes.string,
};

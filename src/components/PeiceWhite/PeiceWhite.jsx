/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const PeiceWhite = ({
  className,
  text = "成果報酬型＋掲載費<br/>理論年収の20~35%",
  elementClassName,
}) => {
  return (
    <div
      className={`flex w-[266px] h-[98px] items-center justify-center gap-2.5 px-[35px] py-6 relative top-[6447px] left-[973px] bg-white border-t [border-top-style:solid] border-l [border-left-style:solid] border-grey-3 ${className}`}
    >
      <div
        className={`relative w-fit mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-normal text-text text-lg text-center tracking-[0] leading-[25.2px] ${elementClassName}`}
      >
        {text}
      </div>
    </div>
  );
};

PeiceWhite.propTypes = {
  text: PropTypes.string,
};

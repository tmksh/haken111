/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const HeaderSection = ({
  prop = "なぜ派遣市場の満足度は高いのか？",
  prop1 = "選ばれる3つの理由",
  className,
  divClassName,
  divClassNameOverride,
}) => {
  return (
    <div
      className={`inline-flex flex-col items-center gap-4 relative ${className}`}
    >
      <div
        className={`relative self-stretch mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-bold text-blue text-[32px] text-center tracking-[0] leading-8 ${divClassName}`}
      >
        {prop}
      </div>

      <div
        className={`relative self-stretch [font-family:'Noto_Sans_JP',Helvetica] font-black text-text text-5xl text-center tracking-[0] leading-[48px] ${divClassNameOverride}`}
      >
        {prop1}
      </div>
    </div>
  );
};

HeaderSection.propTypes = {
  prop: PropTypes.string,
  prop1: PropTypes.string,
};

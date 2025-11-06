/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const SectionHeader = ({
  prop = "希望条件を選択して、あなたにぴったりの求人を見つけましょう",
  h1 = "お仕事を見つけよう",
  className,
  divClassName,
  divClassNameOverride,
}) => {
  return (
    <div
      className={`flex flex-col w-full max-w-[1261px] h-auto items-center gap-2 md:gap-3.5 relative px-4 md:px-0 mx-auto ${className}`}
    >
      <div
        className={`font-extrabold text-2xl md:text-3xl leading-[28px] md:leading-[30px] relative w-full [font-family:'Noto_Sans_JP',Helvetica] text-text text-center tracking-[0] ${divClassName}`}
      >
        {h1}
      </div>

      <div
        className={`font-normal text-xs md:text-sm leading-[12px] md:leading-[14px] relative w-full [font-family:'Noto_Sans_JP',Helvetica] text-text text-center tracking-[0] ${divClassNameOverride}`}
      >
        {prop}
      </div>
    </div>
  );
};

SectionHeader.propTypes = {
  prop: PropTypes.string,
  h1: PropTypes.string,
};

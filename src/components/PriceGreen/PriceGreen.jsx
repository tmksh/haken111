/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const PriceGreen = ({
  className,
  text = "1ヶ月以内の退職：80%返金<br/>2ヶ月以内の退職：50%返金",
  elementClassName,
}) => {
  return (
    <div
      className={`flex w-[266px] h-[98px] items-center justify-center gap-2.5 px-[35px] py-6 relative top-[6264px] left-[973px] bg-light-blue border-t [border-top-style:solid] border-l [border-left-style:solid] border-grey-3 ${className}`}
    >
      <div
        className={`relative w-fit mt-[-1.00px] ml-[-15.50px] mr-[-15.50px] [font-family:'Noto_Sans_JP',Helvetica] font-normal text-text text-lg text-center tracking-[0] leading-[25.2px] ${elementClassName}`}
      >
        {text}
      </div>
    </div>
  );
};

PriceGreen.propTypes = {
  text: PropTypes.string,
};

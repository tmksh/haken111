/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Frame1000003884 = ({
  prop = "本社所在地",
  prop1 = "本社所在地",
  className,
}) => {
  return (
    <div
      className={`flex w-[970px] items-start gap-6 relative top-[8408px] left-[187px] ${className}`}
    >
      <div className="w-20 h-4 text-text-2 whitespace-nowrap relative mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-base tracking-[0] leading-4">
        {prop1}
      </div>

      <div className="flex-1 text-text relative mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-base tracking-[0] leading-4">
        {prop}
      </div>
    </div>
  );
};

Frame1000003884.propTypes = {
  prop: PropTypes.string,
  prop1: PropTypes.string,
};

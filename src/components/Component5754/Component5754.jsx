/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Component5754 = ({
  prop = "第2条",
  prop1 = "利用登録",
  className,
}) => {
  return (
    <div
      className={`flex items-start gap-6 relative top-[30px] w-[254px] ${className}`}
    >
      <div className="relative w-fit mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-text text-sm tracking-[0] leading-[14px] whitespace-nowrap">
        {prop}
      </div>

      <div className="relative w-fit mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-normal text-text text-sm tracking-[0] leading-[14px] whitespace-nowrap">
        {prop1}
      </div>
    </div>
  );
};

Component5754.propTypes = {
  prop: PropTypes.string,
  prop1: PropTypes.string,
};

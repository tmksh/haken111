/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Company = ({
  prop = "フォークリフト",
  prop1 = "forklift",
  className,
}) => {
  return (
    <div
      className={`flex flex-col w-[180px] h-[66px] items-start gap-2.5 px-[42px] py-4 relative bg-white rounded-lg border border-solid border-grey-3 ${className}`}
    >
      <div className="flex flex-col w-[98px] items-center gap-1.5 relative flex-[0_0_auto] mr-[-2.00px]">
        <div className="relative self-stretch mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-black text-text text-sm text-center tracking-[0] leading-[14px]">
          {prop}
        </div>

        <div className="relative self-stretch [font-family:'Montserrat',Helvetica] font-normal text-grey-4 text-sm text-center tracking-[0] leading-[14px]">
          {prop1}
        </div>
      </div>
    </div>
  );
};

Company.propTypes = {
  prop: PropTypes.string,
  prop1: PropTypes.string,
};

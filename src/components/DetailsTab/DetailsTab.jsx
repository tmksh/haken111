/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const DetailsTab = ({ prop = "基本情報", one, className }) => {
  return (
    <div
      className={`w-full md:w-[106px] flex items-center top-3 md:top-5 h-[28px] md:h-[33px] justify-center relative ${one === "on" ? "[border-bottom-style:solid]" : ""} ${one === "on" ? "border-blue" : ""} ${one === "off" ? "left-0 md:left-5" : "left-0 md:left-[145px]"} ${one === "on" ? "border-b-2" : ""} ${className}`}
    >
      <div
        className={`[font-family:'Noto_Sans_CJK_JP-Bold',Helvetica] w-fit tracking-[0] text-xs md:text-[13px] font-bold leading-[12px] md:leading-[13px] whitespace-nowrap relative ${one === "off" ? "text-grey-4" : "text-blue"}`}
      >
        {prop}
      </div>
    </div>
  );
};

DetailsTab.propTypes = {
  prop: PropTypes.string,
  one: PropTypes.oneOf(["off", "on"]),
};

/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Signin2 } from "../../icons/Signin2";

export const Nav = ({
  prop = "ログイン",
  className,
  icon = (
    <Signin2 className="!relative !w-5 !h-5 !aspect-[1]" color="#222222" />
  ),
}) => {
  return (
    <div
      className={`inline-flex items-center gap-2 relative top-[4688px] left-[1037px] ${className}`}
    >
      {icon}
      <div className="relative w-fit [font-family:'Noto_Sans_JP',Helvetica] font-medium text-text text-sm text-center tracking-[0] leading-[14px] whitespace-nowrap">
        {prop}
      </div>
    </div>
  );
};

Nav.propTypes = {
  prop: PropTypes.string,
};

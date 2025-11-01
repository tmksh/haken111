/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

export const NavTab = ({
  prop = "求人を探す",
  one,
  className,
  text = "求人を紹介してもらう",
  to,
}) => {
  return (
    <Link
      className={`border-white w-[360px] flex border-l items-center top-5 h-[58px] [border-left-style:solid] justify-center relative ${one === "off" ? "left-[425px]" : "left-5"} ${one === "off" ? "bg-light-blue" : "bg-blue"} ${className}`}
      to={to}
    >
      <div
        className={`[font-family:'Inter',Helvetica] w-fit tracking-[0] text-base font-semibold text-center whitespace-nowrap leading-4 relative ${one === "off" ? "text-text" : "text-white"}`}
      >
        {one === "on" && <>{prop}</>}

        {one === "off" && <>{text}</>}
      </div>
    </Link>
  );
};

NavTab.propTypes = {
  prop: PropTypes.string,
  one: PropTypes.oneOf(["off", "on"]),
  text: PropTypes.string,
  to: PropTypes.string,
};

/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { NavTab } from "../NavTab";

export const NavTabWrapper = ({
  className,
  navTabOne = "on",
  navTabText,
  to = "/u36578u32887u30456u35527u12504u12442u12540u12471u12441",
  to1 = "/u12467u12521u12512u19968u35239",
  to2 = "/u12362u21839u12356u21512u12431u12379",
}) => {
  return (
    <div
      className={`inline-flex top-[5021px] left-[163px] items-center relative ${className}`}
    >
      <NavTab
        className="!border-[unset] !border-l-[unset] ![border-left-style:unset] !left-[unset] !top-[unset]"
        one={navTabOne}
        prop="求人を探す"
        text={navTabText}
        to="/"
      />
      <NavTab
        className="!left-[unset] !top-[unset]"
        one="off"
        text="転職相談をする"
        to={to}
      />
      <NavTab
        className="!left-[unset] !top-[unset]"
        one="off"
        text="コラム一覧"
        to={to1}
      />
      <NavTab
        className="!left-[unset] !top-[unset]"
        one="off"
        text="お問い合わせ"
        to={to2}
      />
    </div>
  );
};

NavTabWrapper.propTypes = {
  navTabOne: PropTypes.string,
  navTabText: PropTypes.string,
  to: PropTypes.string,
  to1: PropTypes.string,
  to2: PropTypes.string,
};

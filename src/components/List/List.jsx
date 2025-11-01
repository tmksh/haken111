/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const List = ({
  prop = "主な業務内容：",
  prop1 = "法人税・所得税・消費税等の税務申告書作成\n税務相談・アドバイス業務\n会計帳簿の作成・チェック業務\nクライアント対応・打ち合わせ",
  className,
  divClassName,
}) => {
  return (
    <div
      className={`flex flex-col w-[1018px] items-start gap-6 p-6 relative top-[7945px] left-[163px] bg-white rounded-[14px] ${className}`}
    >
      <div
        className={`relative self-stretch mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-bold text-blue text-lg tracking-[0] leading-[18px] ${divClassName}`}
      >
        {prop}
      </div>

      <div className="relative self-stretch [font-family:'Noto_Sans_JP',Helvetica] font-normal text-text text-base tracking-[0] leading-[25.6px]">
        {prop1}
      </div>
    </div>
  );
};

List.propTypes = {
  prop: PropTypes.string,
  prop1: PropTypes.string,
};

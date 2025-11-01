/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ArticleImage } from "../ArticleImage";

export const ArticleItem = ({
  prop = "派遣社員の面接で必ず聞かれる質問TOP10と回答例",
  prop1 = "面接官が重視するポイントと、派遣社員の質問への効果的な回答方法を具体例とともに紹介。転職成功者の実際の回答例も掲載...",
  className,
}) => {
  return (
    <div
      className={`inline-flex items-start gap-6 p-6 relative top-[3100px] left-[1818px] bg-white rounded-[14px] ${className}`}
    >
      <ArticleImage className="!left-[unset] !top-[unset]" />
      <div className="flex flex-col w-[273px] h-[141px] items-start gap-[23px] relative">
        <div className="relative self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-blue text-base text-justify tracking-[0] leading-[19.2px]">
          {prop}
        </div>

        <div className="relative flex-1 self-stretch [font-family:'Noto_Sans_JP',Helvetica] font-normal text-text text-sm text-justify tracking-[0] leading-[19.6px]">
          {prop1}
        </div>
      </div>
    </div>
  );
};

ArticleItem.propTypes = {
  prop: PropTypes.string,
  prop1: PropTypes.string,
};

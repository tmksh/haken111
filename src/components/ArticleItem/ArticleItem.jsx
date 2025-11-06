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
      className={`flex items-start gap-4 md:gap-6 p-4 md:p-6 relative bg-white rounded-[14px] w-full ${className}`}
    >
      <ArticleImage className="!left-[unset] !top-[unset]" />
      <div className="flex flex-col w-full md:w-[273px] min-h-[141px] items-start gap-[23px] relative">
        <div className="relative self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-blue text-base text-justify tracking-[0] leading-[19.2px] break-words">
          {prop}
        </div>

        <div className="relative flex-1 self-stretch [font-family:'Noto_Sans_JP',Helvetica] font-normal text-text text-sm text-justify tracking-[0] leading-[19.6px] break-words">
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

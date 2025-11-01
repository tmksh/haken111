/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const BeforeAfter = ({
  prop = "転職前",
  prop1 = "個人税理士事務所",
  prop2 = "年収420万円",
  prop3 = "残業月50時間以上\n研修制度なし\n昇進の道筋不明",
  className,
  frameClassName,
}) => {
  return (
    <div
      className={`flex flex-col w-[444px] h-[178px] items-center justify-center gap-2.5 pt-[46px] pb-6 px-[150px] relative top-[9737px] left-[168px] bg-white rounded-[14px] border border-solid border-grey-3 ${className}`}
    >
      <div
        className={`inline-flex flex-col items-center gap-4 relative flex-[0_0_auto] mt-[-3.00px] mb-[-3.00px] ${frameClassName}`}
      >
        <div className="flex flex-col items-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-text text-lg leading-[18px] text-center tracking-[0] whitespace-nowrap">
            {prop1}
          </div>

          <div className="relative self-stretch [font-family:'Inter',Helvetica] font-semibold text-pink text-lg text-center tracking-[0] leading-[18px]">
            {prop2}
          </div>
        </div>

        <div className="relative w-fit [font-family:'Inter',Helvetica] font-normal text-text text-sm tracking-[0] leading-[18.1px]">
          {prop3}
        </div>
      </div>

      <div className="absolute top-[-18px] left-[150px] w-[147px] h-[37px]">
        <img
          className="absolute top-0 left-0 w-[145px] h-[37px]"
          alt="Union"
          src="/img/union-4.svg"
        />

        <div className="absolute top-2 left-[49px] [font-family:'Noto_Sans_JP',Helvetica] font-bold text-white text-base leading-4 text-center tracking-[0] whitespace-nowrap">
          {prop}
        </div>
      </div>
    </div>
  );
};

BeforeAfter.propTypes = {
  prop: PropTypes.string,
  prop1: PropTypes.string,
  prop2: PropTypes.string,
  prop3: PropTypes.string,
};

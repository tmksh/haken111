/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Smileysad1 } from "../../icons/Smileysad1";

export const Befor = ({
  prop = "小規模倉庫",
  prop1 = "年収420万円",
  className,
}) => {
  return (
    <div
      className={`relative top-[3274px] left-[569px] w-[175px] h-20 bg-[url(/img/union-3.svg)] bg-[100%_100%] ${className}`}
    >
      <div className="flex flex-col w-[89.71%] items-start gap-1.5 relative h-[76.25%] top-[12.50%] left-[4.57%]">
        <div className="flex flex-col items-start gap-0.5 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex items-center justify-center gap-0.5 relative self-stretch w-full flex-[0_0_auto]">
            <Smileysad1 className="!relative !w-5 !h-5 !aspect-[1]" />
            <div className="w-fit text-xs leading-3 whitespace-nowrap relative [font-family:'Noto_Sans_JP',Helvetica] font-medium text-text text-center tracking-[0]">
              転職前
            </div>
          </div>

          <div className="self-stretch text-[13px] leading-[13px] relative [font-family:'Noto_Sans_JP',Helvetica] font-medium text-text text-center tracking-[0]">
            {prop}
          </div>
        </div>

        <div className="relative self-stretch [font-family:'Noto_Sans_JP',Helvetica] font-bold text-text text-xl text-center tracking-[0] leading-5">
          {prop1}
        </div>
      </div>
    </div>
  );
};

Befor.propTypes = {
  prop: PropTypes.string,
  prop1: PropTypes.string,
};

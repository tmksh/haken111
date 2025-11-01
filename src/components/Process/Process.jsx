/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Process = ({
  prop = "1",
  prop1 = "転職エージェントへの相談（2024年1月）",
  prop2 = "まずは転職エージェントに相談し、税理士業界の転職市場や自分の市場価値について情報収集を行いました。",
  className,
  qIconClassName,
}) => {
  return (
    <div
      className={`flex flex-col w-[970px] items-start gap-2 relative top-[9988px] left-[168px] ${className}`}
    >
      <div className="inline-flex items-center gap-2 relative flex-[0_0_auto] mr-[-38.00px]">
        <div
          className={`flex flex-col w-[30px] h-[30px] items-center justify-center relative rounded-[14.78px] aspect-[1] bg-[linear-gradient(90deg,rgba(137,185,41,1)_0%,rgba(87,195,132,1)_50%,rgba(17,165,177,1)_100%)] ${qIconClassName}`}
        >
          <div className="relative w-fit [font-family:'Open_Sans',Helvetica] font-bold text-[#ffffff] text-base tracking-[0] leading-4 whitespace-nowrap">
            {prop}
          </div>
        </div>

        <div className="relative w-[970px] h-4 [font-family:'Noto_Sans_JP',Helvetica] font-black text-text text-base tracking-[0] leading-4 whitespace-nowrap">
          {prop1}
        </div>
      </div>

      <div className="flex items-center justify-center gap-2.5 pl-[38px] pr-0 py-0 relative self-stretch w-full flex-[0_0_auto]">
        <div className="relative flex-1 mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-text-2 text-base tracking-[0] leading-4">
          {prop2}
        </div>
      </div>
    </div>
  );
};

Process.propTypes = {
  prop: PropTypes.string,
  prop1: PropTypes.string,
  prop2: PropTypes.string,
};

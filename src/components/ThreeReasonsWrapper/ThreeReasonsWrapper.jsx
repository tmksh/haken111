/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const ThreeReasonsWrapper = ({
  prop = "01",
  prop1 = "QUALITY",
  prop2 = "「数」ではなく「質」を重視し、適切な人材をご紹介します。",
  prop3 = "「数を打てば当たる」という考えを排除し、貴社の要望に沿った人材のご紹介を心がけます。\n募集要項に限らず、貴社の社風やスクリーニング条件を加味し、採用業務の負担軽減に貢献します。",
  className,
}) => {
  return (
    <div
      className={`flex flex-col w-[634px] items-start gap-8 relative top-[6254px] left-[163px] ${className}`}
    >
      <div className="relative w-[639px] h-14 mr-[-5.00px]">
        <div className="absolute -top-px left-1.5 w-[119px] [font-family:'Open_Sans',Helvetica] font-normal text-grey-2 text-[80px] text-justify tracking-[0] leading-[80px] whitespace-nowrap">
          {prop}
        </div>

        <div className="absolute top-8 left-0 w-[635px] [font-family:'Open_Sans',Helvetica] font-extrabold text-blue text-2xl tracking-[0] leading-6 whitespace-nowrap">
          {prop1}
        </div>
      </div>

      <div className="flex flex-col items-start gap-[13px] relative self-stretch w-full flex-[0_0_auto]">
        <div className="mt-[-1.00px] font-black text-base leading-4 relative self-stretch [font-family:'Noto_Sans_JP',Helvetica] text-text tracking-[0]">
          {prop2}
        </div>

        <div className="font-normal text-sm text-justify leading-[22.4px] relative self-stretch [font-family:'Noto_Sans_JP',Helvetica] text-text tracking-[0]">
          {prop3}
        </div>
      </div>
    </div>
  );
};

ThreeReasonsWrapper.propTypes = {
  prop: PropTypes.string,
  prop1: PropTypes.string,
  prop2: PropTypes.string,
  prop3: PropTypes.string,
};

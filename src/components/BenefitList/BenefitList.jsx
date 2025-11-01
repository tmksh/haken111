/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Benefit } from "../../icons/Benefit";

export const BenefitList = ({
  prop = "求人紹介・マッチング",
  prop1 = "あなたの経験・スキル・希望条件に合った求人を厳選してご紹介。非公開求人も含めて最適な案件をマッチングします。",
  className,
  icon = <Benefit className="!relative !w-[123px] !h-[123px]" />,
}) => {
  return (
    <div
      className={`relative top-[8744px] left-[168px] w-[398px] h-[257px] ${className}`}
    >
      <div className="absolute w-full h-[86.38%] top-[13.62%] left-0 bg-grey1-bg rounded-[14px]" />

      <div className="flex flex-col w-[87.94%] items-center gap-2.5 absolute h-[90.66%] top-0 left-[6.03%]">
        {icon}
        <div className="flex flex-col h-[100px] items-center gap-4 relative self-stretch w-full">
          <div className="mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-bold text-blue text-lg text-center leading-[18px] relative self-stretch tracking-[0]">
            {prop}
          </div>

          <div className="flex-1 [font-family:'Inter',Helvetica] font-normal text-text text-base text-justify leading-[22.4px] relative self-stretch tracking-[0]">
            {prop1}
          </div>
        </div>
      </div>
    </div>
  );
};

BenefitList.propTypes = {
  prop: PropTypes.string,
  prop1: PropTypes.string,
};

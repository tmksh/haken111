/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Currencyjpy2 } from "../../icons/Currencyjpy2";

export const Component5755 = ({
  prop = "給与",
  prop1 = "年収 600万円～900万円",
  prop2 = "※経験・スキルに応じて決定",
  prop3 = "テキスト",
  className,
  frameClassName,
  visible = true,
  divClassName,
  hasDiv = true,
  hasDiv1 = true,
  hasDiv2 = true,
  icon = (
    <Currencyjpy2
      className="!relative !w-[18px] !h-[18px] !aspect-[1]"
      color="#222222"
    />
  ),
  divClassNameOverride,
  divClassName1,
  divClassName2,
}) => {
  return (
    <div
      className={`flex flex-col w-[182px] items-start gap-2 relative top-[7530px] left-[797px] ${className}`}
    >
      <div
        className={`inline-flex items-center gap-2 relative flex-[0_0_auto] ${frameClassName}`}
      >
        {visible && <>{icon}</>}

        <div
          className={`relative w-fit [font-family:'Noto_Sans_JP',Helvetica] font-medium text-text text-base tracking-[0] leading-4 whitespace-nowrap ${divClassName}`}
        >
          {prop}
        </div>
      </div>

      {hasDiv && (
        <div
          className={`relative self-stretch [font-family:'Noto_Sans_JP',Helvetica] font-normal text-text-2 text-sm tracking-[0] leading-[14px] ${divClassNameOverride}`}
        >
          {prop1}
        </div>
      )}

      {hasDiv1 && (
        <div
          className={`relative self-stretch [font-family:'Noto_Sans_JP',Helvetica] font-normal text-text-2 text-sm tracking-[0] leading-[14px] ${divClassName2}`}
        >
          {prop2}
        </div>
      )}

      {hasDiv2 && (
        <div
          className={`relative self-stretch [font-family:'Noto_Sans_JP',Helvetica] font-normal text-text-2 text-sm tracking-[0] leading-[14px] ${divClassName1}`}
        >
          {prop3}
        </div>
      )}
    </div>
  );
};

Component5755.propTypes = {
  prop: PropTypes.string,
  prop1: PropTypes.string,
  prop2: PropTypes.string,
  prop3: PropTypes.string,
  visible: PropTypes.bool,
  hasDiv: PropTypes.bool,
  hasDiv1: PropTypes.bool,
  hasDiv2: PropTypes.bool,
};

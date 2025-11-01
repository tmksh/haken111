/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Consultation } from "../Consultation";

export const ConsultationCard = ({
  prop = "求人紹介・マッチング",
  prop1 = "あなたの経験・スキル・希望条件に合った求人を厳選してご紹介。非公開求人も含めて最適な案件をマッチングします。",
  className,
  consultationOne = "online",
}) => {
  return (
    <div
      className={`flex flex-col w-[302px] h-[431px] items-start gap-2.5 relative top-[8744px] left-[772px] ${className}`}
    >
      <Consultation
        className="!self-stretch !h-[unset] !left-[unset] !w-full !top-[unset]"
        one={consultationOne}
      />
      <div className="flex flex-col w-[302px] h-[238px] items-start justify-between p-4 absolute top-[193px] left-0 bg-grey1-bg rounded-[0px_0px_14px_14px]">
        <div className="flex flex-col items-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
          <div className="self-stretch mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-bold text-blue text-center leading-4 relative text-base tracking-[0]">
            {prop}
          </div>

          <div className="self-stretch [font-family:'Inter',Helvetica] font-normal text-text text-justify leading-[25.6px] relative text-base tracking-[0]">
            {prop1}
          </div>
        </div>

        <button className="all-[unset] box-border flex h-[50px] items-center gap-1 p-3.5 relative self-stretch w-full bg-blue rounded-lg">
          <div className="flex-1 [font-family:'Noto_Sans_JP',Helvetica] font-bold text-white text-center leading-4 relative text-base tracking-[0]">
            選択する
          </div>
        </button>
      </div>
    </div>
  );
};

ConsultationCard.propTypes = {
  prop: PropTypes.string,
  prop1: PropTypes.string,
  consultationOne: PropTypes.string,
};

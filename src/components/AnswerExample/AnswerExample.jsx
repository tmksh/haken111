/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const AnswerExample = ({
  prop = "「大学時代に簿記の勉強を通じて会計の面白さに触れ、企業の経営を数字で支援する税理士の仕事に魅力を感じました。前職の営業職では、中小企業の経営者の方々と接する機会が多く、税務や会計面での課題を聞くことがありました。その経験から、専門知識を身につけて企業の成長を支援したいという思いが強くなり、税理士を目指すようになりました。」",
  className,
}) => {
  return (
    <div
      className={`flex flex-col items-start gap-4 p-4 relative top-[327px] left-6 bg-grey1-bg rounded-[14px] ${className}`}
    >
      <div className="mt-[-1.00px] font-bold text-base leading-4 relative self-stretch [font-family:'Inter',Helvetica] text-text tracking-[0]">
        【回答例】
      </div>

      <div className="font-normal text-sm text-justify leading-[25.6px] relative self-stretch [font-family:'Inter',Helvetica] text-text tracking-[0]">
        {prop}
      </div>
    </div>
  );
};

AnswerExample.propTypes = {
  prop: PropTypes.string,
};

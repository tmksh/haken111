/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Step = ({
  prop = "申し込みフォーム入力",
  prop1 = "お名前、連絡先、現在の状況、転職希望条件などを入力してください。所要時間は約3分です。",
  prop2 = "01",
  className,
}) => {
  return (
    <div
      className={`flex flex-col w-full max-w-[656px] items-start gap-2 relative ${className}`}
    >
      <div className="flex items-center gap-3 md:gap-[19px] relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col w-[40px] h-[40px] md:w-[53px] md:h-[53px] items-center justify-center gap-2.5 px-2 md:px-3 py-2 md:py-3.5 relative bg-blue rounded-[20px] md:rounded-[26.5px] flex-shrink-0">
          <div className="relative w-fit mt-[-0.50px] [font-family:'Open_Sans',Helvetica] font-bold text-[#ffffff] text-lg md:text-2xl tracking-[0] leading-5 md:leading-6 whitespace-nowrap">
            {prop2}
          </div>
        </div>

        <div className="relative w-fit [font-family:'Inter',Helvetica] font-bold text-[#42333e] text-lg md:text-2xl tracking-[0] leading-5 md:leading-6 whitespace-nowrap">
          {prop}
        </div>
      </div>

      <div className="flex items-center justify-center gap-2.5 pl-[48px] md:pl-[72px] pr-0 py-0 relative self-stretch w-full flex-[0_0_auto]">
        <div className="relative w-full md:w-[597px] mt-[-1.00px] ml-0 md:ml-[-6.50px] mr-0 md:mr-[-6.50px] [font-family:'Noto_Sans_JP',Helvetica] font-normal text-[#42333e] text-sm md:text-base tracking-[0] leading-[20px] md:leading-[25.6px]">
          {prop1}
        </div>
      </div>
    </div>
  );
};

Step.propTypes = {
  prop: PropTypes.string,
  prop1: PropTypes.string,
  prop2: PropTypes.string,
};

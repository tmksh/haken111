/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const ImageContainerWrapper = ({ className }) => {
  return (
    <div
      className={`flex flex-col w-[398px] h-[211px] items-center justify-center relative top-[2444px] left-[1009px] rounded-[14px_14px_0px_0px] overflow-hidden bg-[url(/img/image-container-2.png)] bg-cover bg-[50%_50%] ${className}`}
    >
      <div className="relative w-fit [font-family:'Inter',Helvetica] font-medium text-slate-400 text-[14.8px] tracking-[0] leading-[17.7px] whitespace-nowrap">
        画像を配置
      </div>
    </div>
  );
};

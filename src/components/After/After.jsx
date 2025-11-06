/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Smiley2 } from "../../icons/Smiley2";

export const After = ({ className }) => {
  return (
    <div
      className={`relative w-[148px] md:w-[185px] h-[64px] md:h-20 bg-[url(/img/union-2.svg)] bg-[100%_100%] bg-contain bg-no-repeat ${className}`}
    >
      <div className="flex flex-col w-[84.86%] items-start gap-1.5 relative h-[76.25%] top-[12.50%] left-[10.81%]">
        <div className="flex flex-col items-start gap-0.5 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex items-center justify-center gap-0.5 relative self-stretch w-full flex-[0_0_auto]">
            <Smiley2
              className="!relative !w-4 !h-4 md:!w-5 md:!h-5 !aspect-[1] flex-shrink-0"
              color="#11A5B1"
            />
            <div className="w-fit text-blue text-xs leading-3 whitespace-nowrap relative [font-family:'Noto_Sans_JP',Helvetica] font-medium text-center tracking-[0]">
              転職後
            </div>
          </div>

          <div className="self-stretch text-text text-[13px] leading-[13px] relative [font-family:'Noto_Sans_JP',Helvetica] font-medium text-center tracking-[0] break-words">
            大規模倉庫
          </div>
        </div>

        <div className="relative self-stretch [font-family:'Noto_Sans_JP',Helvetica] font-bold text-blue text-base md:text-xl text-center tracking-[0] leading-5 break-words">
          年収580万円
        </div>
      </div>
    </div>
  );
};

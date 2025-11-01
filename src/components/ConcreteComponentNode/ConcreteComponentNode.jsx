/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const ConcreteComponentNode = ({ className }) => {
  return (
    <div
      className={`flex flex-col w-[1440px] h-20 items-start gap-2.5 px-14 py-[11px] relative top-[460px] left-[103px] bg-white shadow-[0px_0px_9px_#0000001c] ${className}`}
    >
      <div className="flex w-[1328px] items-center justify-between relative flex-[0_0_auto]">
        <div className="inline-flex items-center justify-center gap-2.5 p-2.5 relative flex-[0_0_auto] bg-neutral-100">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-black text-text text-[28px] tracking-[0] leading-[36.6px] whitespace-nowrap">
            ロゴ
          </div>
        </div>

        <div className="inline-flex items-center gap-10 relative flex-[0_0_auto]">
          <div className="leading-[normal] relative w-fit [font-family:'Inter',Helvetica] font-semibold text-text text-base text-center tracking-[0] whitespace-nowrap">
            ホーム
          </div>

          <div className="leading-4 relative w-fit [font-family:'Inter',Helvetica] font-semibold text-text text-base text-center tracking-[0] whitespace-nowrap">
            求人掲載を検討中の企業様はこちら
          </div>

          <div className="leading-4 relative w-fit [font-family:'Inter',Helvetica] font-semibold text-text text-base text-center tracking-[0] whitespace-nowrap">
            登録
          </div>

          <div className="leading-4 relative w-fit [font-family:'Inter',Helvetica] font-semibold text-text text-base text-center tracking-[0] whitespace-nowrap">
            いいね
          </div>

          <div className="flex w-[151px] h-11 items-center justify-center gap-2.5 px-6 py-3.5 relative bg-blue rounded-lg">
            <div className="relative w-fit [font-family:'Noto_Sans_JP',Helvetica] font-bold text-white text-base text-center tracking-[0] leading-4 whitespace-nowrap">
              ログイン
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

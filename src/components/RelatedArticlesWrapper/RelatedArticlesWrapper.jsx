/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { RelatedArticles } from "../RelatedArticles";

export const RelatedArticlesWrapper = ({ className }) => {
  return (
    <div
      className={`flex w-[85vw] md:w-[463px] min-w-[85vw] md:min-w-[463px] h-auto md:h-[172px] items-start gap-4 px-4 py-[19px] relative bg-grey1-bg rounded-[14px] ${className}`}
    >
      <RelatedArticles className="!left-[unset] !top-[unset]" />
      <div className="flex flex-col w-full md:w-[214px] h-auto md:h-[134px] items-start gap-4 relative">
        <div className="mt-[-0.79px] [font-family:'Inter',Helvetica] font-semibold leading-[19.2px] relative self-stretch text-text text-sm md:text-base text-justify tracking-[0]">
          履歴書・職務経歴書の書き方完全ガイド
        </div>

        <div className="flex-1 [font-family:'Noto_Sans_JP',Helvetica] font-normal leading-[22.4px] relative self-stretch text-text text-sm md:text-base text-justify tracking-[0]">
          書類選考を突破するための実践的なノウハウを詳しく解説...
        </div>
      </div>
    </div>
  );
};

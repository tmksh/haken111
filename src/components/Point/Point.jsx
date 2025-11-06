/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { PointImg } from "../PointImg";

export const Point = ({
  prop = "01",
  prop1 = "企業選び・求人探しが上手い",
  prop2 = "XXXXの転職は上手いやり方、探り方があって求人を選定の成功が上手です。見学は「内観」や「外観」から、よって、求人の内容がよく見えり上手す。「内観」は内部の状況・職場の状況だけがより深く把握。「外観」は企業の実覧を会社の外がに含査案できす。\nもし監観択は分析に対注まつて監察総観がタとったとして、自身の習性や発員だ実験がる効き求めで分けることで努案をしらうことがでうます。レジャリストには、投教対る転職へのジョブチェンジにっく作業脅を監察いで内容検事だくたいいています。",
  className,
}) => {
  return (
    <div
      className={`flex flex-col w-full md:w-[398px] items-start gap-4 md:gap-6 p-4 md:p-6 relative bg-white rounded-[14px] ${className}`}
    >
      <PointImg className="!self-stretch !h-[unset] bg-[url(/img/point-img-1.png)] !left-[unset] !w-full !top-[unset]" />
      <div className="flex flex-col items-start gap-2 md:gap-3 relative self-stretch w-full flex-[0_0_auto]">
        <div className="relative w-full mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-bold text-blue text-sm md:text-base text-justify tracking-[0] leading-[18px] md:leading-[19.2px] break-words">
          {prop1}
        </div>

        <div className="relative w-full [font-family:'Noto_Sans_JP',Helvetica] font-normal text-text text-xs md:text-sm text-justify tracking-[0] leading-[20px] md:leading-[22.4px] break-words">
          {prop2}
        </div>
      </div>

      <div className="absolute top-[-40px] md:top-[-58px] left-1/2 -translate-x-1/2 [-webkit-text-stroke:2px_transparent] bg-[linear-gradient(90deg,rgba(137,185,41,1)_0%,rgba(87,195,132,1)_50%,rgba(17,165,177,1)_100%)_1] [-webkit-background-clip:text] [font-family:'Open_Sans',Helvetica] font-normal text-transparent text-[48px] md:text-[80px] text-justify tracking-[0] leading-[48px] md:leading-[80px] whitespace-nowrap">
        {prop}
      </div>
    </div>
  );
};

Point.propTypes = {
  prop: PropTypes.string,
  prop1: PropTypes.string,
  prop2: PropTypes.string,
};

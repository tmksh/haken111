/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Currencyjpy2 } from "../../icons/Currencyjpy2";
import { Mappin1 } from "../../icons/Mappin1";
import { Medal } from "../../icons/Medal";
import { DetailsTab } from "../DetailsTab";
import { ImageContainer } from "../ImageContainer";

export const JobCard = ({
  prop = "株式会社ABC",
  prop1 = "倉庫内でのフォークリフトスタッフ",
  prop2 = "東京都中央区",
  prop3 = "300,000円～600,000円",
  prop4 = "正社員・業務委託",
  prop5 = "東京都中央区",
  className,
  hasLocationInfo = true,
  qualificationInfoClassName,
  icon = <Medal className="!relative !w-4 !h-4 !aspect-[1]" />,
  text = "正社員・業務委託",
  override = (
    <ImageContainer className="!left-[unset] bg-[url(/img/image-container-1.png)] !top-[unset]" />
  ),
  detailsTabOne = "on",
  detailsTabOne1 = "off",
  icon1 = (
    <Mappin1 className="!relative !w-4 !h-4 !aspect-[1]" color="#ABABAB" />
  ),
  hasSalaryInfo = true,
  icon2 = (
    <Mappin1 className="!relative !w-4 !h-4 !aspect-[1]" color="#ABABAB" />
  ),
  detailsTabOne2 = "off",
  hasQualificationInfo = true,
}) => {
  return (
    <div
      className={`flex flex-col w-full max-w-[398px] items-start relative bg-[#ffffff] rounded-[14px] border border-solid border-grey-3 ${className}`}
    >
      {override}
      <div className="flex flex-col items-start gap-3 md:gap-6 p-3 md:p-6 relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col w-full items-start gap-1.5 md:gap-2 relative flex-[0_0_auto]">
          <div className="relative self-stretch [font-family:'Noto_Sans_JP',Helvetica] font-light text-text text-xs md:text-sm tracking-[0] leading-[14px] break-words">
            {prop}
          </div>

          <div className="self-stretch [font-family:'Inter',Helvetica] font-semibold text-text text-base md:text-lg leading-[18px] relative tracking-[0] break-words">
            {prop1}
          </div>
        </div>

        <div className="flex flex-col h-auto md:h-[156px] min-h-[140px] md:min-h-[156px] items-center justify-center relative self-stretch w-full">
          <div className="flex items-center relative self-stretch w-full flex-[0_0_auto]">
            <DetailsTab
              className="!left-[unset] !flex-1 !grow !w-[unset] !top-[unset]"
              one={detailsTabOne}
              prop="基本情報"
            />
            <DetailsTab
              className="!left-[unset] !flex-1 !grow !w-[unset] !top-[unset]"
              one={detailsTabOne1}
              prop="福利厚生"
            />
            <DetailsTab
              className="!left-[unset] !flex-1 !grow !w-[unset] !top-[unset]"
              one={detailsTabOne2}
              prop="働き方"
            />
          </div>

          <div className="relative self-stretch w-full h-auto md:h-[123px] min-h-[100px] md:min-h-[123px] bg-grey1-bg rounded-[0px_0px_6px_6px]">
            <div className="flex flex-col w-full md:w-[286px] h-auto md:h-16 items-start gap-2 relative top-3 md:top-4 left-3 md:left-4 pb-3 md:pb-0">
              <div className="flex items-center gap-2 md:gap-[8.24px] relative self-stretch w-full flex-[0_0_auto]">
                {icon1}
                <div className="flex-1 [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#42333e] text-xs md:text-sm leading-[14px] relative tracking-[0] break-words">
                  {prop2}
                </div>
              </div>

              {hasSalaryInfo && (
                <div className="flex items-center gap-2 md:gap-[8.24px] relative self-stretch w-full flex-[0_0_auto]">
                  <Currencyjpy2
                    className="!relative !w-3.5 !h-3.5 md:!w-4 md:!h-4 !aspect-[1] flex-shrink-0"
                    color="#ABABAB"
                  />
                  <div className="relative flex-1 [font-family:'Noto_Sans_JP',Helvetica] font-extrabold text-blue text-xs md:text-sm tracking-[0] leading-[14px] break-words">
                    {prop3}
                  </div>
                </div>
              )}

              {hasLocationInfo && (
                <div className="flex items-center gap-2 md:gap-[8.24px] relative self-stretch w-full flex-[0_0_auto]">
                  {icon2}
                  <div className="flex-1 [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#42333e] text-xs md:text-sm leading-[14px] relative tracking-[0] break-words">
                    {prop5}
                  </div>
                </div>
              )}

              {hasQualificationInfo && (
                <div
                  className={`flex items-center gap-2 md:gap-[8.24px] relative self-stretch w-full flex-[0_0_auto] mb-[-24.00px] ${qualificationInfoClassName}`}
                >
                  {icon}
                  <div className="flex-1 [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#42333e] text-xs md:text-sm leading-[14px] relative tracking-[0] break-words">
                    {text}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

JobCard.propTypes = {
  prop: PropTypes.string,
  prop1: PropTypes.string,
  prop2: PropTypes.string,
  prop3: PropTypes.string,
  prop4: PropTypes.string,
  prop5: PropTypes.string,
  hasLocationInfo: PropTypes.bool,
  text: PropTypes.string,
  detailsTabOne: PropTypes.string,
  detailsTabOne1: PropTypes.string,
  hasSalaryInfo: PropTypes.bool,
  detailsTabOne2: PropTypes.string,
  hasQualificationInfo: PropTypes.bool,
};

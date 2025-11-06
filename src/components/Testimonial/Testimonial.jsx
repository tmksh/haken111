/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Avatar } from "../Avatar";
import { AvatarIllustration } from "../AvatarIllustration";
import { Arrowright5 } from "../../icons/Arrowright5";
import { StarFill7 } from "../../icons/StarFill7";

export const Testimonial = ({
  // New API (Screen1 - FrameWrapper)
  className,
  avatarIllustrationOne,
  text,
  text1,
  text2,
  text3,
  text4,
  // Old API (Screen - ConsultationSection)
  prop,
  prop1,
  prop2,
  avatarElement,
  icon,
  frameClassName,
  visible,
}) => {
  // Determine which API is being used
  const isOldAPI = prop !== undefined || prop1 !== undefined || prop2 !== undefined || avatarElement !== undefined;
  
  if (isOldAPI) {
    // Old API: prop, prop1, prop2, text, avatarElement, icon
    const name = prop || "田中 さん（29歳）";
    const role1 = prop1 || "フォークリフトスタッフ";
    const role2 = prop2 || "倉庫マネージャー";
    const comment = text || "";
    
  return (
    <div
      className={`flex flex-col w-full items-start justify-between p-6 relative bg-[#ffffff] rounded-[14px] border-[1.16px] border-solid border-slate-200 ${className}`}
    >
        <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex items-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
            <Avatar
              className="!relative !left-[unset] !top-[unset]"
              element={avatarElement || "/img/avatar.svg"}
              one="four"
            />
            <div className="flex flex-col items-start gap-2.5 relative flex-1 grow">
              <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex h-4 items-center gap-4 relative self-stretch w-full">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-text text-base tracking-[0] leading-4 whitespace-nowrap">
                    {name}
                  </div>
                </div>

                <div
                  className={`inline-flex items-center gap-2 relative flex-[0_0_auto] mr-[-2.00px] ${frameClassName}`}
                >
                  <div className="w-fit leading-[14px] whitespace-nowrap relative [font-family:'Noto_Sans_JP',Helvetica] font-normal text-text text-sm tracking-[0]">
                    {role1}
                  </div>
                  {role2 && (
                    <>
                      <Arrowright5 className="!relative !w-[18px] !h-[18px] !aspect-[1]" />
                      <div className="w-fit leading-[14px] whitespace-nowrap relative [font-family:'Noto_Sans_JP',Helvetica] font-normal text-text text-sm tracking-[0]">
                        {role2}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start gap-2.5 p-2 relative self-stretch w-full flex-[0_0_auto] bg-grey1-bg rounded-md">
            <div className="self-stretch text-justify leading-[19.6px] relative [font-family:'Noto_Sans_JP',Helvetica] font-normal text-text text-sm tracking-[0]">
              {comment}
            </div>
          </div>
        </div>

        <div className="inline-flex items-start gap-px relative flex-[0_0_auto]">
          {icon || <StarFill7 className="!relative !w-4 !h-4 !aspect-[1]" color="#11A5B1" />}
          <StarFill7
            className="!relative !w-4 !h-4 !aspect-[1]"
            color="#11A5B1"
          />
          <StarFill7
            className="!relative !w-4 !h-4 !aspect-[1]"
            color="#11A5B1"
          />
          <StarFill7
            className="!relative !w-4 !h-4 !aspect-[1]"
            color="#11A5B1"
          />
          {visible !== false && (
            <StarFill7
              className="!relative !w-4 !h-4 !aspect-[1]"
              color="#11A5B1"
            />
          )}
        </div>
      </div>
    );
  }
  
  // New API: text, text1, text2, text3, text4, avatarIllustrationOne
  const companyName = text || "大手倉庫会社A";
  const position = text1 || "経営人事部 人事課 課長 / 田中様";
  const employeeCount = text2 || "従業員数：1,250名";
  const headline = text3 || "とにかく採用に繋がります。成果が出ることに何より満足です。";
  const description = text4 || "掲載を開始して1年間で、約40名の採用に繋がりました。これほど成果の出る人材紹介サービスを見たことがありません。また弊社独自の企業文化や、税務業界での専門性、国際税務やM&Aなど様々な業務を深く理解し、それに見合った人材をご紹介いただけるのも嬉しいことです。専門特化した採用促進の取り組みも楽しみです。";
  
  return (
    <div
      className={`flex flex-col w-full items-start gap-4 p-6 relative bg-white rounded-[14px] border-[1.16px] border-solid border-slate-200 ${className}`}
    >
      <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex items-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
          <AvatarIllustration
            className="!left-[unset] !top-[unset]"
            one={avatarIllustrationOne || "one"}
          />
          <div className="flex flex-col items-start gap-2.5 relative flex-1 grow">
            <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex h-4 items-center gap-4 relative self-stretch w-full">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-text text-base tracking-[0] leading-4 whitespace-nowrap">
                  {companyName}
                </div>
              </div>

              <div className="flex h-4 items-center gap-4 relative self-stretch w-full">
                <p className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-text text-base tracking-[0] leading-4 whitespace-nowrap">
                  {position}
                </p>
              </div>

              <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-normal text-[#222222cc] text-sm tracking-[0] leading-[14px] whitespace-nowrap">
                  {employeeCount}
                </div>
              </div>
            </div>
          </div>
        </div>

        <img
          className="relative w-full h-px mr-[-1.00px] object-cover"
          alt="Line"
          src="/img/line-4.svg"
        />

        <div className="relative self-stretch [font-family:'Noto_Sans_JP',Helvetica] font-bold text-blue text-base text-justify tracking-[0] leading-[22.4px]">
          {headline}
        </div>

        <div className="relative self-stretch [font-family:'Noto_Sans_JP',Helvetica] font-normal text-[#222222cc] text-sm text-justify tracking-[0] leading-[22.4px]">
          {description}
        </div>
      </div>
    </div>
  );
};

Testimonial.propTypes = {
  // New API
  className: PropTypes.string,
  avatarIllustrationOne: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  text4: PropTypes.string,
  // Old API
  prop: PropTypes.string,
  prop1: PropTypes.string,
  prop2: PropTypes.string,
  avatarElement: PropTypes.string,
  icon: PropTypes.node,
  frameClassName: PropTypes.string,
  visible: PropTypes.bool,
};

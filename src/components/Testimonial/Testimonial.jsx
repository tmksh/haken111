/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Arrowright5 } from "../../icons/Arrowright5";
import { StarFill7 } from "../../icons/StarFill7";
import { Avatar } from "../Avatar";

export const Testimonial = ({
  prop = "田中 さん（29歳）",
  prop1 = "フォークリフトスタッフ",
  prop2 = "倉庫マネージャー",
  className,
  avatarElement = "/img/avatar.svg",
  icon = (
    <StarFill7 className="!relative !w-4 !h-4 !aspect-[1]" color="#11A5B1" />
  ),
  text = "初回の相談で自分のキャリアの方向性が明確になりました。アドバイザーの方が倉庫業務に詳しく、具体的なアドバイスをいただけて本当に助かりました。",
  frameClassName,
  visible = true,
}) => {
  return (
    <div
      className={`flex flex-col w-[398px] h-[236px] items-start justify-between p-6 relative top-[3100px] left-[1237px] bg-[#ffffff] rounded-[14px] border-[1.16px] border-solid border-slate-200 ${className}`}
    >
      <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex items-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
          <Avatar
            className="!relative !left-[unset] !top-[unset]"
            element2={avatarElement}
            one="four"
          />
          <div className="flex flex-col items-start gap-2.5 relative flex-1 grow">
            <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex h-4 items-center gap-4 relative self-stretch w-full">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-text text-base tracking-[0] leading-4 whitespace-nowrap">
                  {prop}
                </div>
              </div>

              <div
                className={`inline-flex items-center gap-2 relative flex-[0_0_auto] mr-[-2.00px] ${frameClassName}`}
              >
                <div className="w-fit leading-[14px] whitespace-nowrap relative [font-family:'Noto_Sans_JP',Helvetica] font-normal text-text text-sm tracking-[0]">
                  {prop1}
                </div>

                <Arrowright5 className="!relative !w-[18px] !h-[18px] !aspect-[1]" />
                <div className="w-fit leading-[14px] whitespace-nowrap relative [font-family:'Noto_Sans_JP',Helvetica] font-normal text-text text-sm tracking-[0]">
                  {prop2}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start gap-2.5 p-2 relative self-stretch w-full flex-[0_0_auto] bg-grey1-bg rounded-md">
          <div className="self-stretch text-justify leading-[19.6px] relative [font-family:'Noto_Sans_JP',Helvetica] font-normal text-text text-sm tracking-[0]">
            {text}
          </div>
        </div>
      </div>

      <div className="inline-flex items-start gap-px relative flex-[0_0_auto]">
        {icon}
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

        {visible && (
          <StarFill7
            className="!relative !w-4 !h-4 !aspect-[1]"
            color="#11A5B1"
          />
        )}
      </div>
    </div>
  );
};

Testimonial.propTypes = {
  prop: PropTypes.string,
  prop1: PropTypes.string,
  prop2: PropTypes.string,
  avatarElement: PropTypes.string,
  text: PropTypes.string,
  visible: PropTypes.bool,
};

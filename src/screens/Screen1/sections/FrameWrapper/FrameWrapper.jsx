import React from "react";
import { AvatarIllustration } from "../../../../components/AvatarIllustration";
import { HeaderSection } from "../../../../components/HeaderSection";
import { Testimonial } from "../../../../components/Testimonial";

export const FrameWrapper = () => {
  return (
    <div className="flex flex-col w-full max-w-[1018px] items-center justify-center gap-8 md:gap-14 px-4 md:px-0 py-10 relative flex-[0_0_auto] bg-light-blue">
      <HeaderSection
        className="!flex-[0_0_auto] !left-[unset] !top-[unset]"
        divClassName="!text-xl md:!text-[32px]"
        divClassNameOverride="!text-2xl md:!text-5xl ![align-self:unset] !whitespace-nowrap !w-fit"
        prop="御満足度95%以上！！"
        prop1="採用担当者様の声"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-auto md:grid-rows-2 w-full max-w-[970px] gap-[20px_20px] md:gap-[40px_41px] relative flex-[0_0_auto]">
        <Testimonial className="!left-[unset] !w-full !top-[unset]" />
        <div className="w-full h-auto md:h-[334px] flex flex-col items-start gap-4 p-6 relative bg-white rounded-[14px] border-[1.16px] border-solid border-slate-200">
          <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex items-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
              <AvatarIllustration
                className="!left-[unset] !top-[unset]"
                one="two"
              />
              <div className="gap-2.5 flex-1 grow flex flex-col items-start relative">
                <div className="gap-2 self-stretch w-full flex-[0_0_auto] flex flex-col items-start relative">
                  <div className="flex h-4 items-center gap-4 relative self-stretch w-full">
                    <div className="mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-text relative w-fit text-base tracking-[0] leading-4 whitespace-nowrap">
                      倉庫会社B
                    </div>
                  </div>

                  <div className="flex h-4 items-center gap-4 relative self-stretch w-full">
                    <p className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-text text-base tracking-[0] leading-4 whitespace-nowrap">
                      <span className="font-semibold">人事課 課長 / </span>

                      <span className="[font-family:'Noto_Sans_JP',Helvetica] font-semibold">
                        神野様
                      </span>
                    </p>
                  </div>

                  <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-normal text-[#222222cc] text-sm tracking-[0] leading-[14px] whitespace-nowrap">
                      従業員数：85名
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <img
              className="relative w-[418px] h-px object-cover"
              alt="Line"
              src="/img/line-4.svg"
            />

            <div className="relative self-stretch [font-family:'Noto_Sans_JP',Helvetica] font-bold text-blue text-base text-justify tracking-[0] leading-[22.4px]">
              弊社の業務内容や社風を理解した、的確な人材採用ができています。
            </div>

            <div className="relative self-stretch [font-family:'Noto_Sans_JP',Helvetica] font-normal text-[#222222cc] text-sm text-justify tracking-[0] leading-[22.4px]">
              弊社の特徴もしっかりとご理解いただいた上で人材を紹介してもらえることに満足しています。
              <br />
              派遣市場さんはその点を押さえてくれる唯一の人材紹介サービスだと思います。
            </div>
          </div>
        </div>

        <Testimonial
          avatarIllustrationOne="three"
          className="!min-h-[334px] !left-[unset] !w-full !top-[unset]"
          text="上場企業C株式会社"
          text1="人事総務部 西村様"
          text2="従業員数：3,200名"
          text3="きめ細かなサポートを低コストで対応してくれるので感謝です。"
          text4="弊社の特徴を予め求職者様へお伝えいただくため、応募時の弊社への理解が深くマッチング率（採用率）が高いです。また求職者様へきめ細かなフォローをされており、お互いに納得のできる結果になっていると思います。他の採用サービスと比べてもコストと時間を抑えることができ、派遣市場様にはとても感謝しています。"
        />
        <div className="w-full h-[334px] flex flex-col items-start gap-4 p-6 relative bg-white rounded-[14px] border-[1.16px] border-solid border-slate-200">
          <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex items-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
              <AvatarIllustration
                className="!left-[unset] !top-[unset]"
                one="four"
              />
              <div className="gap-2.5 flex-1 grow flex flex-col items-start relative">
                <div className="gap-2 self-stretch w-full flex-[0_0_auto] flex flex-col items-start relative">
                  <div className="flex h-4 items-center gap-4 relative self-stretch w-full">
                    <div className="mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-text relative w-fit text-base tracking-[0] leading-4 whitespace-nowrap">
                      倉庫会社B
                    </div>
                  </div>

                  <div className="flex h-4 items-center gap-4 relative self-stretch w-full">
                    <p className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-text text-base tracking-[0] leading-4 whitespace-nowrap">
                      <span className="font-semibold">人事課 / </span>

                      <span className="[font-family:'Noto_Sans_JP',Helvetica] font-semibold">
                        山田様
                      </span>
                    </p>
                  </div>

                  <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-normal text-[#222222cc] text-sm tracking-[0] leading-[14px] whitespace-nowrap">
                      従業員数：12名
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <img
              className="relative w-[418px] h-px object-cover"
              alt="Line"
              src="/img/line-4.svg"
            />

            <div className="relative self-stretch [font-family:'Noto_Sans_JP',Helvetica] font-bold text-blue text-base text-justify tracking-[0] leading-[22.4px]">
              小さな事務所でも親身になってサポートしていただき心強いです。
            </div>

            <div className="relative self-stretch [font-family:'Noto_Sans_JP',Helvetica] font-normal text-[#222222cc] text-sm text-justify tracking-[0] leading-[22.4px]">
              従業員12名の小さな会計事務所ですが、大手と同じように丁寧にサポートしていただいています。
              <br />
              成功報酬制なので、採用が決まるまで費用がかからないのも小規模事務所には非常に助かります。今後もお世話になりたいと思います。
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

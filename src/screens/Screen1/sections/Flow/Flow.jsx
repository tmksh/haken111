import React from "react";
import { FlowList } from "../../../../components/FlowList";
import { HeaderSection } from "../../../../components/HeaderSection";
import { StepSmall } from "../../../../components/StepSmall";
import { Arrowleft } from "../../../../icons/Arrowleft";
import { Arrowright } from "../../../../icons/Arrowright";
import { Arrowright3 } from "../../../../icons/Arrowright3";
import { Calendarcheck1 } from "../../../../icons/Calendarcheck1";
import { Eleven } from "../../../../icons/Eleven";
import { Flow2 } from "../../../../icons/Flow2";
import { Flow3 } from "../../../../icons/Flow3";
import { Fourteen } from "../../../../icons/Fourteen";
import { Handshake1 } from "../../../../icons/Handshake1";
import { Magnifyingglass1 } from "../../../../icons/Magnifyingglass1";
import { Notepad1 } from "../../../../icons/Notepad1";
import { Notepencil2 } from "../../../../icons/Notepencil2";
import { Users1 } from "../../../../icons/Users1";

export const Flow = () => {
  return (
    <div className="flex flex-col w-full max-w-[704px] items-center gap-8 md:gap-14 relative flex-[0_0_auto] px-4 md:px-0">
      <HeaderSection
        className="!flex-[0_0_auto] !left-[unset] !top-[unset]"
        divClassNameOverride="!text-2xl md:!text-5xl"
        prop="FLOW"
        prop1="サービスご利用の流れ"
      />
      <div className="flex flex-col items-start gap-6 md:gap-10 relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col items-center gap-8 md:gap-16 px-4 md:px-[104px] py-6 md:py-10 relative self-stretch w-full flex-[0_0_auto] bg-white">
          <div className="flex flex-col w-full max-w-[425px] items-center gap-4 md:gap-5 relative flex-[0_0_auto]">
            <div className="relative w-full max-w-[210px] h-[55px]">
              <div className="absolute top-[15px] left-0 w-full max-w-[210px] h-10 rounded-md bg-[linear-gradient(90deg,rgba(137,185,41,1)_0%,rgba(87,195,132,1)_50%,rgba(17,165,177,1)_100%)]" />

              <div className="absolute top-0 left-[17px] w-[186px] h-[50px] flex">
                <div className="mt-[23px] w-12 h-6 [font-family:'Noto_Sans_JP',Helvetica] font-bold text-[#ffffff] text-xl md:text-2xl tracking-[0] leading-6 whitespace-nowrap">
                  最短
                </div>

                <div className="-mt-px w-[30px] h-[50px] relative ml-0.5 [-webkit-text-stroke:1px_transparent] bg-[linear-gradient(90deg,rgba(137,185,41,1)_0%,rgba(87,195,132,1)_50%,rgba(17,165,177,1)_100%)_1] [-webkit-background-clip:text] [font-family:'Noto_Sans_JP',Helvetica] font-bold text-[#ffffff] text-4xl md:text-[50px] leading-[50px] tracking-[0] whitespace-nowrap">
                  3
                </div>

                <div className="mt-[23px] w-6 h-6 [font-family:'Noto_Sans_JP',Helvetica] font-bold text-[#ffffff] text-xl md:text-2xl tracking-[0] leading-6 whitespace-nowrap">
                  日
                </div>

                <div className="mt-[25px] w-6 h-6 [font-family:'Noto_Sans_JP',Helvetica] font-bold text-[#ffffff] text-xl md:text-2xl tracking-[0] leading-6 whitespace-nowrap">
                  ＆
                </div>

                <div className="mt-[23px] w-12 h-6 [font-family:'Noto_Sans_JP',Helvetica] font-bold text-[#ffffff] text-xl md:text-2xl tracking-[0] leading-6 whitespace-nowrap">
                  無料
                </div>
              </div>
            </div>

            <div className="relative self-stretch [font-family:'Noto_Sans_JP',Helvetica] font-bold text-text text-base md:text-lg text-center tracking-[0] leading-[18px]">
              最短3日で反映！お申し込みから求人掲載までの流れ
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 md:gap-6 relative self-stretch w-full flex-[0_0_auto]">
            <FlowList
              className="!self-stretch !flex-[0_0_auto] !flex !left-[unset] !w-full !top-[unset]"
              hasDiv={false}
              icon={
                <Eleven className="!absolute !top-[-15px] !left-8 !w-16 !h-16 md:!w-20 md:!h-20" />
              }
              prop="01"
              prop1="お申し込み"
            />
            <img
              className="relative w-[24px] md:w-[30px] h-4"
              alt="Rectangle"
              src="/img/rectangle-5808.svg"
            />

            <FlowList
              className="!self-stretch !flex-[0_0_auto] !flex !left-[unset] !w-full !top-[unset]"
              icon={
                <Flow2 className="!absolute !top-[-15px] !left-8 !w-16 !h-16 md:!w-20 md:!h-20" />
              }
              prop="02"
              prop1="募集要項・画像素材のご提出"
              divClassName="!break-words"
            />
            <img
              className="relative w-[24px] md:w-[30px] h-4"
              alt="Rectangle"
              src="/img/rectangle-5808.svg"
            />

            <FlowList
              className="!self-stretch !flex-[0_0_auto] !flex !left-[unset] !w-full !top-[unset]"
              divClassName="!leading-[22px] md:!leading-[21.6px]"
              frameClassName=""
              hasDiv={false}
              icon={
                <Flow3
                  className="!absolute !top-[-15px] !left-8 !w-16 !h-16 md:!w-20 md:!h-20"
                  color="#11A5B1"
                  fill="#11A5B1"
                />
              }
              prop="03"
              prop1={
                <>
                  企業ページ・
                  <br />
                  募集ページの作成
                </>
              }
            />
            <img
              className="relative w-[24px] md:w-[30px] h-4"
              alt="Rectangle"
              src="/img/rectangle-5808.svg"
            />

            <FlowList
              className="!self-stretch !flex-[0_0_auto] !flex !left-[unset] !w-full !top-[unset]"
              hasDiv={false}
              icon={
                <Fourteen className="!absolute !top-[-15px] !left-8 !w-16 !h-16 md:!w-20 md:!h-20" />
              }
              prop="04"
              prop1="掲載開始"
            />
          </div>
        </div>

        <div className="flex flex-col items-center gap-8 md:gap-14 px-4 md:px-[79px] py-6 md:py-10 relative self-stretch w-full flex-[0_0_auto] bg-light-blue">
          <div className="relative self-stretch mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-bold text-text text-xl md:text-[32px] text-center md:text-left tracking-[0] leading-8">
            応募獲得から内定・採用までの流れ
          </div>

          <div className="flex flex-col items-center md:items-end justify-center gap-4 md:gap-[11px] relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 md:gap-6 relative self-stretch w-full flex-[0_0_auto]">
              <StepSmall
                className="!left-[unset] !top-[unset] !w-[calc(33.333%-8px)] md:!w-[134px] !min-w-0"
                icon={
                  <Notepencil2 className="!w-[24px] !h-[24px] md:!w-[28.98px] md:!h-[28.98px] !relative !aspect-[1]" />
                }
              />
              <Arrowright className="!relative !w-4 !h-4 md:!w-6 md:!h-6 !aspect-[1] flex-shrink-0 hidden md:block" />
              <StepSmall
                className="!left-[unset] !top-[unset] !w-[calc(33.333%-8px)] md:!w-[134px] !min-w-0"
                divClassName="!mb-[-5.00px] ![white-space:unset]"
                icon={
                  <Magnifyingglass1 className="!relative !w-[24px] !h-[24px] md:!w-[28.98px] md:!h-[28.98px] !aspect-[1]" />
                }
                text={
                  <>
                    履歴書回収
                    <br />
                    スクリーニング
                  </>
                }
              />
              <Arrowright className="!relative !w-4 !h-4 md:!w-6 md:!h-6 !aspect-[1] flex-shrink-0 hidden md:block" />
              <StepSmall
                className="!left-[unset] !top-[unset] !w-[calc(33.333%-8px)] md:!w-[134px] !min-w-0"
                divClassName="!mr-[-5.00px] !ml-[-5.00px] !mb-[-5.00px] ![white-space:unset]"
                icon={
                  <Notepad1 className="!relative !w-[24px] !h-[24px] md:!w-[28.98px] md:!h-[28.98px] !aspect-[1]" />
                }
                text={
                  <>
                    求職者情報の共有
                    <br />
                    貴社ご確認
                  </>
                }
              />
            </div>

            <div className="inline-flex items-center gap-2.5 pl-0 pr-0 md:pr-[55px] py-0 relative flex-[0_0_auto] hidden md:flex">
              <Arrowright3 className="!relative !w-4 !h-4 md:!w-6 md:!h-6 !aspect-[1]" />
            </div>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 md:gap-6 relative self-stretch w-full flex-[0_0_auto]">
              <StepSmall
                className="!left-[unset] !top-[unset] !w-[calc(33.333%-8px)] md:!w-[134px] !min-w-0"
                icon={
                  <Handshake1 className="!relative !w-[24px] !h-[24px] md:!w-[28.98px] md:!h-[28.98px] !aspect-[1]" />
                }
                text="内定・採用"
              />
              <Arrowleft className="!relative !w-4 !h-4 md:!w-6 md:!h-6 !aspect-[1] flex-shrink-0 hidden md:block" />
              <StepSmall
                className="!left-[unset] !top-[unset] !w-[calc(33.333%-8px)] md:!w-[134px] !min-w-0"
                icon={
                  <Users1 className="!relative !w-[24px] !h-[24px] md:!w-[28.98px] md:!h-[28.98px] !aspect-[1]" />
                }
                text="選考・面接"
              />
              <Arrowleft className="!relative !w-4 !h-4 md:!w-6 md:!h-6 !aspect-[1] flex-shrink-0 hidden md:block" />
              <StepSmall
                className="!left-[unset] !top-[unset] !w-[calc(33.333%-8px)] md:!w-[134px] !min-w-0"
                icon={
                  <Calendarcheck1 className="!relative !w-[24px] !h-[24px] md:!w-[28.98px] md:!h-[28.98px] !aspect-[1]" />
                }
                text="面接の調整"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col min-h-[200px] md:h-[200px] items-start gap-2.5 px-4 md:px-[77px] py-6 md:py-8 relative self-stretch w-full">
          <img
            className="absolute top-0 left-0 w-full md:w-[704px] h-full md:h-[200px] object-cover"
            alt="Yellow BG"
            src="/img/yellow-bg.png"
          />

          <div className="flex flex-col w-full max-w-[550px] items-center gap-4 md:gap-6 relative flex-[0_0_auto] z-10">
            <div className="relative self-stretch mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-bold text-white text-lg md:text-2xl text-center tracking-[0] leading-6">
              すべてのステップで専任コンサルタントがサポート
            </div>

            <div className="flex flex-col w-full max-w-[384px] items-start gap-3 md:gap-4 relative flex-[0_0_auto]">
              <div className="flex flex-wrap items-center justify-center gap-3 md:gap-8 relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex w-full md:w-44 items-center justify-center gap-2.5 px-4 py-2.5 relative bg-white rounded-[100px]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-bold text-text text-sm md:text-base tracking-[0] leading-4 whitespace-nowrap">
                    最短3日で掲載開始
                  </div>
                </div>

                <div className="flex w-full md:w-44 items-center justify-center gap-2.5 px-4 py-2.5 relative bg-white rounded-[100px]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-bold text-text text-sm md:text-base tracking-[0] leading-4 whitespace-nowrap">
                    完全成功報酬制
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 md:gap-8 relative self-stretch w-full flex-[0_0_auto]">
                <div className="inline-flex items-center justify-center gap-2.5 px-4 py-2.5 relative flex-[0_0_auto] bg-[#ffffff] rounded-[100px]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-bold text-text text-sm md:text-base tracking-[0] leading-4 whitespace-nowrap">
                    専門コンサルタント
                  </div>
                </div>

                <div className="flex w-full md:w-44 items-center justify-center gap-2.5 px-4 py-2.5 relative bg-white rounded-[100px]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-bold text-text text-sm md:text-base tracking-[0] leading-4 whitespace-nowrap">
                    高い採用成功率
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

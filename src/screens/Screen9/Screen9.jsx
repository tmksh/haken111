import React from "react";
import { Btn } from "../../components/Btn";
import { Component5755 } from "../../components/Component5755";
import { Title } from "../../components/Title";
import { Calendarblank2 } from "../../icons/Calendarblank2";
import { Caretright39 } from "../../icons/Caretright39";
import { Clock3 } from "../../icons/Clock3";
import { Currencyjpy2 } from "../../icons/Currencyjpy2";
import { Mappin1 } from "../../icons/Mappin1";
import { Footer5 } from "./sections/Footer5";
import { Frame11 } from "./sections/Frame11";
import { Header6 } from "./sections/Header6";

export const Screen9 = () => {
  return (
    <div
      className="bg-grey1-bg w-full relative flex flex-col md:block"
      data-model-id="322:4639"
    >
      <Header6 />
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-0 relative flex flex-col md:block">
        <div className="flex flex-col w-full max-w-[302px] items-start gap-4 md:gap-8 relative md:absolute top-0 md:top-[377px] left-0 md:left-auto right-0 md:right-[40px] px-0 order-2 md:order-1 mx-auto md:mx-0">
        <div className="flex flex-col items-start gap-4 md:gap-6 p-4 md:p-6 relative self-stretch w-full flex-[0_0_auto] bg-white rounded-[14px] overflow-hidden">
          <Title
            className="!flex-[0_0_auto] !left-[unset] !top-[unset]"
            prop="基本情報"
          />
          <Component5755
            className="!self-stretch !flex-[0_0_auto] !left-[unset] !w-full !top-[unset]"
            hasDiv2={false}
            icon={
              <Currencyjpy2
                className="!relative !w-[18px] !h-[18px] !aspect-[1]"
                color="#222222"
              />
            }
            prop="給与"
            prop1="年収 600万円～900万円"
            prop2="※経験・スキルに応じて決定"
          />
          <Component5755
            className="!self-stretch !flex-[0_0_auto] !left-[unset] !w-full !top-[unset]"
            hasDiv2={false}
            icon={
              <Mappin1
                className="!relative !w-[18px] !h-[18px] !aspect-[1]"
                color="#222222"
              />
            }
            prop="勤務地"
            prop1="東京都中央区銀座1-1-1"
            prop2="銀座駅徒歩3分"
          />
          <Component5755
            className="!self-stretch !flex-[0_0_auto] !left-[unset] !w-full !top-[unset]"
            hasDiv2={false}
            icon={
              <Clock3
                className="!w-[18px] !h-[18px] !relative !aspect-[1]"
                color="#222222"
              />
            }
            prop="勤務時間"
            prop1="9:00～18:00"
            prop2="フレックスタイム制"
          />
          <Component5755
            className="!self-stretch !flex-[0_0_auto] !left-[unset] !w-full !top-[unset]"
            hasDiv2={false}
            icon={
              <Calendarblank2
                className="!relative !w-[18px] !h-[18px] !aspect-[1]"
                color="#222222"
              />
            }
            prop="休日・休暇"
            prop1="完全週休2日制（土日）"
            prop2="祝日、年末年始、夏季休暇"
          />
        </div>
        <div className="flex flex-col items-start gap-4 md:gap-6 p-4 md:p-6 relative self-stretch w-full flex-[0_0_auto] bg-white rounded-[14px] overflow-hidden">
          <Title
            className="!flex-[0_0_auto] !left-[unset] !top-[unset]"
            prop="この求人に応募する"
          />
          <div className="flex h-[44px] md:h-[50px] items-center justify-center gap-2.5 p-2 relative self-stretch w-full bg-grey1-bg rounded-lg">
            <div className="relative flex-1 [font-family:'Noto_Sans_JP',Helvetica] font-normal text-text text-xs md:text-sm tracking-[0] leading-[14px]">
              求人番号: 6001081042
            </div>
          </div>
          <Btn
            text2="応募する"
            className="!left-[unset] !w-full md:!w-[254px] !top-[unset]"
            iconLeft="off"
            iconRight="on"
            state="default"
            type="fill"
          />
          <div className="bg-white border border-solid border-blue flex w-full md:w-[254px] h-[44px] md:h-[50px] items-center gap-1 p-3 md:p-3.5 relative rounded-lg">
            <div className="flex-1 [font-family:'Noto_Sans_JP',Helvetica] font-bold text-blue text-sm md:text-base text-center leading-4 relative tracking-[0]">
              エージェントに相談
            </div>
            <Caretright39
              className="!relative !w-4 !h-4 !aspect-[1]"
              color="#11A5B1"
            />
          </div>
          <Component5755
            className="!self-stretch !flex-[0_0_auto] !left-[unset] !w-full !top-[unset]"
            divClassName="!mt-[-1.00px]"
            prop="応募後の流れ"
            prop1="1. 書類選考（3営業日以内）"
            prop2="2. 一次面接（Web面接可"
            prop3="3. 最終面接・条件面談"
            visible={false}
          />
        </div>
        <div className="flex flex-col items-start gap-4 md:gap-6 p-4 md:p-6 relative self-stretch w-full flex-[0_0_auto] bg-white rounded-[14px] overflow-hidden">
          <Title
            className="!flex-[0_0_auto] !left-[unset] !top-[unset]"
            prop="会社情報"
          />
          <Component5755
            className="!self-stretch !flex-[0_0_auto] !left-[unset] !w-full !top-[unset]"
            divClassName="!mt-[-1.00px] !text-text-2 !text-sm !font-normal !leading-[14px]"
            divClassName1="!text-text"
            divClassNameOverride="!text-text"
            prop="会社名"
            prop1="株式会社派遣市場"
            prop2="設立"
            prop3="2010年4月"
            visible={false}
          />
        </div>
        </div>
        <Frame11 />
        <div className="w-full md:h-[calc(162px+5574px+80px)]"></div>
        <Footer5 />
      </div>
    </div>
  );
};
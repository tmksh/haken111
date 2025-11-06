import React from "react";
import { Default } from "../../../../components/Default";
import { InputDefault } from "../../../../components/InputDefault";
import { SectionHeader } from "../../../../components/SectionHeader";
import { SelectedTag } from "../../../../components/SelectedTag";

export const JobSearchEnhanced = () => {
  return (
    <div className="flex flex-col w-full max-w-[1324px] h-auto items-start gap-6 md:gap-10 p-4 md:p-10 relative bg-grey1-bg">
      <SectionHeader
        className="!self-stretch !h-auto md:!h-[58.73px] !left-[unset] !w-full !top-[unset]"
        h1="お仕事を見つけよう"
        prop="希望条件を選択して、あなたにぴったりの求人を見つけましょう"
      />
      <div className="flex flex-col items-start gap-4 md:gap-[22.09px] p-4 md:p-[29.46px] relative self-stretch w-full flex-[0_0_auto] mb-[-0.83px] bg-white rounded-[14px] border-[0.92px] border-solid border-grey-3">
        <div className="flex-col items-start gap-3 md:gap-[14.73px] flex relative self-stretch w-full flex-[0_0_auto]">
          <div className="self-stretch [font-family:'Noto_Sans_JP',Helvetica] font-bold text-text text-sm md:text-base leading-4 relative tracking-[0]">
            クイック検索
          </div>

          <div className="flex-col md:flex-row items-center gap-2 md:gap-[11.05px] flex relative self-stretch w-full flex-[0_0_auto]">
            <InputDefault
              className="!left-[unset] !flex-1 !w-full md:!w-[unset] !top-[unset]"
              prop="職種を選択"
            />
            <InputDefault
              className="!left-[unset] !flex-1 !w-full md:!w-[unset] !top-[unset]"
              prop="勤務地を選択"
            />
            <Default
              className="!left-[unset] !flex-1 !w-full md:!w-[unset] !top-[unset]"
              to="/u27714u20154u35443u32048"
            />
          </div>
        </div>

        <div className="flex flex-col items-start gap-3 md:gap-[14.73px] relative self-stretch w-full flex-[0_0_auto]">
          <div className="self-stretch [font-family:'Noto_Sans_JP',Helvetica] font-bold text-text text-sm md:text-base leading-4 relative tracking-[0]">
            詳細条件で絞り込み
          </div>

          <div className="flex flex-wrap items-center gap-[7.36px_7.36px] relative self-stretch w-full flex-[0_0_auto]">
            <SelectedTag
              className="!h-[33.14px] !flex-[0_0_auto] !left-[unset] !top-[unset]"
              iconRight="off"
              prop="年収600万円以上"
              state="default"
              type="big-grey-big"
            />
            <SelectedTag
              className="!h-[33.14px] !flex-[0_0_auto] !left-[unset] !top-[unset]"
              iconRight="off"
              prop="フォークリフトスタッフ"
              state="default"
              type="big-grey-big"
            />
            <SelectedTag
              className="!h-[33.14px] !flex-[0_0_auto] !left-[unset] !top-[unset]"
              iconRight="off"
              prop="上場企業"
              state="default"
              type="big-grey-big"
            />
            <SelectedTag
              className="!h-[33.14px] !flex-[0_0_auto] !left-[unset] !top-[unset]"
              iconRight="off"
              prop="フレックスタイム"
              state="default"
              type="big-grey-big"
            />
            <SelectedTag
              className="!h-[33.14px] !flex-[0_0_auto] !left-[unset] !top-[unset]"
              iconRight="off"
              prop="残業月20時間以下"
              state="default"
              type="big-grey-big"
            />
            <SelectedTag
              className="!h-[33.14px] !flex-[0_0_auto] !left-[unset] !top-[unset]"
              iconRight="off"
              prop="未経験OK"
              state="default"
              type="big-grey-big"
            />
            <SelectedTag
              className="!h-[33.14px] !flex-[0_0_auto] !left-[unset] !top-[unset]"
              iconRight="off"
              prop="実務経験3年以上"
              state="default"
              type="big-grey-big"
            />
            <SelectedTag
              className="!h-[33.14px] !flex-[0_0_auto] !left-[unset] !top-[unset]"
              iconRight="off"
              prop="リモートワーク可"
              state="default"
              type="big-grey-big"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import { ArticleCard } from "../../../../components/ArticleCard";
import { SelectedTag } from "../../../../components/SelectedTag";
import { TitleWrapper } from "../../../../components/TitleWrapper";

export const Frame8 = () => {
  return (
    <div className="flex flex-col w-[1019px] h-[2089px] items-start gap-10 absolute top-[516px] left-10">
      <div className="flex flex-col items-start gap-[39px] p-6 relative self-stretch w-full flex-[0_0_auto] bg-white">
        <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
            <TitleWrapper
              className="!flex-[0_0_auto] !left-[unset] !top-[unset]"
              prop="カテゴリで絞り込み"
            />
            <div className="relative w-fit [font-family:'Noto_Sans_JP',Helvetica] font-normal text-text-2 text-sm tracking-[0] leading-[14px] whitespace-nowrap">
              全48記事
            </div>
          </div>

          <div className="inline-flex items-center gap-4 relative flex-[0_0_auto]">
            <div className="h-[33.14px] px-4 py-2 bg-blue inline-flex items-center justify-center relative flex-[0_0_auto] rounded-2xl">
              <div className="w-fit [font-family:'Inter',Helvetica] font-normal text-white text-[13px] leading-[13px] whitespace-nowrap relative tracking-[0]">
                すべて
              </div>
            </div>

            <SelectedTag
              className="!h-[33.14px] !flex-[0_0_auto] !left-[unset] !top-[unset]"
              iconRight="off"
              prop="転職ノウハウ"
              state="default"
              type="big-grey-big"
            />
            <SelectedTag
              className="!h-[33.14px] !flex-[0_0_auto] !left-[unset] !top-[unset]"
              iconRight="off"
              prop="年収・給与"
              state="default"
              type="big-grey-big"
            />
            <SelectedTag
              className="!h-[33.14px] !flex-[0_0_auto] !left-[unset] !top-[unset]"
              iconRight="off"
              prop="業界動向"
              state="default"
              type="big-grey-big"
            />
            <SelectedTag
              className="!h-[33.14px] !flex-[0_0_auto] !left-[unset] !top-[unset]"
              iconRight="off"
              prop="資格・スキル"
              state="default"
              type="big-grey-big"
            />
            <SelectedTag
              className="!h-[33.14px] !flex-[0_0_auto] !left-[unset] !top-[unset]"
              iconRight="off"
              prop="面接対策"
              state="default"
              type="big-grey-big"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 grid-rows-4 h-[1920px] gap-[40px_73px] absolute top-[169px] left-0 w-[1019px]">
        <ArticleCard
          className="!h-full !row-[1_/_2] !left-[unset] !col-[1_/_2] !top-[unset]"
          prop="2025.01.12"
          prop1="税理士転職の面接で必ず聞かれる質問TOP10と回答例"
          prop2="面接官が重視するポイントと、税理士業界特有の質問への効果的な回答方法を具体例とともに紹介。転職成功者の実際の回答例も掲載しています。"
          prop3="2,847"
          to="/u12467u12521u12512u35352u20107u35443u32048"
        />
        <ArticleCard
          className="!h-full !row-[1_/_2] !left-[unset] !col-[2_/_3] !top-[unset]"
          prop="2025.01.12"
          prop1="税理士転職の面接で必ず聞かれる質問TOP10と回答例"
          prop2="面接官が重視するポイントと、税理士業界特有の質問への効果的な回答方法を具体例とともに紹介。転職成功者の実際の回答例も掲載しています。"
          prop3="2,847"
        />
        <ArticleCard
          className="!h-full !row-[2_/_3] !left-[unset] !col-[1_/_2] !top-[unset]"
          prop="2025.01.12"
          prop1="税理士転職の面接で必ず聞かれる質問TOP10と回答例"
          prop2="面接官が重視するポイントと、税理士業界特有の質問への効果的な回答方法を具体例とともに紹介。転職成功者の実際の回答例も掲載しています。"
          prop3="2,847"
        />
        <ArticleCard
          className="!h-full !row-[2_/_3] !left-[unset] !col-[2_/_3] !top-[unset]"
          prop="2025.01.12"
          prop1="税理士転職の面接で必ず聞かれる質問TOP10と回答例"
          prop2="面接官が重視するポイントと、税理士業界特有の質問への効果的な回答方法を具体例とともに紹介。転職成功者の実際の回答例も掲載しています。"
          prop3="2,847"
        />
        <ArticleCard
          className="!h-full !row-[3_/_4] !left-[unset] !col-[1_/_2] !top-[unset]"
          prop="2025.01.12"
          prop1="税理士転職の面接で必ず聞かれる質問TOP10と回答例"
          prop2="面接官が重視するポイントと、税理士業界特有の質問への効果的な回答方法を具体例とともに紹介。転職成功者の実際の回答例も掲載しています。"
          prop3="2,847"
        />
        <ArticleCard
          className="!h-full !row-[3_/_4] !left-[unset] !col-[2_/_3] !top-[unset]"
          prop="2025.01.12"
          prop1="税理士転職の面接で必ず聞かれる質問TOP10と回答例"
          prop2="面接官が重視するポイントと、税理士業界特有の質問への効果的な回答方法を具体例とともに紹介。転職成功者の実際の回答例も掲載しています。"
          prop3="2,847"
        />
        <ArticleCard
          className="!h-full !row-[4_/_5] !left-[unset] !col-[1_/_2] !top-[unset]"
          prop="2025.01.12"
          prop1="税理士転職の面接で必ず聞かれる質問TOP10と回答例"
          prop2="面接官が重視するポイントと、税理士業界特有の質問への効果的な回答方法を具体例とともに紹介。転職成功者の実際の回答例も掲載しています。"
          prop3="2,847"
        />
        <ArticleCard
          className="!h-full !row-[4_/_5] !left-[unset] !col-[2_/_3] !top-[unset]"
          prop="2025.01.12"
          prop1="税理士転職の面接で必ず聞かれる質問TOP10と回答例"
          prop2="面接官が重視するポイントと、税理士業界特有の質問への効果的な回答方法を具体例とともに紹介。転職成功者の実際の回答例も掲載しています。"
          prop3="2,847"
        />
      </div>
    </div>
  );
};

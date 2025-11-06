import React from "react";
import { ArticleCard } from "../../../../components/ArticleCard";
import { SelectedTag } from "../../../../components/SelectedTag";
import { TitleWrapper } from "../../../../components/TitleWrapper";

export const Frame8 = () => {
  return (
    <div className="flex flex-col w-full md:w-[1019px] h-auto md:h-[2089px] items-start gap-6 md:gap-10 relative md:absolute md:top-[516px] md:left-10 order-1 md:order-1">
      <div className="flex flex-col items-start gap-6 md:gap-[39px] p-4 md:p-6 relative self-stretch w-full flex-[0_0_auto] bg-white rounded-[14px] md:rounded-none">
        <div className="flex flex-col items-start gap-4 md:gap-6 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
            <TitleWrapper
              className="!flex-[0_0_auto] !left-[unset] !top-[unset]"
              prop="カテゴリで絞り込み"
            />
            <div className="relative w-fit [font-family:'Noto_Sans_JP',Helvetica] font-normal text-text-2 text-xs md:text-sm tracking-[0] leading-[12px] md:leading-[14px] whitespace-nowrap">
              全48記事
            </div>
          </div>

          <div className="flex overflow-x-auto md:inline-flex items-center gap-3 md:gap-4 relative flex-[0_0_auto] w-full md:w-auto snap-x snap-mandatory scrollbar-hide px-4 md:px-0">
            <div className="h-[33.14px] px-4 py-2 bg-blue inline-flex items-center justify-center relative flex-[0_0_auto] rounded-2xl flex-shrink-0 snap-start">
              <div className="w-fit [font-family:'Inter',Helvetica] font-normal text-white text-[13px] leading-[13px] whitespace-nowrap relative tracking-[0]">
                すべて
              </div>
            </div>

            <SelectedTag
              className="!h-[33.14px] !flex-[0_0_auto] !left-[unset] !top-[unset] !flex-shrink-0 !snap-start"
              iconRight="off"
              prop="転職ノウハウ"
              state="default"
              type="big-grey-big"
            />
            <SelectedTag
              className="!h-[33.14px] !flex-[0_0_auto] !left-[unset] !top-[unset] !flex-shrink-0 !snap-start"
              iconRight="off"
              prop="年収・給与"
              state="default"
              type="big-grey-big"
            />
            <SelectedTag
              className="!h-[33.14px] !flex-[0_0_auto] !left-[unset] !top-[unset] !flex-shrink-0 !snap-start"
              iconRight="off"
              prop="業界動向"
              state="default"
              type="big-grey-big"
            />
            <SelectedTag
              className="!h-[33.14px] !flex-[0_0_auto] !left-[unset] !top-[unset] !flex-shrink-0 !snap-start"
              iconRight="off"
              prop="資格・スキル"
              state="default"
              type="big-grey-big"
            />
            <SelectedTag
              className="!h-[33.14px] !flex-[0_0_auto] !left-[unset] !top-[unset] !flex-shrink-0 !snap-start"
              iconRight="off"
              prop="面接対策"
              state="default"
              type="big-grey-big"
            />
          </div>
        </div>
      </div>

      {/* SP版: 1列8行、スマホに適したサイズ */}
      <div className="flex flex-col md:hidden gap-4 relative w-full mt-6">
        <ArticleCard
          className="!w-full !h-auto !left-[unset] !top-[unset] !relative"
          prop="2025.01.12"
          prop1="税理士転職の面接で必ず聞かれる質問TOP10と回答例"
          prop2="面接官が重視するポイントと、税理士業界特有の質問への効果的な回答方法を具体例とともに紹介。転職成功者の実際の回答例も掲載しています。"
          prop3="2,847"
          to="/u12467u12521u12512u35352u20107u35443u32048"
        />
        <ArticleCard
          className="!w-full !h-auto !left-[unset] !top-[unset] !relative"
          prop="2025.01.12"
          prop1="税理士転職の面接で必ず聞かれる質問TOP10と回答例"
          prop2="面接官が重視するポイントと、税理士業界特有の質問への効果的な回答方法を具体例とともに紹介。転職成功者の実際の回答例も掲載しています。"
          prop3="2,847"
        />
        <ArticleCard
          className="!w-full !h-auto !left-[unset] !top-[unset] !relative"
          prop="2025.01.12"
          prop1="税理士転職の面接で必ず聞かれる質問TOP10と回答例"
          prop2="面接官が重視するポイントと、税理士業界特有の質問への効果的な回答方法を具体例とともに紹介。転職成功者の実際の回答例も掲載しています。"
          prop3="2,847"
        />
        <ArticleCard
          className="!w-full !h-auto !left-[unset] !top-[unset] !relative"
          prop="2025.01.12"
          prop1="税理士転職の面接で必ず聞かれる質問TOP10と回答例"
          prop2="面接官が重視するポイントと、税理士業界特有の質問への効果的な回答方法を具体例とともに紹介。転職成功者の実際の回答例も掲載しています。"
          prop3="2,847"
        />
        <ArticleCard
          className="!w-full !h-auto !left-[unset] !top-[unset] !relative"
          prop="2025.01.12"
          prop1="税理士転職の面接で必ず聞かれる質問TOP10と回答例"
          prop2="面接官が重視するポイントと、税理士業界特有の質問への効果的な回答方法を具体例とともに紹介。転職成功者の実際の回答例も掲載しています。"
          prop3="2,847"
        />
        <ArticleCard
          className="!w-full !h-auto !left-[unset] !top-[unset] !relative"
          prop="2025.01.12"
          prop1="税理士転職の面接で必ず聞かれる質問TOP10と回答例"
          prop2="面接官が重視するポイントと、税理士業界特有の質問への効果的な回答方法を具体例とともに紹介。転職成功者の実際の回答例も掲載しています。"
          prop3="2,847"
        />
        <ArticleCard
          className="!w-full !h-auto !left-[unset] !top-[unset] !relative"
          prop="2025.01.12"
          prop1="税理士転職の面接で必ず聞かれる質問TOP10と回答例"
          prop2="面接官が重視するポイントと、税理士業界特有の質問への効果的な回答方法を具体例とともに紹介。転職成功者の実際の回答例も掲載しています。"
          prop3="2,847"
        />
        <ArticleCard
          className="!w-full !h-auto !left-[unset] !top-[unset] !relative"
          prop="2025.01.12"
          prop1="税理士転職の面接で必ず聞かれる質問TOP10と回答例"
          prop2="面接官が重視するポイントと、税理士業界特有の質問への効果的な回答方法を具体例とともに紹介。転職成功者の実際の回答例も掲載しています。"
          prop3="2,847"
        />
      </div>

      {/* PC版: 元のコードを完全に復元 */}
      <div className="hidden md:grid grid-cols-2 grid-rows-4 h-[1920px] gap-[40px_73px] relative w-[1019px]">
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

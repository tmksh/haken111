import React from "react";
import { HTitle } from "../../../../components/HTitle";
import { Eye } from "../../../../icons/Eye";

export const Div = () => {
  return (
    <div className="flex w-full max-w-[1018px] mx-auto px-4 md:px-10 h-auto md:h-[155.14px] relative mt-6 md:mt-8 flex-col items-start gap-4 md:gap-6">
      <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
        <div className="inline-flex h-[28px] md:h-[33.14px] items-center justify-center px-3 md:px-4 py-1.5 md:py-2 relative flex-[0_0_auto] bg-light-blue rounded-2xl">
          <div className="w-fit [font-family:'Inter',Helvetica] font-normal text-blue text-xs md:text-[13px] leading-[13px] whitespace-nowrap relative tracking-[0]">
            転職ノウハウ
          </div>
        </div>

        <div className="inline-flex items-start gap-3 md:gap-6 relative flex-[0_0_auto]">
          <div className="w-fit mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-normal text-text text-xs md:text-sm text-justify leading-[14px] whitespace-nowrap relative tracking-[0]">
            2025年1月15日
          </div>

          <div className="inline-flex items-center justify-end gap-2 relative flex-[0_0_auto]">
            <Eye className="!relative !w-3.5 !h-3.5 md:!w-4 md:!h-4 !aspect-[1]" />
            <div className="w-fit [font-family:'Open_Sans',Helvetica] font-normal text-text-2 text-xs md:text-sm text-justify leading-[14px] whitespace-nowrap relative tracking-[0]">
              2,847
            </div>
          </div>
        </div>
      </div>

      <HTitle
        className="!self-stretch !flex-[0_0_auto] ![justify-content:unset] !flex !left-[unset] !w-full !top-[unset]"
        prop="転職の面接で必ず聞かれる質問TOP10と回答例"
      />
      <div className="self-stretch [font-family:'Noto_Sans_JP',Helvetica] font-normal text-text text-base md:text-lg text-justify leading-[22px] md:leading-[25.2px] relative tracking-[0]">
        面接官が重視するポイントと、税理士業界特有の質問への効果的な回答方法を具体例とともに紹介します。転職成功者の実際の回答例も掲載しています。
      </div>
    </div>
  );
};

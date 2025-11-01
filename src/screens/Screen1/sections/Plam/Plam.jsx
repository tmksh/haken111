import React from "react";
import { HeaderSection } from "../../../../components/HeaderSection";
import { ListTtile } from "../../../../components/ListTtile";
import { PeiceWhite } from "../../../../components/PeiceWhite";
import { PriceGreen } from "../../../../components/PriceGreen";

export const Plam = () => {
  return (
    <div className="flex flex-col w-[1018px] items-center gap-14 relative flex-[0_0_auto]">
      <HeaderSection
        className="!flex-[0_0_auto] !left-[unset] !top-[unset]"
        divClassName="!text-white"
        divClassNameOverride="![align-self:unset] !whitespace-nowrap !w-fit"
        prop="リスク＆デメリットゼロ！"
        prop1="安心の料金プラン・返金制度"
      />
      <div className="flex items-end relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col w-[220px] items-start relative">
          <ListTtile
            className="!self-stretch !border-[unset] ![border-top-style:unset] !left-[unset] !border-t-[unset] !w-full !top-[unset]"
            prop="料金形態・費用"
          />
          <ListTtile
            className="!self-stretch !left-[unset] !w-full !top-[unset]"
            divClassName="!mr-[unset] !ml-[unset]"
            prop="返金制度"
          />
          <ListTtile
            className="!self-stretch !left-[unset] !w-full !top-[unset]"
            divClassName="!mr-[-3.00px] !ml-[-3.00px]"
            prop="応募者の傾向"
          />
          <ListTtile
            className="!self-stretch !left-[unset] !w-full !top-[unset]"
            divClassName="!mr-[-43.00px] !ml-[-43.00px]"
            prop="キャリアアドバイザー"
          />
          <ListTtile
            className="!self-stretch !left-[unset] !w-full !top-[unset]"
            divClassName="!mr-[-23.00px] !ml-[-23.00px]"
            prop="面接→採用決定率"
          />
        </div>

        <div className="flex flex-col w-[266px] items-start relative">
          <div className="flex h-[72px] items-center justify-center gap-2.5 px-[76px] py-6 relative self-stretch w-full rounded-[14px_14px_0px_0px] bg-[linear-gradient(90deg,rgba(137,185,41,1)_0%,rgba(87,195,132,1)_50%,rgba(17,165,177,1)_100%)]">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-bold text-white text-2xl text-center tracking-[0] leading-6 whitespace-nowrap">
              派遣市場
            </div>
          </div>

          <div className="h-[98px] justify-center gap-2.5 px-[35px] py-6 bg-light-blue border-t [border-top-style:solid] border-l [border-left-style:solid] border-grey-3 flex items-center relative self-stretch w-full">
            <p className="relative w-fit [font-family:'Noto_Sans_JP',Helvetica] font-normal text-text text-lg text-center tracking-[0] leading-[19.8px]">
              <span className="[font-family:'Noto_Sans_JP',Helvetica] font-normal text-[#222222] text-lg tracking-[0] leading-[19.8px]">
                完全成果報酬型
                <br />
                理論年収の
              </span>

              <span className="font-bold text-2xl leading-[26.4px]">10~15</span>

              <span className="font-bold">％</span>
            </p>
          </div>

          <PriceGreen
            className="!self-stretch !left-[unset] !w-full !top-[unset]"
            text={
              <>
                1ヶ月以内の退職：50%返金
                <br />
                2ヶ月以内の退職30%返金
              </>
            }
          />
          <PriceGreen
            className="!self-stretch !left-[unset] !w-full !top-[unset]"
            elementClassName="!mr-[unset] !ml-[unset]"
            text={
              <>
                業界未経験者が多い
                <br />
                業界への熱意がある
              </>
            }
          />
          <PriceGreen
            className="!self-stretch !left-[unset] !w-full !top-[unset]"
            elementClassName="!mr-[unset] !ml-[unset]"
            text={
              <>
                業界経験者が
                <br />
                目利き・サポート
              </>
            }
          />
          <div className="h-[98px] justify-center gap-2.5 px-[35px] py-6 bg-light-blue border-t [border-top-style:solid] border-l [border-left-style:solid] border-grey-3 flex items-center relative self-stretch w-full">
            <p className="text-2xl leading-[33.6px] whitespace-nowrap relative w-fit [font-family:'Noto_Sans_JP',Helvetica] font-normal text-text text-center tracking-[0]">
              <span className="font-bold">96</span>

              <span className="font-bold text-lg leading-[25.2px]">％</span>

              <span className="text-lg leading-[25.2px]">程度</span>
            </p>
          </div>
        </div>

        <div className="flex flex-col w-[266px] items-start relative">
          <div className="flex h-[72px] items-center justify-center gap-2.5 px-10 py-6 relative self-stretch w-full bg-grey-2 rounded-[14px_14px_0px_0px] border-l [border-left-style:solid] border-white">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-bold text-text text-2xl text-center tracking-[0] leading-6 whitespace-nowrap">
              他社・大手媒体
            </div>
          </div>

          <PeiceWhite className="!self-stretch !left-[unset] !w-full !top-[unset]" />
          <div className="flex h-[98px] items-center justify-center gap-2.5 px-[35px] py-6 relative self-stretch w-full bg-white border-t [border-top-style:solid] border-l [border-left-style:solid] border-grey-3">
            <p className="mt-[-9.00px] mb-[-7.00px] relative w-fit [font-family:'Noto_Sans_JP',Helvetica] font-normal text-text text-lg text-center tracking-[0] leading-[25.2px]">
              <span className="font-black">
                ◯<br />
              </span>

              <span className="[font-family:'Noto_Sans_JP',Helvetica] font-normal text-[#222222] text-lg tracking-[0] leading-[25.2px]">
                あり
                <br />
              </span>

              <span className="text-xs leading-[16.8px]">※媒体による</span>
            </p>
          </div>

          <PeiceWhite
            className="!self-stretch !left-[unset] !w-full !top-[unset]"
            text={
              <>
                未経験者
                <br />
                適当応募が多い
              </>
            }
          />
          <PeiceWhite
            className="!self-stretch !left-[unset] !w-full !top-[unset]"
            elementClassName="!mt-[unset] !whitespace-nowrap"
            text="業界に詳しくない"
          />
          <PeiceWhite
            className="!self-stretch !left-[unset] !w-full !top-[unset]"
            elementClassName="!mt-[unset] !whitespace-nowrap"
            text="10%程度"
          />
        </div>

        <div className="flex flex-col w-[266px] items-start relative">
          <div className="flex h-[72px] items-center justify-center gap-2.5 px-[29px] py-6 relative self-stretch w-full bg-grey-2 rounded-[14px_14px_0px_0px] border-l [border-left-style:solid] border-white">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-bold text-text text-2xl text-center tracking-[0] leading-6 whitespace-nowrap">
              求人検索エンジン
            </div>
          </div>

          <PeiceWhite
            className="!self-stretch !left-[unset] !w-full !top-[unset]"
            elementClassName="!mt-[unset] !whitespace-nowrap"
            text="完全成果報酬型"
          />
          <PeiceWhite
            className="!self-stretch !left-[unset] !w-full !top-[unset]"
            text={
              <>
                ×<br />
                なし
              </>
            }
          />
          <PeiceWhite
            className="!self-stretch !left-[unset] !w-full !top-[unset]"
            text={
              <>
                未経験者
                <br />
                適当応募がとても多い
              </>
            }
          />
          <PeiceWhite
            className="!self-stretch !left-[unset] !w-full !top-[unset]"
            text={
              <>
                ×<br />
                自社の人事が全て対応
              </>
            }
          />
          <PeiceWhite
            className="!self-stretch !left-[unset] !w-full !top-[unset]"
            elementClassName="!mt-[unset] !whitespace-nowrap"
            text="10%未満"
          />
        </div>
      </div>
    </div>
  );
};

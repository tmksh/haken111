import React from "react";
import { FaqIte } from "../../../../components/FaqIte";
import { SectionHeader } from "../../../../components/SectionHeader";

export const Faq = () => {
  return (
    <div className="w-full max-w-[1324px] items-center gap-6 md:gap-10 p-4 md:p-10 flex-[0_0_auto] bg-grey1-bg flex flex-col relative">
      <SectionHeader
        className="!self-stretch !left-[unset] !w-full !top-[unset]"
        h1="よくある質問"
        prop="転職に関する疑問にお答えします"
      />
      <div className="flex flex-col w-full max-w-[797px] items-start gap-6 relative flex-[0_0_auto]">
        <FaqIte
          className="!self-stretch !left-[unset] !w-full !top-[unset]"
          prop="サービスの利用料金はかかりますか？"
          prop1="派遣市場のサービスは完全無料でご利用いただけます。求人紹介、キャリア相談、面接対策など、すべてのサービスに料金は一切かかりません。"
        />
        <FaqIte
          className="!self-stretch !left-[unset] !w-full !top-[unset]"
          prop="未経験からXXX業界への転職は可能ですか？"
          prop1="はい、可能です。未経験者向けの研修制度が充実した企業や、ポテンシャル重視の求人も多数ご用意しています。専任アドバイザーがあなたのスキルレベルに合った求人をご紹介します。"
        />
        <FaqIte
          className="!self-stretch !left-[unset] !w-full !top-[unset]"
          prop="地方在住でも利用できますか？"
          prop1={
            <>
              はい、全国対応しています。
              <br />
              オンラインでのキャリア相談も実施しています。お気軽にご相談ください。
            </>
          }
        />
        <FaqIte
          className="!self-stretch !left-[unset] !w-full !top-[unset]"
          prop="現在の会社に転職活動がバレる心配はありませんか？"
          prop1="個人情報の取り扱いには細心の注意を払っており、ご本人の同意なしに現在の勤務先に情報が漏れることは一切ありません。安心してご利用ください。"
        />
      </div>
    </div>
  );
};

import React from "react";
import { HeaderSection } from "../../../../components/HeaderSection";
import { QAList } from "../../../../components/QAList";

export const DivWrapper = () => {
  return (
    <div className="flex flex-col w-full max-w-[1017px] items-center gap-8 md:gap-14 px-4 md:px-[156px] py-6 md:py-10 relative flex-[0_0_auto] bg-white">
      <HeaderSection
        className="!flex-[0_0_auto] !left-[unset] !top-[unset]"
        divClassName="!text-xl md:!text-[32px]"
        divClassNameOverride="!text-2xl md:!text-5xl"
        prop="FAQ"
        prop1="採用に関するよくあるご質問"
      />
      <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
        <QAList
          a="完全成功報酬制となっており、初期費用・掲載費用は一切かかりません。"
          className="!self-stretch !flex-[0_0_auto] !left-[unset] !w-full !top-[unset]"
          prop={
            <>
              初期費用：0円
              <br />
              掲載費用：0円
              <br />
              成功報酬：理論年収の10〜15%（採用決定時のみ）
            </>
          }
          q="料金形態や掲載料について教えてください。"
        />
        <QAList
          a="完全成功報酬制とな最短3日で掲載開始が可能です。以下の流れで進行いたします。ており、初期費用・掲載費用は一切かかりません。"
          className="!self-stretch !flex-[0_0_auto] !left-[unset] !w-full !top-[unset]"
          divClassName="!mt-[-1.00px]"
          prop={
            <>
              お申し込み・ヒアリング
              <br />
              募集要項・企業情報のご提供
              <br />
              弊社にて企業ページ・求人ページ作成
              <br />
              内容確認・修正対応
              <br />
              掲載開始・求職者へのアプローチ開始
            </>
          }
          q="掲載開始・募集開始までの流れを教えてください。"
        />
        <QAList
          a="税理士業界に特化しているため、質の高い経験者が中心となっています。"
          className="!self-stretch !flex-[0_0_auto] !left-[unset] !w-full !top-[unset]"
          prop={
            <>
              税理士資格保有者：約40%
              <br />
              実務経験3年以上：約85%
              <br />
              法人税申告経験者：約90%
              <br />
              転職理由：キャリアアップ・待遇改善が中心
              <br />
              年齢層：25〜40歳が約70%
            </>
          }
          q="どのような応募者が多いですか？特徴や傾向を教えてください。"
        />
        <QAList
          a="専任コンサルタントが一貫してサポートし、スムーズな採用活動を実現します。"
          className="!self-stretch !flex-[0_0_auto] !left-[unset] !w-full !top-[unset]"
          prop={
            <>
              応募発生・履歴書回収
              <br />
              弊社にて1次スクリーニング実施
              <br />
              候補者情報を貴社へご報告・面接設定
              <br />
              面接日程調整・条件交渉サポート
              <br />
              内定・入社手続きまで一貫サポート
            </>
          }
          q="応募発生から採用までの流れ、やり取りについて教えてください。"
        />
        <QAList
          a="求人数・採用人数に制限はございません。複数ポジションの同時募集も可能です。"
          className="!self-stretch !flex-[0_0_auto] !left-[unset] !w-full !top-[unset]"
          prop={
            <>
              求人掲載数：制限なし（複数職種・複数拠点OK）
              <br />
              採用人数：制限なし（大量採用にも対応）
              <br />
              掲載期間：採用完了まで継続掲載
              <br />
              追加費用：一切なし（何名採用でも成功報酬のみ）
            </>
          }
          q="掲載できる求人数や採用人数に制限はありますか？"
        />
        <QAList
          a="全国どこでも、どのような職種でも対応可能です。柔軟にサポートいたします。"
          className="!self-stretch !flex-[0_0_auto] !left-[unset] !w-full !top-[unset]"
          prop={
            <>
              勤務地：全国47都道府県対応
              <br />
              職種：税理士・会計士・経理・財務・CFOなど幅広く対応
              <br />
              業界：監査法人・税理士法人・一般企業・コンサルティング等
              <br />
              働き方：正社員・契約社員・パート・リモートワーク等
            </>
          }
          q="当てはまる勤務地や職種がない場合も採用可能ですか？"
        />
        <QAList
          a="はい、可能です。タックスジョブ掲載と併せて、各種求人媒体への出稿もサポートいたします。"
          className="!self-stretch !flex-[0_0_auto] !left-[unset] !w-full !top-[unset]"
          divClassName="!mt-[-1.00px]"
          prop={
            <>
              Indeed・求人ボックス・スタンバイ等への自動出稿
              <br />
              Google for Jobs対応
              <br />
              各種SNS・専門サイトでの露出サポート
              <br />
              追加費用なし（すべて基本サービスに含まれます）
            </>
          }
          q="Indeedや求人ボックスなどへの出稿も可能ですか？"
        />
        <QAList
          a="はい、可能です。貴社のご要望に応じて、最適な候補者を優先的にご紹介いたします。"
          className="!self-stretch !flex-[0_0_auto] !left-[unset] !w-full !top-[unset]"
          prop={
            <>
              即戦力となる経験豊富な税理士の優先紹介
              <br />
              特定の専門分野（国際税務・M&amp;A等）経験者の紹介
              <br />
              マネジメント経験者・将来幹部候補の優先紹介
              <br />
              ヘッドハンティングによるスカウトサービス
            </>
          }
          q="優秀な人材を優先してご紹介いただくことは可能でしょうか？"
        />
      </div>
    </div>
  );
};

import React from "react";
import { Link } from "react-router-dom";
import { BenefitList } from "../../../../components/BenefitList";
import { ConsultationCard } from "../../../../components/ConsultationCard";
import { FaqIte } from "../../../../components/FaqIte";
import { Footer6 } from "../../../../components/Footer6";
import { SectionHeader } from "../../../../components/SectionHeader";
import { Step } from "../../../../components/Step";
import { Benefit1 } from "../../../../icons/Benefit1";
import { Benefit2 } from "../../../../icons/Benefit2";
import { Benefit3 } from "../../../../icons/Benefit3";

export const Frame5 = () => {
  return (
    <div className="flex flex-col w-[1440px] items-start absolute top-[624px] left-0">
      <div className="flex flex-col items-center gap-16 relative self-stretch w-full flex-[0_0_auto]">
        <div className="h-[457px] justify-center gap-2.5 px-[415px] py-14 flex flex-col items-center relative self-stretch w-full">
          <div className="absolute top-0 left-0 w-[1440px] h-[457px] bg-blue" />

          <div className="flex flex-col w-[782px] items-center gap-14 relative flex-[0_0_auto] mt-[-11.00px] mb-[-11.00px] ml-[-86.00px] mr-[-86.00px]">
            <div className="gap-4 flex-[0_0_auto] flex flex-col items-center relative self-stretch w-full">
              <div className="relative self-stretch [font-family:'Noto_Sans_JP',Helvetica] font-extrabold text-white text-4xl text-center tracking-[0] leading-[46.8px]">
                XXXXの転職相談サービス
              </div>

              <div className="relative self-stretch [font-family:'Noto_Sans_JP',Helvetica] font-medium text-white text-lg text-center tracking-[0] leading-[28.8px]">
                業界に精通したキャリアアドバイザーがあなたの転職を完全サポート
              </div>
            </div>

            <div className="inline-flex items-center gap-[38.01px] relative flex-[0_0_auto] ml-[-0.48px] mr-[-0.48px]">
              <div className="relative w-[232.42px] h-[113px]">
                <div className="flex flex-col w-[166px] h-[94px] items-center gap-[13.32px] absolute top-[19px] left-[33px]">
                  <div className="inline-flex items-baseline justify-center relative flex-[0_0_auto]">
                    <div className="relative w-fit mt-[-1.67px] [font-family:'Open_Sans',Helvetica] font-bold text-white text-[53px] text-center tracking-[0] leading-[53px] whitespace-nowrap">
                      2,847
                    </div>

                    <div className="relative w-fit [font-family:'Noto_Sans_JP',Helvetica] font-bold text-white text-[29px] text-center tracking-[0] leading-[29px] whitespace-nowrap">
                      名
                    </div>
                  </div>

                  <div className="relative w-fit [font-family:'Noto_Sans_JP',Helvetica] font-medium text-white text-[26px] text-center tracking-[0] leading-[26px] whitespace-nowrap">
                    相談実績
                  </div>
                </div>

                <img
                  className="w-[234px] absolute -top-px -left-px h-[105px]"
                  alt="Vector"
                  src="/img/vector-7-4.svg"
                />
              </div>

              <div className="relative w-[232.42px] h-[113px]">
                <div className="flex flex-col w-[135px] h-[94px] items-center gap-[13.32px] absolute top-[19px] left-[49px]">
                  <div className="inline-flex items-baseline justify-center relative flex-[0_0_auto]">
                    <div className="relative w-fit mt-[-1.67px] [font-family:'Open_Sans',Helvetica] font-bold text-white text-[53px] text-center tracking-[0] leading-[53px] whitespace-nowrap">
                      94.2
                    </div>

                    <div className="relative w-fit [font-family:'Noto_Sans_JP',Helvetica] font-bold text-white text-[29px] text-center tracking-[0] leading-[29px] whitespace-nowrap">
                      %
                    </div>
                  </div>

                  <div className="relative w-fit [font-family:'Noto_Sans_JP',Helvetica] font-medium text-white text-[26px] text-center tracking-[0] leading-[26px] whitespace-nowrap">
                    転職成功率
                  </div>
                </div>

                <img
                  className="w-[234px] absolute -top-px -left-px h-[105px]"
                  alt="Vector"
                  src="/img/vector-9-6.svg"
                />
              </div>

              <div className="relative w-[242.11px] h-[113px]">
                <div className="flex flex-col w-[209px] h-[94px] items-center gap-[13.32px] absolute top-[19px] left-4">
                  <div className="inline-flex items-baseline justify-center relative flex-[0_0_auto]">
                    <div className="relative w-fit [font-family:'Noto_Sans_JP',Helvetica] font-bold text-white text-[29px] text-center tracking-[0] leading-[29px] whitespace-nowrap">
                      平均
                    </div>

                    <div className="mt-[-1.67px] text-[53px] text-center leading-[53px] relative w-fit [font-family:'Open_Sans',Helvetica] font-bold text-white tracking-[0] whitespace-nowrap">
                      136
                    </div>

                    <div className="relative w-fit [font-family:'Noto_Sans_JP',Helvetica] font-bold text-white text-[29px] text-center tracking-[0] leading-[29px] whitespace-nowrap">
                      万円
                    </div>
                  </div>

                  <div className="relative w-fit [font-family:'Noto_Sans_JP',Helvetica] font-bold text-white text-[26px] text-center tracking-[0] leading-[26px] whitespace-nowrap">
                    年収アップ額
                  </div>
                </div>

                <img
                  className="w-[244px] absolute -top-px -left-px h-[105px]"
                  alt="Vector"
                  src="/img/vector-8-4.svg"
                />
              </div>
            </div>

            <Link to="/u36578u32887u30456u35527u12377u12427">
              <button className="all-[unset] box-border w-[293px] justify-center bg-pink flex h-[50px] items-center gap-1 p-3.5 relative rounded-lg">
                <div className="w-fit [font-family:'Noto_Sans_JP',Helvetica] font-bold text-white text-base text-center leading-4 whitespace-nowrap relative tracking-[0]">
                  無料で転職相談を申し込む
                </div>
              </button>
            </Link>
          </div>
        </div>

        <div className="flex flex-col w-[1360px] h-[435px] items-center gap-10 p-10 relative bg-white">
          <SectionHeader
            className="!h-[58.73px] !left-[unset] !w-[1244px] !top-[unset]"
            h1="転職相談でできること"
            prop="税理士業界に精通したプロのキャリアアドバイザーがサポート"
          />
          <div className="flex items-center gap-[43px] relative self-stretch w-full flex-[0_0_auto] mb-[-0.73px]">
            <BenefitList
              className="!left-[unset] !top-[unset]"
              icon={<Benefit1 className="!relative !w-[123px] !h-[123px]" />}
              prop="求人紹介・マッチング"
              prop1="あなたの経験・スキル・希望条件に合った求人を厳選してご紹介。非公開求人も含めて最適な案件をマッチングします。"
            />
            <BenefitList
              className="!left-[unset] !top-[unset]"
              icon={
                <Benefit2 className="!relative !w-[123px] !h-[123px] !aspect-[1]" />
              }
              prop="履歴書・職務経歴書の添削"
              prop1="税理士業界での書類選考通過率を上げるために、プロの視点から履歴書・職務経歴書を添削・アドバイスします。"
            />
            <BenefitList
              className="!left-[unset] !top-[unset]"
              icon={
                <Benefit3 className="!relative !w-[123px] !h-[123px] !aspect-[1]" />
              }
              prop="面接対策・練習"
              prop1="税理士業界でよく聞かれる質問への回答準備から、面接での立ち振る舞いまで、実践的な面接対策を行います。"
            />
          </div>
        </div>

        <div className="flex flex-col w-[1360px] h-[597px] items-center gap-10 p-10 relative bg-white">
          <img
            className="absolute top-[190px] left-[379px] w-px h-[255px] object-cover"
            alt="Line"
            src="/img/line-6.svg"
          />

          <div className="flex flex-col w-[1244px] h-[58.73px] items-center gap-3.5 relative">
            <div className="self-stretch [font-family:'Noto_Sans_JP',Helvetica] font-extrabold text-text text-3xl text-center leading-[30px] relative tracking-[0]">
              相談の流れ
            </div>

            <p className="self-stretch [font-family:'Noto_Sans_JP',Helvetica] font-normal text-transparent text-sm text-center leading-[14px] relative tracking-[0]">
              <span className="text-[#222222]">簡単</span>

              <span className="text-[#42333e]">3ステップ</span>

              <span className="text-[#222222]">で転職相談をスタート</span>
            </p>
          </div>

          <Step
            className="!flex-[0_0_auto] !left-[unset] !top-[unset]"
            prop="申し込みフォーム入力"
            prop1="お名前、連絡先、現在の状況、転職希望条件などを入力してください。所要時間は約3分です。"
            prop2="01"
          />
          <Step
            className="!flex-[0_0_auto] !left-[unset] !top-[unset]"
            prop="キャリアアドバイザーと面談"
            prop1="ご希望に応じて対面・オンライン・お電話での面談を実施。あなたのキャリアについて詳しくお聞かせください。"
            prop2="02"
          />
          <Step
            className="!mb-[-0.73px] !flex-[0_0_auto] !left-[unset] !top-[unset]"
            prop="求人紹介・転職サポート開始"
            prop1="面談内容を基に最適な求人をご紹介。応募から内定まで、転職活動を全面的にサポートいたします。"
            prop2="03"
          />
        </div>

        <div className="flex flex-col w-[1360px] h-[599px] items-center gap-10 p-10 relative bg-white">
          <SectionHeader
            className="!h-[58.73px] !left-[unset] !w-[1244px] !top-[unset]"
            h1="相談方法をお選びください"
            prop="あなたのご都合に合わせて相談方法を選択できます"
          />
          <div className="inline-flex items-center gap-6 relative flex-[0_0_auto] mb-[-10.73px]">
            <ConsultationCard
              className="!left-[unset] !top-[unset]"
              prop="求人紹介・マッチング"
              prop1="あなたの経験・スキル・希望条件に合った求人を厳選してご紹介。非公開求人も含めて最適な案件をマッチングします。"
            />
            <ConsultationCard
              className="!left-[unset] !top-[unset]"
              consultationOne="phone"
              prop="電話相談"
              prop1="お電話での音声相談。PC環境がない方でも気軽にご相談いただけます。"
            />
            <ConsultationCard
              className="!left-[unset] !top-[unset]"
              consultationOne="line"
              prop="LINE相談"
              prop1="公式LINEによる相談。じっくりお時間をかけてご相談いただけます。"
            />
            <ConsultationCard
              className="!left-[unset] !top-[unset]"
              consultationOne="chat"
              prop="チャット相談"
              prop1="LINEやメールでのやり取り。お忙しい方でも空いた時間にご相談いただけます。"
            />
          </div>
        </div>

        <div className="w-[1360px] items-center gap-10 p-10 flex-[0_0_auto] bg-white flex flex-col relative">
          <SectionHeader
            className="!self-stretch !left-[unset] !w-full !top-[unset]"
            h1="よくある質問"
            prop="転職相談についてのご質問にお答えします"
          />
          <div className="flex flex-col w-[797px] items-start gap-6 relative flex-[0_0_auto]">
            <FaqIte
              className="!self-stretch !left-[unset] !bg-grey1-bg !w-full !top-[unset]"
              prop="Q. 相談は本当に無料ですか？"
              prop1=" はい、転職相談は完全無料です。求人紹介から内定までのサポートも全て無料でご利用いただけます。"
            />
            <FaqIte
              className="!self-stretch !left-[unset] !bg-grey1-bg !w-full !top-[unset]"
              prop="転職を迷っている段階でも相談できますか？"
              prop1="もちろんです。転職すべきかどうかの判断も含めて、キャリアについてお気軽にご相談ください。"
            />
            <FaqIte
              className="!self-stretch !left-[unset] !bg-grey1-bg !w-full !top-[unset]"
              prop="未経験でも税理士業界への転職は可能ですか？"
              prop1="可能です。未経験者歓迎の求人も多数ご用意しており、研修制度が充実した法人をご紹介できます。"
            />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-2.5 px-[415px] py-14 relative self-stretch w-full flex-[0_0_auto] bg-[linear-gradient(90deg,rgba(137,185,41,1)_0%,rgba(87,195,132,1)_50%,rgba(17,165,177,1)_100%)]">
          <img
            className="w-[1440px] h-[334px] absolute top-0 left-0"
            alt="Image"
            src="/img/2.png"
          />

          <img
            className="w-[1440px] h-[334px] absolute top-0 left-0"
            alt="Image"
            src="/img/3.png"
          />

          <div className="flex flex-col w-[782px] items-center gap-14 relative flex-[0_0_auto] ml-[-86.00px] mr-[-86.00px]">
            <div className="gap-4 flex-[0_0_auto] flex flex-col items-center relative self-stretch w-full">
              <div className="relative self-stretch [font-family:'Noto_Sans_JP',Helvetica] font-extrabold text-white text-4xl text-center tracking-[0] leading-9">
                まずは気軽にご相談ください
              </div>

              <div className="relative self-stretch [font-family:'Noto_Sans_JP',Helvetica] font-medium text-white text-lg text-center tracking-[0] leading-[18px]">
                プロのキャリアアドバイザーが全力でサポートします
              </div>
            </div>

            <div className="flex flex-col items-center gap-8 relative self-stretch w-full flex-[0_0_auto]">
              <Link to="/u36578u32887u30456u35527u12377u12427">
                <button className="all-[unset] box-border w-[293px] justify-center bg-pink flex h-[50px] items-center gap-1 p-3.5 relative rounded-lg">
                  <div className="w-fit [font-family:'Noto_Sans_JP',Helvetica] font-bold text-white text-base text-center leading-4 whitespace-nowrap relative tracking-[0]">
                    今すぐ無料相談を申し込む
                  </div>
                </button>
              </Link>

              <div className="relative self-stretch [font-family:'Noto_Sans_JP',Helvetica] font-medium text-white text-sm text-center tracking-[0] leading-[14px]">
                ※ご相談は完全無料です。しつこい営業は一切いたしません。
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer6 className="!self-stretch !h-[60px] !left-[unset] !w-full !top-[unset]" to="/u21033u29992u35215u32004" />
    </div>
  );
};

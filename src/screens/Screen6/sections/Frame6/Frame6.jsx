import React from "react";
import { Link } from "react-router-dom";
import { Checkboxes } from "../../../../components/Checkboxes";
import { Component5755 } from "../../../../components/Component5755";
import { HTitle } from "../../../../components/HTitle";
import { Inputf } from "../../../../components/Inputf";
import { SectionHeader } from "../../../../components/SectionHeader";
import { Title } from "../../../../components/Title";
import { Calendarblank2 } from "../../../../icons/Calendarblank2";
import { Caretdown3 } from "../../../../icons/Caretdown3";
import { Caretright39 } from "../../../../icons/Caretright39";
import { Envelopesimple } from "../../../../icons/Envelopesimple";
import { Mappin1 } from "../../../../icons/Mappin1";
import { Phone1 } from "../../../../icons/Phone1";

export const Frame6 = () => {
  return (
    <div className="flex w-[1440px] h-[1455px] relative mt-8 flex-col items-center gap-10">
      <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
        <div className="absolute top-0 left-0 w-[1440px] h-[269px] bg-blue bg-[url(/img/369863540-5.png)] bg-[100%_100%]" />

        <div className="flex flex-col h-[269px] items-center justify-center gap-10 p-10 relative self-stretch w-full">
          <div className="flex flex-col items-center justify-center gap-[26px] relative self-stretch w-full flex-[0_0_auto]">
            <SectionHeader
              className="!self-stretch !h-[unset] !flex-[0_0_auto] !left-[unset] !w-full !top-[unset]"
              divClassName="!text-white"
              divClassNameOverride="!text-white"
              h1="お問い合わせ"
              prop="ご質問・ご相談などお気軽にお問い合わせください"
            />
          </div>
        </div>
      </div>

      <div className="flex w-[1360px] items-start justify-between relative flex-[0_0_auto]">
        <div className="flex flex-col w-[1018px] items-center gap-10 p-6 relative bg-white rounded-[14px]">
          <HTitle
            className="!self-stretch !flex-[0_0_auto] !flex !left-[unset] !w-full !top-[unset]"
            prop="お問い合わせフォーム"
          />
          <div className="inline-flex flex-col items-start gap-6 relative flex-[0_0_auto]">
            <Inputf
              className="!flex-[0_0_auto] !left-[unset] !top-[unset]"
              inputDefaultInputDefaultClassName="!self-stretch !left-[unset] !w-full !top-[unset]"
              inputDefaultProp="例）山田 太郎"
              inputDefaultVisible={false}
              label5="お名前"
              labelState="required"
              labelType="big"
              labelTypeSmallStateClassName="!flex-[0_0_auto] !left-[unset] !top-[unset]"
            />
            <Inputf
              className="!flex-[0_0_auto] !left-[unset] !top-[unset]"
              inputDefaultInputDefaultClassName="!self-stretch !left-[unset] !w-full !top-[unset]"
              inputDefaultProp="例）yamada@example.com"
              inputDefaultVisible={false}
              label5="メールアドレス"
              labelState="required"
              labelType="big"
              labelTypeSmallStateClassName="!flex-[0_0_auto] !left-[unset] !top-[unset]"
            />
            <Inputf
              className="!flex-[0_0_auto] !left-[unset] !top-[unset]"
              inputDefaultInputDefaultClassName="!self-stretch !left-[unset] !w-full !top-[unset]"
              inputDefaultProp="例）090-1234-5678"
              inputDefaultVisible={false}
              label4="電話番号"
              labelState="default"
              labelType="big"
              labelTypeSmallStateClassName="!left-[unset] !top-[unset]"
            />
            <Inputf
              className="!flex-[0_0_auto] !left-[unset] !top-[unset]"
              inputDefaultInputDefaultClassName="!self-stretch !left-[unset] !w-full !top-[unset]"
              inputDefaultProp="例）株式会社○○○"
              inputDefaultVisible={false}
              label4="会社名・法人名"
              labelState="default"
              labelType="big"
              labelTypeSmallStateClassName="!left-[unset] !top-[unset]"
            />
            <Inputf
              className="!flex-[0_0_auto] !left-[unset] !top-[unset]"
              inputDefaultInputDefaultClassName="!self-stretch !left-[unset] !w-full !top-[unset]"
              inputDefaultProp="例）人事部　課長"
              inputDefaultVisible={false}
              label4="役職・部署"
              labelState="default"
              labelType="big"
              labelTypeSmallStateClassName="!left-[unset] !top-[unset]"
            />
            <Inputf
              className="!flex-[0_0_auto] !left-[unset] !top-[unset]"
              inputDefaultIcon={
                <Caretdown3 className="!relative !w-4 !h-4 !aspect-[1]" />
              }
              inputDefaultInputDefaultClassName="!self-stretch !left-[unset] !w-full !top-[unset]"
              inputDefaultProp="選択してください"
              label5="お問い合わせ種別"
              labelState="required"
              labelType="big"
              labelTypeSmallStateClassName="!flex-[0_0_auto] !left-[unset] !top-[unset]"
            />
            <Inputf
              className="!flex-[0_0_auto] !left-[unset] !top-[unset]"
              inputDefaultDivClassName="!mt-[-0.92px] !leading-[18.2px]"
              inputDefaultInputDefaultClassName="!self-stretch !h-[unset] !flex-[0_0_auto] !left-[unset] !w-full !top-[unset]"
              inputDefaultProp={
                <>
                  お問い合わせ内容を入力してください。
                  <br />
                  <br />
                  例）
                  <br />
                  ・求人掲載の料金について知りたい
                  <br />
                  ・掲載期間や掲載方法について相談したい
                  <br />
                  ・その他ご質問など
                </>
              }
              inputDefaultVisible={false}
              label5="お問い合わせ内容"
              labelState="required"
              labelType="big"
              labelTypeSmallStateClassName="!flex-[0_0_auto] !left-[unset] !top-[unset]"
            />
            <div className="flex w-[612px] items-center gap-1 relative flex-[0_0_auto]">
              <Checkboxes
                className="!h-3.5 !left-[unset] !w-3.5 !top-[unset]"
                one="default"
              />
              <p className="w-fit font-medium text-transparent text-sm tracking-[0.70px] leading-[14px] whitespace-nowrap relative [font-family:'Noto_Sans_JP',Helvetica]">
                <span className="text-[#202020] tracking-[0.10px] underline">
                  プライバシーポリシー
                </span>

                <span className="text-[#222222] tracking-[0.10px]">
                  に同意する
                </span>
              </p>
            </div>

            <div className="w-[612px] [font-family:'Noto_Sans_JP',Helvetica] font-normal text-text-2 text-sm text-justify leading-[18.2px] relative tracking-[0]">
              ※お預かりした個人情報は、お問い合わせの回答およびサービス向上のためにのみ使用いたします。詳細はプライバシーポリシーをご確認ください。
            </div>
          </div>

          <div className="flex w-[612px] items-start gap-6 relative flex-[0_0_auto]">
            <button className="all-[unset] box-border flex-1 grow bg-white border border-solid border-blue flex h-[50px] items-center gap-1 p-3.5 relative rounded-lg">
              <div className="flex-1 font-bold text-blue text-base text-center tracking-[0] leading-4 relative [font-family:'Noto_Sans_JP',Helvetica]">
                キャンセル
              </div>
            </button>

            <button className="all-[unset] box-border flex-1 grow bg-blue flex h-[50px] items-center gap-1 p-3.5 relative rounded-lg">
              <div className="flex-1 font-bold text-white text-base text-center tracking-[0] leading-4 relative [font-family:'Noto_Sans_JP',Helvetica]">
                送信する
              </div>
            </button>
          </div>
        </div>

        <div className="flex flex-col w-[302px] items-start gap-8 relative">
          <div className="flex flex-col items-start gap-6 p-6 relative self-stretch w-full flex-[0_0_auto] bg-white rounded-[14px] overflow-hidden">
            <Title
              className="!flex-[0_0_auto] !left-[unset] !top-[unset]"
              prop="お問い合わせ先"
            />
            <Component5755
              className="!self-stretch !flex-[0_0_auto] !left-[unset] !w-full !top-[unset]"
              divClassNameOverride="!font-bold"
              hasDiv2={false}
              icon={
                <Phone1 className="!relative !w-[18px] !h-[18px] !aspect-[1]" />
              }
              prop="お電話"
              prop1="03-1234-5678"
              prop2="受付時間：平日 9:00-18:00"
            />
            <Component5755
              className="!self-stretch !flex-[0_0_auto] !left-[unset] !w-full !top-[unset]"
              divClassName2="!leading-[16.8px]"
              divClassNameOverride="!font-bold"
              hasDiv2={false}
              icon={
                <Envelopesimple
                  className="!relative !w-[18px] !h-[18px] !aspect-[1]"
                  color="#222222"
                />
              }
              prop="メール"
              prop1="info@taxjob.co.jp"
              prop2="※回答まで1-2営業日いただく場合があります"
            />
            <Component5755
              className="!self-stretch !flex-[0_0_auto] !left-[unset] !w-full !top-[unset]"
              divClassNameOverride="!leading-[18.2px]"
              hasDiv1={false}
              hasDiv2={false}
              icon={
                <Mappin1
                  className="!relative !w-[18px] !h-[18px] !aspect-[1]"
                  color="#222222"
                />
              }
              prop="所在地"
              prop1={
                <>
                  〒100-0001
                  <br />
                  東京都千代田区千代田1-1-1
                  <br />
                  千代田ビル 5階
                </>
              }
            />
            <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
              <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                <Calendarblank2
                  className="!relative !w-[18px] !h-[18px] !aspect-[1]"
                  color="#222222"
                />
                <div className="w-fit font-medium text-text text-base tracking-[0] leading-4 whitespace-nowrap relative [font-family:'Noto_Sans_JP',Helvetica]">
                  営業時間
                </div>
              </div>

              <div className="flex items-start gap-10 relative self-stretch w-full flex-[0_0_auto]">
                <div className="w-fit mt-[-1.00px] font-normal leading-[16.8px] whitespace-nowrap relative [font-family:'Noto_Sans_JP',Helvetica] text-text-2 text-sm tracking-[0]">
                  平日
                </div>

                <div className="w-fit mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-normal text-text-2 text-sm leading-[16.8px] whitespace-nowrap relative tracking-[0]">
                  9:00 - 18:00
                </div>
              </div>

              <div className="flex items-start gap-[26px] relative self-stretch w-full flex-[0_0_auto]">
                <div className="w-fit mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-normal text-text-2 text-sm leading-[16.8px] whitespace-nowrap relative tracking-[0]">
                  土日祝
                </div>

                <div className="w-fit mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-normal text-text-2 text-sm leading-[16.8px] whitespace-nowrap relative tracking-[0]">
                  休業
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start gap-6 p-6 relative self-stretch w-full flex-[0_0_auto] bg-white rounded-[14px] overflow-hidden">
            <Title
              className="!flex-[0_0_auto] !left-[unset] !top-[unset]"
              prop="よくあるお問い合わせ"
            />
            <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                <div className="leading-[14px] relative self-stretch mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-bold text-text text-sm tracking-[0]">
                  Q. 求人掲載の料金はいくらですか？
                </div>

                <div className="flex items-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="relative flex-1 mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-normal text-text-2 text-sm tracking-[0] leading-[16.8px]">
                    A. 掲載プランにより異なります。詳細はお問い合わせください。
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                <div className="leading-[14px] relative self-stretch mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-bold text-text text-sm tracking-[0]">
                  Q. 掲載期間はどのくらいですか？
                </div>

                <div className="flex items-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="relative flex-1 mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-normal text-text-2 text-sm tracking-[0] leading-[16.8px]">
                    A. 基本プランは30日間です。延長も可能です。
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                <div className="leading-[16.8px] relative self-stretch mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-bold text-text text-sm tracking-[0]">
                  Q. 掲載開始までどのくらいかかりますか？
                </div>

                <div className="flex items-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="relative flex-1 mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-normal text-text-2 text-sm tracking-[0] leading-[16.8px]">
                    A. お申し込み完了後、2-3営業日で掲載開始となります。
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-[302px] items-start gap-6 p-6 relative flex-[0_0_auto] bg-blue rounded-[14px] overflow-hidden">
            <Title
              className="!flex-[0_0_auto] !left-[unset] !top-[unset]"
              divClassName="!text-white"
              prop="転職をお考えの方へ"
            />
            <Component5755
              className="!self-stretch !flex-[0_0_auto] !left-[unset] !w-full !top-[unset]"
              divClassName="!mt-[-1.00px] !text-white !text-sm !flex-1 ![white-space:unset] !font-normal !leading-[18.2px] !w-[unset]"
              frameClassName="!self-stretch !flex !w-full"
              hasDiv={false}
              hasDiv1={false}
              hasDiv2={false}
              prop="転職相談も承っております。お気軽にご相談ください。"
              visible={false}
            />
            <Link
              className="w-[254px] bg-white border border-solid border-blue flex h-[50px] items-center gap-1 p-3.5 relative rounded-lg"
              to="/u36578u32887u30456u35527u12504u12442u12540u12471u12441"
            >
              <div className="flex-1 font-bold text-blue text-base text-center tracking-[0] leading-4 relative [font-family:'Noto_Sans_JP',Helvetica]">
                転職相談はこちら
              </div>

              <Caretright39
                className="!relative !w-4 !h-4 !aspect-[1]"
                color="#11A5B1"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

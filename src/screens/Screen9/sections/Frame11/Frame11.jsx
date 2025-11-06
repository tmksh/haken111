import React from "react";
import { BreadcrumbsList } from "../../../../components/BreadcrumbsList";
import { Component5784 } from "../../../../components/Component5784";
import { Frame1000003884 } from "../../../../components/Frame1000003884";
import { HTitle } from "../../../../components/HTitle";
import { List } from "../../../../components/List";
import { SelectedTag } from "../../../../components/SelectedTag";
import { TitleWrapper } from "../../../../components/TitleWrapper";
import { Checkcircle13 } from "../../../../icons/Checkcircle13";
import { Clock3 } from "../../../../icons/Clock3";
import { House1 } from "../../../../icons/House1";
import { Users2 } from "../../../../icons/Users2";

export const Frame11 = () => {
  return (
    <div className="flex flex-col w-full max-w-[1018px] h-auto md:h-[5574px] items-start gap-6 md:gap-8 relative md:absolute top-0 md:top-[162px] left-0 md:left-10 px-4 md:px-0 order-1 md:order-1">
      <BreadcrumbsList
        breadcrumbs2="税理士求人特集"
        breadcrumbsOne="blue"
        breadcrumbsProp="求人一覧"
        className="!flex-[0_0_auto] !left-[unset] !top-[unset]"
        hasDiv={false}
        visible={false}
      />
      <div className="flex flex-col items-start gap-6 md:gap-10 relative self-stretch w-full flex-[0_0_auto] mb-[-0.57px]">
        <div className="flex flex-col w-full md:w-[480px] items-start gap-4 md:gap-6 relative flex-[0_0_auto]">
          <HTitle
            className="!self-stretch !flex-[0_0_auto] !flex !left-[unset] !w-full !top-[unset]"
            prop="税理士法人での税務申告業務（経験者優遇）"
          />
          <div className="self-stretch [font-family:'Noto_Sans_JP',Helvetica] font-normal text-text text-lg md:text-2xl leading-6 relative tracking-[0]">
            株式会社派遣市場
          </div>

          <div className="inline-flex items-center gap-2 md:gap-4 relative flex-[0_0_auto] flex-wrap">
            <div className="inline-flex h-[33.14px] items-center justify-center px-4 py-2 relative flex-[0_0_auto] bg-blue rounded-2xl">
              <div className="w-fit [font-family:'Inter',Helvetica] font-normal text-white text-[13px] leading-[13px] whitespace-nowrap relative tracking-[0]">
                リモートOK
              </div>
            </div>

            <div className="inline-flex h-[33.14px] items-center justify-center px-4 py-2 relative flex-[0_0_auto] bg-blue rounded-2xl">
              <div className="w-fit [font-family:'Inter',Helvetica] font-normal text-white text-[13px] leading-[13px] whitespace-nowrap relative tracking-[0]">
                休日120日以上
              </div>
            </div>

            <div className="inline-flex h-[33.14px] items-center justify-center px-4 py-2 relative flex-[0_0_auto] bg-blue rounded-2xl">
              <div className="w-fit [font-family:'Inter',Helvetica] font-normal text-white text-[13px] leading-[13px] whitespace-nowrap relative tracking-[0]">
                急募
              </div>
            </div>

            <div className="inline-flex h-[33.14px] items-center justify-center px-4 py-2 relative flex-[0_0_auto] bg-blue rounded-2xl">
              <div className="w-fit [font-family:'Inter',Helvetica] font-normal text-white text-[13px] leading-[13px] whitespace-nowrap relative tracking-[0]">
                年収600万円以上
              </div>
            </div>
          </div>
        </div>

        <img
          className="relative self-stretch w-full aspect-[2]"
          alt="Element"
          src="/img/14588-1.png"
        />

        <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
          <TitleWrapper
            className="!flex-[0_0_auto] !left-[unset] !top-[unset]"
            prop="仕事内容"
          />
          <div className="self-stretch [font-family:'Noto_Sans_JP',Helvetica] font-normal text-text text-base text-justify leading-[25.6px] relative tracking-[0]">
            税理士法人にて、中小企業から上場企業まで幅広いクライアントの税務申告業務をお任せします。経験豊富な税理士のもとで実務経験を積みながら、スキルアップを目指していただけます。
          </div>

          <List
            className="!self-stretch !flex-[0_0_auto] !left-[unset] !w-full !top-[unset]"
            prop="主な業務内容"
            prop1={
              <>
                法人税・所得税・消費税等の税務申告書作成
                <br />
                税務相談・アドバイス業務
                <br />
                会計帳簿の作成・チェック業務
                <br />
                クライアント対応・打ち合わせ
              </>
            }
          />
        </div>

        <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
          <TitleWrapper
            className="!flex-[0_0_auto] !left-[unset] !top-[unset]"
            prop="応募条件・求める人材"
          />
          <List
            className="!self-stretch !flex-[0_0_auto] !left-[unset] !w-full !top-[unset]"
            prop="必須条件"
            prop1={
              <>
                税理士資格または税理士試験科目合格者（2科目以上）
                <br />
                税理士事務所・会計事務所での実務経験 2年以上
                <br />
                Excel、WordなどのPCスキル
              </>
            }
          />
          <List
            className="!self-stretch !flex-[0_0_auto] !left-[unset] !w-full !top-[unset]"
            prop="歓迎条件"
            prop1={
              <>
                税理士資格取得者
                <br />
                TKC、弥生会計等の会計ソフト使用経験
                <br />
                上場企業の税務経験
              </>
            }
          />
        </div>

        <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
          <TitleWrapper
            className="!flex-[0_0_auto] !left-[unset] !top-[unset]"
            prop="職場環境・働き方"
          />
          <div className="grid grid-cols-2 md:flex md:flex-row items-start md:items-center justify-items-center md:justify-start gap-4 md:gap-6 relative w-full max-w-[400px] md:w-auto mx-auto md:mx-0">
            <Component5784
              className="!left-[unset] !top-[unset] !w-full !max-w-[184px] md:!w-[184px]"
              prop="フレックス制"
              prop1="コアタイム10-15時"
            />
            <Component5784
              className="!left-[unset] !top-[unset] !w-full !max-w-[184px] md:!w-[184px]"
              icon={
                <Users2 className="!relative !w-[28.98px] !h-[28.98px] !aspect-[1]" />
              }
              prop="チーム体制"
              prop1="少数精鋭10名"
            />
            <Component5784
              className="!left-[unset] !top-[unset] !w-full !max-w-[184px] md:!w-[184px]"
              icon={
                <House1 className="!relative !w-[28.98px] !h-[28.98px] !aspect-[1]" />
              }
              prop="リモートワーク"
              prop1="週2-3日可能"
            />
            <Component5784
              className="!left-[unset] !top-[unset] !w-full !max-w-[184px] md:!w-[184px]"
              icon={
                <Clock3
                  className="!w-[28.98px] !h-[28.98px] !relative !aspect-[1]"
                  color="#727272"
                />
              }
              prop="研修制度"
              prop1="資格取得を強力支援"
            />
          </div>
        </div>

        <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
          <TitleWrapper
            className="!flex-[0_0_auto] !left-[unset] !top-[unset]"
            prop="応募資格（詳細条件）"
          />
          <List
            className="!self-stretch !flex-[0_0_auto] !left-[unset] !w-full !top-[unset]"
            prop="学歴・資格"
            prop1={
              <>
                大学卒業以上（経済学部、商学部、法学部優遇）
                <br />
                税理士試験科目合格者（簿記論・財務諸表論は必須）
                <br />
                日商簿記検定2級以上取得者
              </>
            }
          />
          <List
            className="!self-stretch !flex-[0_0_auto] !left-[unset] !w-full !top-[unset]"
            prop="実務経験"
            prop1={
              <>
                税理士事務所・会計事務所での実務経験2年以上
                <br />
                法人税申告書作成経験（年間20件以上）
                <br />
                クライアント対応経験（月次訪問業務含む）
              </>
            }
          />
          <List
            className="!self-stretch !flex-[0_0_auto] !left-[unset] !w-full !top-[unset]"
            prop="必要スキル"
            prop1={
              <>
                Excel（VLOOKUP、ピボットテーブル等の関数使用経験）
                <br />
                会計ソフト操作経験（TKC、弥生会計、勘定奉行等）
                <br />
                コミュニケーション能力（クライアント対応可能レベル）
              </>
            }
          />
        </div>

        <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
          <TitleWrapper
            className="!flex-[0_0_auto] !left-[unset] !top-[unset]"
            prop="給与（モデル・詳細条件）"
          />
          <div className="gap-6 flex flex-col items-start p-6 relative self-stretch w-full flex-[0_0_auto] bg-white rounded-[14px]">
            <div className="self-stretch mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-bold text-blue text-lg leading-[18px] relative tracking-[0]">
              給与モデル例
            </div>

            <p className="self-stretch [font-family:'Noto_Sans_JP',Helvetica] font-normal text-text text-base leading-[25.6px] relative tracking-[0]">
              <span className="font-bold">
                入社3年目（税理士科目3科目合格）
                <br />
              </span>

              <span className="[font-family:'Noto_Sans_JP',Helvetica] font-normal text-[#222222] text-base tracking-[0] leading-[25.6px]">
                年収480万円（月給30万円 + 賞与年2回）
              </span>
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
            <TitleWrapper
              className="!flex-[0_0_auto] !left-[unset] !top-[unset]"
              prop="休日・休暇の詳細"
            />
            <List
              className="!self-stretch !flex-[0_0_auto] !left-[unset] !w-full !top-[unset]"
              prop="基本休日"
              prop1={
                <>
                  完全週休2日制（土日）
                  <br />
                  祝日、年末年始、夏季休暇
                  <br />
                  年間休日125日
                </>
              }
            />
            <List
              className="!self-stretch !flex-[0_0_auto] !left-[unset] !w-full !top-[unset]"
              prop="特別休暇"
              prop1={
                <>
                  有給休暇（初年度10日、最大20日）
                  <br />
                  慶弔休暇、産前産後・育児休暇
                  <br />
                  リフレッシュ休暇（勤続5年毎に5日間）
                  <br />
                  資格取得支援休暇（試験日当日）
                </>
              }
            />
          </div>
        </div>

        <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
            <TitleWrapper
              className="!flex-[0_0_auto] !left-[unset] !top-[unset]"
              prop="福利厚生"
            />
            <List
              className="!self-stretch !flex-[0_0_auto] !left-[unset] !w-full !top-[unset]"
              prop="保険・年金"
              prop1={
                <>
                  健康保険、厚生年金、雇用保険、労災保険完備
                  <br />
                  退職金制度（勤続3年以上）
                </>
              }
            />
            <List
              className="!self-stretch !flex-[0_0_auto] !left-[unset] !w-full !top-[unset]"
              prop="各種手当・支援"
              prop1={
                <>
                  交通費支給（月額上限3万円）
                  <br />
                  資格取得支援金（受験料・教材費補助）
                  <br />
                  資格合格祝い金（税理士科目合格：5万円/科目）
                  <br />
                  健康診断費用補助、インフルエンザ予防接種
                </>
              }
            />
            <List
              className="!self-stretch !flex-[0_0_auto] !left-[unset] !w-full !top-[unset]"
              prop="職場環境"
              prop1={
                <>
                  最新PCソフト完備（Office、専用会計ソフト）
                  <br />
                  個人デスク・チェア完備
                  <br />
                  フリードリンク（コーヒー・お茶）
                  <br />
                  歓送迎会、忘年会等の懇親会
                </>
              }
            />
          </div>
        </div>

        <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
            <TitleWrapper
              className="!flex-[0_0_auto] !left-[unset] !top-[unset]"
              prop="受動喫煙防止処置"
            />
            <div className="gap-6 flex flex-col items-start p-6 relative self-stretch w-full flex-[0_0_auto] bg-white rounded-[14px]">
              <div className="self-stretch mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-bold text-blue text-lg leading-[18px] relative tracking-[0]">
                禁煙・分煙対策
              </div>

              <div className="flex items-center justify-center gap-2.5 px-4 py-2 relative self-stretch w-full flex-[0_0_auto] bg-blue rounded-md">
                <Checkcircle13
                  className="!relative !w-5 !h-5 !aspect-[1]"
                  color="white"
                />
                <div className="flex-1 [font-family:'Noto_Sans_JP',Helvetica] font-black text-white text-base leading-4 relative tracking-[0]">
                  敷地内全面禁煙
                </div>
              </div>

              <div className="self-stretch [font-family:'Noto_Sans_JP',Helvetica] font-normal text-text text-base leading-[25.6px] relative tracking-[0]">
                オフィス内および建物内は全面禁煙です
                <br />
                喫煙は建物外の指定された喫煙所のみ可能
                <br />
                電子タバコ・加熱式タバコも同様の取り扱い
              </div>
            </div>

            <List
              className="!self-stretch !flex-[0_0_auto] !left-[unset] !w-full !top-[unset]"
              prop="健康への配慮"
              prop1={
                <>
                  受動喫煙防止法に基づいた環境整備
                  <br />
                  空気清浄機を各フロアに設置
                  <br />
                  禁煙支援制度（禁煙外来費用補助）
                </>
              }
            />
          </div>
        </div>

        <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
            <TitleWrapper
              className="!flex-[0_0_auto] !left-[unset] !top-[unset]"
              prop="求人の特徴（タグ）"
            />
            <div className="gap-8 flex flex-col items-start p-6 relative self-stretch w-full flex-[0_0_auto] bg-white rounded-[14px]">
              <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
                <div className="self-stretch mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-bold text-blue text-lg leading-[18px] relative tracking-[0]">
                  働き方
                </div>

                <div className="flex items-start gap-2 md:gap-4 relative self-stretch w-full flex-[0_0_auto] flex-wrap">
                  <div className="inline-flex h-[33.14px] items-center justify-center px-4 py-2 relative flex-[0_0_auto] bg-blue rounded-2xl">
                    <div className="w-fit [font-family:'Inter',Helvetica] font-normal text-white text-[13px] leading-[13px] whitespace-nowrap relative tracking-[0]">
                      リモートワーク可
                    </div>
                  </div>

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
                    prop="残業少なめ"
                    state="default"
                    type="big-grey-big"
                  />
                </div>
              </div>

              <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
                <div className="self-stretch mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-bold text-blue text-lg leading-[18px] relative tracking-[0]">
                  キャリア・成長
                </div>

                <div className="flex items-start gap-2 md:gap-4 relative self-stretch w-full flex-[0_0_auto] flex-wrap">
                  <SelectedTag
                    className="!h-[33.14px] !flex-[0_0_auto] !left-[unset] !top-[unset]"
                    iconRight="off"
                    prop="経験者歓迎"
                    state="default"
                    type="big-grey-big"
                  />
                  <div className="inline-flex h-[33.14px] items-center justify-center px-4 py-2 relative flex-[0_0_auto] bg-blue rounded-2xl">
                    <div className="w-fit [font-family:'Inter',Helvetica] font-normal text-white text-[13px] leading-[13px] whitespace-nowrap relative tracking-[0]">
                      資格取得支援
                    </div>
                  </div>

                  <SelectedTag
                    className="!h-[33.14px] !flex-[0_0_auto] !left-[unset] !top-[unset]"
                    iconRight="off"
                    prop="研修制度充実"
                    state="default"
                    type="big-grey-big"
                  />
                  <SelectedTag
                    className="!h-[33.14px] !flex-[0_0_auto] !left-[unset] !top-[unset]"
                    iconRight="off"
                    prop="昇進・昇格あり"
                    state="default"
                    type="big-grey-big"
                  />
                </div>
              </div>

              <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
                <div className="self-stretch mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-bold text-blue text-lg leading-[18px] relative tracking-[0]">
                  職場環境
                </div>

                <div className="flex items-start gap-2 md:gap-4 relative self-stretch w-full flex-[0_0_auto] flex-wrap">
                  <div className="inline-flex h-[33.14px] items-center justify-center px-4 py-2 relative flex-[0_0_auto] bg-blue rounded-2xl">
                    <div className="w-fit [font-family:'Inter',Helvetica] font-normal text-white text-[13px] leading-[13px] whitespace-nowrap relative tracking-[0]">
                      少数精鋭
                    </div>
                  </div>

                  <SelectedTag
                    className="!h-[33.14px] !flex-[0_0_auto] !left-[unset] !top-[unset]"
                    iconRight="off"
                    prop="綺麗なオフィス"
                    state="default"
                    type="big-grey-big"
                  />
                  <SelectedTag
                    className="!h-[33.14px] !flex-[0_0_auto] !left-[unset] !top-[unset]"
                    iconRight="off"
                    prop="駅チカ"
                    state="default"
                    type="big-grey-big"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
            <TitleWrapper
              className="!flex-[0_0_auto] !left-[unset] !top-[unset]"
              prop="会社情報（詳細）"
            />
            <div className="gap-8 flex flex-col items-start p-6 relative self-stretch w-full flex-[0_0_auto] bg-white rounded-[14px]">
              <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
                <div className="self-stretch mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-bold text-blue text-lg leading-[18px] relative tracking-[0]">
                  基本情報
                </div>

                <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
                  <Frame1000003884
                    className="!self-stretch !flex-[0_0_auto] !left-[unset] !w-full !top-[unset]"
                    prop="株式会社派遣市場"
                    prop1="会社名"
                  />
                  <Frame1000003884
                    className="!self-stretch !flex-[0_0_auto] !left-[unset] !w-full !top-[unset]"
                    prop="2010年4月"
                    prop1="設立"
                  />
                  <Frame1000003884
                    className="!self-stretch !flex-[0_0_auto] !left-[unset] !w-full !top-[unset]"
                    prop="1,000万円"
                    prop1="資本金"
                  />
                  <Frame1000003884
                    className="!self-stretch !flex-[0_0_auto] !left-[unset] !w-full !top-[unset]"
                    prop="15名（税理士3名、税理士科目合格者8名）"
                    prop1="従業員数"
                  />
                </div>
              </div>

              <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
                <div className="self-stretch mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-bold text-blue text-lg leading-[18px] relative tracking-[0]">
                  所在地・アクセス
                </div>

                <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
                  <Frame1000003884
                    className="!self-stretch !flex-[0_0_auto] !left-[unset] !w-full !top-[unset]"
                    prop="東京都中央区銀座1-1-1 銀座第一ビル3F"
                    prop1="本社所在地"
                  />
                  <Frame1000003884
                    className="!self-stretch !flex-[0_0_auto] !left-[unset] !w-full !top-[unset]"
                    prop="JR有楽町駅徒歩3分、地下鉄銀座駅徒歩1分"
                    prop1="最寄駅"
                  />
                </div>
              </div>

              <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative w-full h-[18px] mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-bold text-blue text-lg tracking-[0] leading-[18px] whitespace-nowrap">
                  事業内容
                </div>

                <div className="w-full [font-family:'Noto_Sans_JP',Helvetica] font-normal text-text text-base leading-[25.6px] relative tracking-[0]">
                  税務申告業務（法人税、所得税、消費税等）
                  <br />
                  税務相談・コンサルティング業務
                  <br />
                  会計記帳代行・決算業務
                  <br />
                  経営コンサルティング・事業承継支援
                </div>
              </div>

              <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative w-full h-[18px] mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-bold text-blue text-lg tracking-[0] leading-[18px] whitespace-nowrap">
                  主要取引先
                </div>

                <div className="w-full [font-family:'Noto_Sans_JP',Helvetica] font-normal text-text text-base leading-[25.6px] relative tracking-[0]">
                  中小企業約200社（製造業、小売業、サービス業等）
                  <br />
                  上場企業5社（税務顧問・申告業務）
                  <br />
                  個人事業主・フリーランス約50名
                </div>
              </div>

              <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative w-full h-[18px] mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-bold text-blue text-lg tracking-[0] leading-[18px] whitespace-nowrap">
                  許可・認定
                </div>

                <div className="relative w-full [font-family:'Noto_Sans_JP',Helvetica] font-normal text-text text-base tracking-[0] leading-[25.6px]">
                  税理士法人登録（東京税理士会所属）
                  <br />
                  TKC会員事務所
                  <br />
                  ISO27001認証取得（情報セキュリティ）
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import { HTitle } from "../../../../components/HTitle";
import { Inputf } from "../../../../components/Inputf";
import { JobList } from "../../../../components/JobList";
import { Title } from "../../../../components/Title";
import { Bookmarksimple2 } from "../../../../icons/Bookmarksimple2";
import { Caretdown3 } from "../../../../icons/Caretdown3";
import { Note } from "../../../../icons/Note";

export const Frame9 = () => {
  return (
    <div className="flex w-[1360px] items-start justify-between relative flex-[0_0_auto]">
      <div className="flex flex-col w-[302px] items-start gap-8 relative">
        <div className="flex flex-col items-start gap-6 p-6 relative self-stretch w-full flex-[0_0_auto] bg-white rounded-[14px] overflow-hidden">
          <Title
            className="!flex-[0_0_auto] !left-[unset] !top-[unset]"
            prop="条件を絞り込む"
          />
          <Inputf
            className="!flex-[0_0_auto] !left-[unset] !w-[254px] !top-[unset]"
            inputDefaultIcon={
              <Caretdown3 className="!relative !w-4 !h-4 !aspect-[1]" />
            }
            inputDefaultInputDefaultClassName="!self-stretch !left-[unset] !w-full !top-[unset]"
            inputDefaultProp="職種を選択"
            labelProp="職種"
            labelState="default"
            labelType="small"
            labelTypeSmallStateClassName="!left-[unset] !top-[unset]"
          />
          <Inputf
            className="!flex-[0_0_auto] !left-[unset] !w-[254px] !top-[unset]"
            inputDefaultIcon={
              <Caretdown3 className="!relative !w-4 !h-4 !aspect-[1]" />
            }
            inputDefaultInputDefaultClassName="!self-stretch !left-[unset] !w-full !top-[unset]"
            inputDefaultProp="勤務地を選択"
            labelProp="勤務地"
            labelState="default"
            labelType="small"
            labelTypeSmallStateClassName="!left-[unset] !top-[unset]"
          />
          <Inputf
            className="!flex-[0_0_auto] !left-[unset] !w-[254px] !top-[unset]"
            inputDefaultIcon={
              <Caretdown3 className="!relative !w-4 !h-4 !aspect-[1]" />
            }
            inputDefaultInputDefaultClassName="!self-stretch !left-[unset] !w-full !top-[unset]"
            inputDefaultProp="時給を選択"
            labelProp="時給"
            labelState="default"
            labelType="small"
            labelTypeSmallStateClassName="!left-[unset] !top-[unset]"
          />
          <Inputf
            className="!flex-[0_0_auto] !left-[unset] !w-[254px] !top-[unset]"
            inputDefaultIcon={
              <Caretdown3 className="!relative !w-4 !h-4 !aspect-[1]" />
            }
            inputDefaultInputDefaultClassName="!self-stretch !left-[unset] !w-full !top-[unset]"
            inputDefaultProp="こだわりを選択"
            labelProp="その他"
            labelState="default"
            labelType="small"
            labelTypeSmallStateClassName="!left-[unset] !top-[unset]"
          />
          <button className="all-[unset] box-border self-stretch w-full bg-blue flex h-[50px] items-center gap-1 p-3.5 relative rounded-lg">
            <div className="flex-1 [font-family:'Noto_Sans_JP',Helvetica] font-bold text-white text-base text-center leading-4 relative tracking-[0]">
              検索
            </div>
          </button>

          <img
            className="relative w-[254px] h-px object-cover"
            alt="Line"
            src="/img/line-12.svg"
          />

          <Title
            className="!flex-[0_0_auto] !left-[unset] !top-[unset]"
            prop="この条件の求人数"
          />
          <div className="inline-flex items-baseline gap-1 relative flex-[0_0_auto]">
            <div className="w-fit mt-[-1.00px] [font-family:'Open_Sans',Helvetica] font-bold text-blue text-2xl leading-6 whitespace-nowrap relative tracking-[0]">
              12,924
            </div>

            <div className="w-fit [font-family:'Noto_Sans_JP',Helvetica] font-bold text-text text-lg leading-[18px] whitespace-nowrap relative tracking-[0]">
              件
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-[1018px] items-start gap-6 relative">
        <HTitle
          className="!self-stretch !h-6 ![justify-content:unset] !flex !left-[unset] !w-full !top-[unset]"
          prop="求人情報の検索結果一覧"
        />
        <div className="flex flex-col items-start gap-10 relative self-stretch w-full flex-[0_0_auto]">
          <JobList
            btnIcon={
              <Bookmarksimple2
                className="!relative !w-4 !h-4 !aspect-[1]"
                color="#11A5B1"
              />
            }
            className="!self-stretch !flex-[0_0_auto] !left-[unset] !w-full !top-[unset]"
            override={
              <Note className="!relative !w-4 !h-4 !aspect-[1]" color="white" />
            }
            prop="社名完全非公開（エージェントに問い合わせください）"
            to="/u27714u20154u35443u32048u35443u32048"
          />
          <JobList
            btnIcon={
              <Bookmarksimple2
                className="!relative !w-4 !h-4 !aspect-[1]"
                color="#11A5B1"
              />
            }
            className="!self-stretch !flex-[0_0_auto] !left-[unset] !w-full !top-[unset]"
            override={
              <Note className="!relative !w-4 !h-4 !aspect-[1]" color="white" />
            }
            prop="社名完全非公開（エージェントに問い合わせください）"
            to="/u27714u20154u35443u32048u35443u32048"
          />
          <JobList
            btnIcon={
              <Bookmarksimple2
                className="!relative !w-4 !h-4 !aspect-[1]"
                color="#11A5B1"
              />
            }
            className="!self-stretch !flex-[0_0_auto] !left-[unset] !w-full !top-[unset]"
            override={
              <Note className="!relative !w-4 !h-4 !aspect-[1]" color="white" />
            }
            prop="社名完全非公開（エージェントに問い合わせください）"
            to="/u27714u20154u35443u32048u35443u32048"
            visible={false}
          />
          <JobList
            btnIcon={
              <Bookmarksimple2
                className="!relative !w-4 !h-4 !aspect-[1]"
                color="#11A5B1"
              />
            }
            className="!self-stretch !flex-[0_0_auto] !left-[unset] !w-full !top-[unset]"
            override={
              <Note className="!relative !w-4 !h-4 !aspect-[1]" color="white" />
            }
            prop="社名完全非公開（エージェントに問い合わせください）"
            to="/u27714u20154u35443u32048u35443u32048"
            visible={false}
          />
          <JobList
            btnIcon={
              <Bookmarksimple2
                className="!relative !w-4 !h-4 !aspect-[1]"
                color="#11A5B1"
              />
            }
            className="!self-stretch !flex-[0_0_auto] !left-[unset] !w-full !top-[unset]"
            override={
              <Note className="!relative !w-4 !h-4 !aspect-[1]" color="white" />
            }
            prop="社名完全非公開（エージェントに問い合わせください）"
            to="/u27714u20154u35443u32048u35443u32048"
            visible={false}
          />
          <JobList
            btnIcon={
              <Bookmarksimple2
                className="!relative !w-4 !h-4 !aspect-[1]"
                color="#11A5B1"
              />
            }
            className="!self-stretch !flex-[0_0_auto] !left-[unset] !w-full !top-[unset]"
            override={
              <Note className="!relative !w-4 !h-4 !aspect-[1]" color="white" />
            }
            prop="社名完全非公開（エージェントに問い合わせください）"
            to="/u27714u20154u35443u32048u35443u32048"
            visible={false}
          />
          <JobList
            btnIcon={
              <Bookmarksimple2
                className="!relative !w-4 !h-4 !aspect-[1]"
                color="#11A5B1"
              />
            }
            className="!self-stretch !flex-[0_0_auto] !left-[unset] !w-full !top-[unset]"
            override={
              <Note className="!relative !w-4 !h-4 !aspect-[1]" color="white" />
            }
            prop="社名完全非公開（エージェントに問い合わせください）"
            to="/u27714u20154u35443u32048u35443u32048"
            visible={false}
          />
          <JobList
            btnIcon={
              <Bookmarksimple2
                className="!relative !w-4 !h-4 !aspect-[1]"
                color="#11A5B1"
              />
            }
            className="!self-stretch !flex-[0_0_auto] !left-[unset] !w-full !top-[unset]"
            override={
              <Note className="!relative !w-4 !h-4 !aspect-[1]" color="white" />
            }
            prop="社名完全非公開（エージェントに問い合わせください）"
            to="/u27714u20154u35443u32048u35443u32048"
            visible={false}
          />
          <JobList
            btnIcon={
              <Bookmarksimple2
                className="!relative !w-4 !h-4 !aspect-[1]"
                color="#11A5B1"
              />
            }
            className="!self-stretch !flex-[0_0_auto] !left-[unset] !w-full !top-[unset]"
            override={
              <Note className="!relative !w-4 !h-4 !aspect-[1]" color="white" />
            }
            prop="社名完全非公開（エージェントに問い合わせください）"
            to="/u27714u20154u35443u32048u35443u32048"
            visible={false}
          />
          <JobList
            btnIcon={
              <Bookmarksimple2
                className="!relative !w-4 !h-4 !aspect-[1]"
                color="#11A5B1"
              />
            }
            className="!self-stretch !flex-[0_0_auto] !left-[unset] !w-full !top-[unset]"
            override={
              <Note className="!relative !w-4 !h-4 !aspect-[1]" color="white" />
            }
            prop="社名完全非公開（エージェントに問い合わせください）"
            to="/u27714u20154u35443u32048u35443u32048"
            visible={false}
          />
        </div>
      </div>
    </div>
  );
};

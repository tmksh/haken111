import React from "react";
import { HeaderSection } from "../../../../components/HeaderSection";
import { ThreeReasonsWrapper } from "../../../../components/ThreeReasonsWrapper";

export const ThreeReasons = () => {
  return (
    <div className="flex flex-col w-[1018px] items-center gap-14 px-6 py-10 relative flex-[0_0_auto] bg-white">
      <HeaderSection
        className="!flex-[0_0_auto] !left-[unset] !top-[unset]"
        prop="なぜ派遣市場の満足度は高いのか？"
        prop1="選ばれる3つの理由"
      />
      <div className="flex flex-col items-start gap-10 relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex items-center gap-[39px] relative self-stretch w-full flex-[0_0_auto]">
          <img
            className="relative w-[298px] h-[223px] aspect-[1.34]"
            alt="Element"
            src="/img/7246-2.png"
          />

          <ThreeReasonsWrapper
            className="!mr-[-1.00px] !left-[unset] !top-[unset]"
            prop="01"
            prop1="QUALITY"
            prop2="「数」ではなく「質」を重視し、適切な人材をご紹介します。"
            prop3={
              <>
                「数を打てば当たる」という考えを排除し、貴社の要望に沿った人材のご紹介を心がけます。
                <br />
                募集要項に限らず、貴社の社風やスクリーニング条件を加味し、採用業務の負担軽減に貢献します。
              </>
            }
          />
        </div>

        <div className="gap-10 flex-[0_0_auto] flex items-center relative self-stretch w-full">
          <ThreeReasonsWrapper
            className="!left-[unset] !top-[unset]"
            prop="02"
            prop1="ENVIRONMENT"
            prop2="求職者の「人生」を最優先し、適切な仕事環境を提供します。"
            prop3={
              <>
                給与額や雇用条件のみならず、求職者のキャリアやプライベートの状況も踏まえ、適切な求人を提案します。
                <br />
                不用意な離職リスクを軽減し、求職者が豊かに働くための転職機会を最大化させます。
              </>
            }
          />
          <img
            className="relative w-[298px] h-[223px] mr-[-2.00px] aspect-[1.34]"
            alt="Element"
            src="/img/369863540.png"
          />
        </div>

        <div className="gap-10 flex-[0_0_auto] flex items-center relative self-stretch w-full">
          <img
            className="relative w-[298px] h-[223px] aspect-[1.34]"
            alt="Adobestock"
            src="/img/adobestock-270304285.png"
          />

          <ThreeReasonsWrapper
            className="!mr-[-2.00px] !left-[unset] !top-[unset]"
            prop="03"
            prop1="DEVELOPMENT"
            prop2="業界発展に貢献することを目的とし、適切な報酬でサービスを提供します。"
            prop3={
              <>
                採用活動が財務状況を圧迫する、という事態を防ぐため、リスクとデメリットを最大限に排除した料金形態で提供します。
                <br />
                貴社における「良い人材」の雇用促進に貢献することが、業界発展への貢献にも繋がると信じています。
              </>
            }
          />
        </div>
      </div>
    </div>
  );
};

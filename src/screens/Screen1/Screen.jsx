import React from "react";
import { Footer } from "../../components/Footer";
import { Cta } from "./sections/Cta";
import { CtaWrapper } from "./sections/CtaWrapper";
import { Div } from "./sections/Div";
import { DivWrapper } from "./sections/DivWrapper";
import { Flow } from "./sections/Flow";
import { Frame } from "./sections/Frame";
import { FrameWrapper } from "./sections/FrameWrapper";
import { Header } from "./sections/Header";
import { Plam } from "./sections/Plam";
import { SectionComponentNode } from "./sections/SectionComponentNode";
import { ThreeReasons } from "./sections/ThreeReasons";

export const Screen = () => {
  return (
    <div
      className="bg-grey1-bg w-full min-w-[1440px] min-h-[9452px] relative"
      data-model-id="322:4043"
    >
      <img
        className="absolute top-0 left-0 w-[1440px] h-[625px]"
        alt="Fv"
        src="/img/fv.png"
      />

      <Header />
      <div className="w-[1440px] gap-16 pt-12 pb-0 px-0 absolute top-[624px] left-0 flex flex-col items-center">
        <img
          className="absolute top-[1044px] left-0 w-[1440px] h-[1274px]"
          alt="Gb"
          src="/img/gb.svg"
        />

        <Frame />
        <Cta />
        <ThreeReasons />
        <Plam />
        <FrameWrapper />
        <CtaWrapper />
        <Flow />
        <DivWrapper />
        <Div />
        <Footer className="!self-stretch !flex-[0_0_auto] !left-[unset] !w-full !top-[unset]" />
      </div>

      <SectionComponentNode />
    </div>
  );
};

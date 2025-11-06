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
      className="bg-grey1-bg w-full relative"
      data-model-id="322:4043"
    >
      <img
        className="absolute top-0 left-0 w-full h-auto max-h-[400px] md:max-h-[625px] lg:hidden object-cover"
        alt="Fv"
        src="/img/fv.png"
      />

      <Header />
      <SectionComponentNode />
      <div className="w-full max-w-[1440px] mx-auto gap-8 md:gap-16 pt-4 md:pt-12 pb-0 px-4 md:px-0 relative top-0 md:top-[624px] lg:top-[624px] flex flex-col items-center">
        <img
          className="absolute top-[1044px] left-0 w-full h-auto object-cover hidden md:block"
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
    </div>
  );
};

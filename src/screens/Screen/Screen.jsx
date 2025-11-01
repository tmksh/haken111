import React from "react";
import { Footer6 } from "../../components/Footer6";
import { StarFillWrapper } from "../../components/StarFillWrapper";
import { CareerStoriesFixed } from "./sections/CareerStoriesFixed";
import { Column } from "./sections/Column";
import { ConsultationSection } from "./sections/ConsultationSection";
import { Cta } from "./sections/Cta";
import { Faq } from "./sections/Faq";
import { Frame } from "./sections/Frame";
import { Fv } from "./sections/Fv";
import { Header } from "./sections/Header";
import { JobSearchEnhanced } from "./sections/JobSearchEnhanced";
import { PicUp } from "./sections/PicUp";

export const Screen = () => {
  return (
    <div
      className="bg-white w-full min-w-[1440px] relative"
      data-model-id="322:3559"
    >
      <Fv />
      <Header />
      <div className="flex flex-col w-[1440px] items-start absolute top-[624px] left-0 pb-0">
        <div className="flex flex-col items-center gap-16 pt-16 pb-16 px-0 relative self-stretch w-full flex-[0_0_auto]">
          <JobSearchEnhanced />
          <PicUp />
          <CareerStoriesFixed />
          <ConsultationSection />
          <Column />
          <Frame />
          <Faq />
          <Cta />
        </div>
        
        <Footer6
          className="!self-stretch !flex-[0_0_auto] !left-[unset] !w-full !top-[unset] !relative"
          to="/u21033u29992u35215u32004"
        />
      </div>

      <StarFillWrapper />
    </div>
  );
};

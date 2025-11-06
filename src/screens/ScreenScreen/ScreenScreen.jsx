import React from "react";
import { BreadcrumbsList } from "../../components/BreadcrumbsList";
import { Body } from "./sections/Body";
import { Footer } from "./sections/Footer";
import { FrameWrapper } from "./sections/FrameWrapper";
import { HeaderWrapper } from "./sections/HeaderWrapper";

export const ScreenScreen = () => {
  return (
    <div
      className="bg-grey1-bg w-full flex flex-col"
      data-model-id="322:4927"
    >
      <HeaderWrapper />
      <BreadcrumbsList
        breadcrumbs2="お問い合わせ"
        breadcrumbsOne="blue"
        breadcrumbsProp="トップ"
        className="!h-[13px] !mt-6 !ml-4 md:!ml-10 !left-[unset] !top-[unset]"
        hasDiv={false}
        visible={false}
      />
      <FrameWrapper />
      <Body />
      <Footer />
    </div>
  );
};

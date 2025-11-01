import React from "react";
import { BreadcrumbsList } from "../../components/BreadcrumbsList";
import { BodyWrapper } from "./sections/BodyWrapper";
import { Div } from "./sections/Div";
import { DivWrapper } from "./sections/DivWrapper";
import { FooterWrapper } from "./sections/FooterWrapper";

export const ScreenWrapper = () => {
  return (
    <div
      className="bg-grey1-bg w-full min-w-[1440px] min-h-[3068px] flex flex-col"
      data-model-id="322:4766"
    >
      <DivWrapper />
      <BreadcrumbsList
        breadcrumbs21="転職の面接で必ず聞かれる質問TOP10"
        breadcrumbsElementGreyClassName="!mr-[-170.00px] !flex-[0_0_auto] !left-[unset] !top-[unset]"
        breadcrumbsOne="grey"
        breadcrumbsProp="トップ"
        breadcrumbsProp1="転職コラム"
        className="!h-[13px] !mt-6 !ml-10 !left-[unset] !top-[unset]"
      />
      <Div />
      <BodyWrapper />
      <FooterWrapper />
    </div>
  );
};

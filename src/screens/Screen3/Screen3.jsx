import React from "react";
import { BreadcrumbsList } from "../../components/BreadcrumbsList";
import { FooterInstanceWrapper } from "./sections/FooterInstanceWrapper";
import { Frame1 } from "./sections/Frame1";
import { Frame2 } from "./sections/Frame2";
import { SectionComponentNode } from "./sections/SectionComponentNode";

export const Screen3 = () => {
  return (
    <div
      className="bg-grey1-bg w-full min-w-[1440px] min-h-[2339px] flex flex-col"
      data-model-id="331:6653"
    >
      <SectionComponentNode />
      <BreadcrumbsList
        breadcrumbs2="お問い合わせ"
        breadcrumbsOne="blue"
        breadcrumbsProp="トップ"
        className="!h-[13px] !mt-6 !ml-10 !left-[unset] !top-[unset]"
        hasDiv={false}
        visible={false}
      />
      <Frame1 />
      <Frame2 />
      <FooterInstanceWrapper />
    </div>
  );
};

import React from "react";
import { BreadcrumbsList } from "../../components/BreadcrumbsList";
import { Footer1 } from "./sections/Footer1";
import { Frame3 } from "./sections/Frame3";
import { Frame4 } from "./sections/Frame4";
import { Header1 } from "./sections/Header1";

export const Screen4 = () => {
  return (
    <div
      className="bg-grey1-bg w-full flex flex-col"
      data-model-id="322:5079"
    >
      <Header1 />
      <BreadcrumbsList
        breadcrumbs21="田中さんの転職成功事例"
        breadcrumbsElementGreyClassName="!flex-[0_0_auto] !left-[unset] !top-[unset]"
        breadcrumbsOne="grey"
        breadcrumbsProp="トップ"
        breadcrumbsProp1="転職成功事例"
        className="!h-[13px] !mt-6 !ml-4 md:!ml-10 !inline-flex !left-[unset] !w-auto !top-[unset]"
      />
      <Frame3 />
      <Frame4 />
      <Footer1 />
    </div>
  );
};

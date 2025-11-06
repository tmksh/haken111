import React from "react";
import { BreadcrumbsList } from "../../components/BreadcrumbsList";
import { Footer2 } from "./sections/Footer2";
import { Frame6 } from "./sections/Frame6";
import { Header3 } from "./sections/Header3";

export const Screen6 = () => {
  return (
    <div
      className="bg-grey1-bg w-full flex flex-col"
      data-model-id="322:4857"
    >
      <Header3 />
      <BreadcrumbsList
        breadcrumbs2="お問い合わせ"
        breadcrumbsOne="blue"
        breadcrumbsProp="トップ"
        className="!h-[13px] !mt-6 !ml-4 md:!ml-10 !left-[unset] !top-[unset]"
        hasDiv={false}
        visible={false}
      />
      <Frame6 />
      <Footer2 />
    </div>
  );
};

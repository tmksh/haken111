import React from "react";
import { BreadcrumbsList } from "../../components/BreadcrumbsList";
import { Footer3 } from "./sections/Footer3";
import { Frame7 } from "./sections/Frame7";
import { Frame8 } from "./sections/Frame8";
import { Header4 } from "./sections/Header4";
import { SideBar } from "./sections/SideBar";

export const Screen7 = () => {
  return (
    <div
      className="bg-grey1-bg w-full relative"
      data-model-id="322:5177"
    >
      <Header4 />
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-0 relative flex flex-col md:block md:min-h-[2800px] pb-10 md:pb-0">
        <BreadcrumbsList
          breadcrumbs2="転職コラム一覧"
          breadcrumbsOne="blue"
          breadcrumbsProp="トップ"
          className="!inline-flex !relative md:!absolute !left-4 md:!left-10 !w-[unset] !top-[unset] md:!top-[162px] !mt-4 md:!mt-0"
          hasDiv={false}
          visible={false}
        />
        <Frame7 />
        <Frame8 />
        <SideBar />
        <Footer3 />
      </div>
    </div>
  );
};

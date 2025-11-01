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
      className="bg-grey1-bg w-full min-w-[1440px] min-h-[2729px] relative"
      data-model-id="322:5177"
    >
      <Header4 />
      <BreadcrumbsList
        breadcrumbs2="転職コラム一覧"
        breadcrumbsOne="blue"
        breadcrumbsProp="トップ"
        className="!inline-flex !absolute !left-10 !w-[unset] !top-[162px]"
        hasDiv={false}
        visible={false}
      />
      <SideBar />
      <Footer3 />
      <Frame7 />
      <Frame8 />
    </div>
  );
};

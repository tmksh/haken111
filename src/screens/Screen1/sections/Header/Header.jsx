import React from "react";
import { HeaderWrapper } from "../../../../components/HeaderWrapper";
import { NavTabWrapper } from "../../../../components/NavTabWrapper";
import { Bookmarksimple } from "../../../../icons/Bookmarksimple";
import { Buildingoffice } from "../../../../icons/Buildingoffice";
import { Heart1 } from "../../../../icons/Heart1";
import { Signin2 } from "../../../../icons/Signin2";
import { User1 } from "../../../../icons/User1";

export const Header = () => {
  return (
    <div className="flex flex-col w-[1440px] items-start absolute top-0 left-0">
      <HeaderWrapper
        className="!self-stretch !left-[unset] !w-full !top-[unset]"
        navIcon={
          <Buildingoffice
            className="!relative !w-5 !h-5 !aspect-[1]"
            color="#222222"
          />
        }
        navIcon1={
          <Bookmarksimple
            className="!relative !w-5 !h-5 !aspect-[1]"
            color="#222222"
          />
        }
        navIcon2={
          <User1 className="!relative !w-5 !h-5 !aspect-[1]" color="#222222" />
        }
        navIcon3={
          <Signin2
            className="!relative !w-5 !h-5 !aspect-[1]"
            color="#222222"
          />
        }
        override={
          <Heart1 className="!relative !w-5 !h-5 !aspect-[1]" color="#222222" />
        }
      />
      <NavTabWrapper className="!self-stretch !flex-[0_0_auto] !flex !left-[unset] !w-full !top-[unset]" />
    </div>
  );
};

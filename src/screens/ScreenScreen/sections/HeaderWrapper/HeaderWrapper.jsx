import React from "react";
import { Header7 } from "../../../../components/Header7";
import { NavTabWrapper } from "../../../../components/NavTabWrapper";
import { Bookmarksimple2 } from "../../../../icons/Bookmarksimple2";
import { Buildingoffice } from "../../../../icons/Buildingoffice";
import { Heart1 } from "../../../../icons/Heart1";
import { Signin2 } from "../../../../icons/Signin2";
import { User1 } from "../../../../icons/User1";

export const HeaderWrapper = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto h-auto md:h-[138px] flex-col items-start flex relative">
      <Header7
        className="!self-stretch !left-[unset] !w-full !top-[unset]"
        navIcon={
          <Buildingoffice
            className="!relative !w-5 !h-5 !aspect-[1]"
            color="#222222"
          />
        }
        navIcon1={
          <Bookmarksimple2
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
      <NavTabWrapper
        className="!self-stretch !flex-[0_0_auto] !flex !left-[unset] !w-full !top-[unset]"
        navTabOne="off"
      />
    </div>
  );
};

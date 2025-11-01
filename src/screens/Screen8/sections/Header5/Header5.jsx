import React from "react";
import { Header7 } from "../../../../components/Header7";
import { NavTabWrapper } from "../../../../components/NavTabWrapper";
import { Bookmarksimple2 } from "../../../../icons/Bookmarksimple2";
import { Buildingoffice } from "../../../../icons/Buildingoffice";
import { Heart1 } from "../../../../icons/Heart1";
import { Signin2 } from "../../../../icons/Signin2";
import { User1 } from "../../../../icons/User1";

export const Header5 = () => {
  return (
    <div className="flex flex-col w-[1440px] items-start absolute top-0 left-0">
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
        navTabOne="on"
        to="/u36578u32887u30456u35527u12504u12442u12540u12471u12441"
        to1="/u12467u12521u12512u19968u35239"
        to2="/u12362u21839u12356u21512u12431u12379"
      />
    </div>
  );
};

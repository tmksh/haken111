/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Link } from "react-router-dom";
import { Bookmarksimple } from "../../icons/Bookmarksimple";
import { Buildingoffice } from "../../icons/Buildingoffice";
import { Heart1 } from "../../icons/Heart1";
import { Signin2 } from "../../icons/Signin2";
import { User1 } from "../../icons/User1";
import { Nav } from "../Nav";

export const HeaderWrapper = ({
  className,
  navIcon = (
    <Buildingoffice
      className="!relative !w-5 !h-5 !aspect-[1]"
      color="#222222"
    />
  ),
  override = (
    <Heart1 className="!relative !w-5 !h-5 !aspect-[1]" color="#222222" />
  ),
  navIcon1 = (
    <Bookmarksimple
      className="!relative !w-5 !h-5 !aspect-[1]"
      color="#222222"
    />
  ),
  navIcon2 = (
    <User1 className="!relative !w-5 !h-5 !aspect-[1]" color="#222222" />
  ),
  navIcon3 = (
    <Signin2 className="!relative !w-5 !h-5 !aspect-[1]" color="#222222" />
  ),
}) => {
  return (
    <div
      className={`flex flex-col w-[1440px] h-20 items-start justify-around gap-2.5 px-10 py-[11px] relative top-[4893px] left-[163px] bg-white ${className}`}
    >
      <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
        <Link to="/" className="inline-flex items-center justify-center gap-2.5 p-2.5 relative flex-[0_0_auto] bg-neutral-100 hover:opacity-80 transition-opacity cursor-pointer">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-black text-text text-[28px] tracking-[0] leading-[36.6px] whitespace-nowrap">
            ロゴ
          </div>
        </Link>

        <div className="gap-10 inline-flex items-center relative flex-[0_0_auto]">
          <Nav
            className="!flex-[0_0_auto] !left-[unset] !top-[unset]"
            icon={navIcon}
            prop="求人掲載を検討中の企業さま"
            to="/企業向け"
          />
          <Nav
            className="!flex-[0_0_auto] !left-[unset] !top-[unset]"
            icon={override}
            prop="いいねした求人"
          />
          <Nav
            className="!flex-[0_0_auto] !left-[unset] !top-[unset]"
            icon={navIcon1}
            prop="気になる"
          />
          <Nav
            className="!flex-[0_0_auto] !left-[unset] !top-[unset]"
            icon={navIcon2}
            prop="会員登録"
          />
          <Nav
            className="!flex-[0_0_auto] !left-[unset] !top-[unset]"
            icon={navIcon3}
            prop="ログイン"
          />
        </div>
      </div>
    </div>
  );
};

/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Bookmarksimple } from "../../icons/Bookmarksimple";
import { Buildingoffice } from "../../icons/Buildingoffice";
import { Heart1 } from "../../icons/Heart1";
import { Signin2 } from "../../icons/Signin2";
import { User1 } from "../../icons/User1";
import { X } from "../../icons/X";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div
      className={`flex flex-col w-full max-w-[1440px] mx-auto h-auto md:h-20 items-start justify-around gap-2.5 px-4 md:px-10 py-3 md:py-[11px] relative bg-white ${className}`}
    >
      <div className="flex flex-row items-center justify-between relative self-stretch w-full flex-[0_0_auto] gap-4">
        <Link to="/" className="inline-flex items-center justify-center gap-2.5 p-2.5 relative flex-[0_0_auto] bg-neutral-100 hover:opacity-80 transition-opacity cursor-pointer">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-black text-text text-[20px] md:text-[28px] tracking-[0] leading-[26px] md:leading-[36.6px] whitespace-nowrap">
            ロゴ
          </div>
        </Link>

        {/* SP版・タブレット版: ハンバーガーメニューボタン */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden inline-flex items-center justify-center p-2 relative flex-[0_0_auto] cursor-pointer bg-transparent border-none outline-none"
          aria-label="メニュー"
        >
          {isMenuOpen ? (
            <X className="!relative !w-6 !h-6 !aspect-[1]" color="#222222" />
          ) : (
            <div className="flex flex-col gap-1.5">
              <div className="w-6 h-0.5 bg-[linear-gradient(90deg,rgba(137,185,41,1)_0%,rgba(87,195,132,1)_50%,rgba(17,165,177,1)_100%)]"></div>
              <div className="w-6 h-0.5 bg-[linear-gradient(90deg,rgba(137,185,41,1)_0%,rgba(87,195,132,1)_50%,rgba(17,165,177,1)_100%)]"></div>
              <div className="w-6 h-0.5 bg-[linear-gradient(90deg,rgba(137,185,41,1)_0%,rgba(87,195,132,1)_50%,rgba(17,165,177,1)_100%)]"></div>
            </div>
          )}
        </button>

        {/* SP版・タブレット版: ハンバーガーメニュー */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
            <div className="flex flex-col gap-4 p-4">
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
        )}

        {/* PC版: 通常のナビゲーション */}
        <div className="hidden lg:flex gap-4 md:gap-10 items-center relative flex-[0_0_auto] justify-center">
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

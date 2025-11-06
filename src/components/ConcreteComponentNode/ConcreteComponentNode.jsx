/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { X } from "../../icons/X";

export const ConcreteComponentNode = ({ className }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div
      className={`flex flex-col w-full max-w-[1440px] h-auto md:h-20 items-start gap-2.5 px-4 md:px-14 py-3 md:py-[11px] relative bg-white shadow-[0px_0px_9px_#0000001c] mx-auto ${className}`}
    >
      <div className="flex flex-row w-full items-center justify-between relative flex-[0_0_auto] gap-4">
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
              <Link 
                to="/" 
                className="leading-[normal] relative w-fit [font-family:'Inter',Helvetica] font-semibold text-text text-sm text-center tracking-[0] whitespace-nowrap hover:underline"
                onClick={() => setIsMenuOpen(false)}
              >
                ホーム
              </Link>

              <Link 
                to="/企業向け" 
                className="leading-4 relative w-fit [font-family:'Inter',Helvetica] font-semibold text-text text-sm text-center tracking-[0] hover:underline"
                onClick={() => setIsMenuOpen(false)}
              >
                企業様はこちら
              </Link>

              <div className="leading-4 relative w-fit [font-family:'Inter',Helvetica] font-semibold text-text text-sm text-center tracking-[0] whitespace-nowrap">
                登録
              </div>

              <div className="leading-4 relative w-fit [font-family:'Inter',Helvetica] font-semibold text-text text-sm text-center tracking-[0] whitespace-nowrap">
                いいね
              </div>

              <div className="flex w-auto h-10 items-center justify-center gap-2.5 px-4 py-2.5 relative bg-blue rounded-lg">
                <div className="relative w-fit [font-family:'Noto_Sans_JP',Helvetica] font-bold text-white text-sm text-center tracking-[0] leading-4 whitespace-nowrap">
                  ログイン
                </div>
              </div>
            </div>
          </div>
        )}

        {/* PC版: 通常のナビゲーション */}
        <div className="hidden lg:flex flex-wrap md:inline-flex items-center gap-4 md:gap-10 relative flex-[0_0_auto] justify-center">
          <Link to="/" className="leading-[normal] relative w-fit [font-family:'Inter',Helvetica] font-semibold text-text text-sm md:text-base text-center tracking-[0] whitespace-nowrap hover:underline">
            ホーム
          </Link>

          <Link to="/企業向け" className="leading-4 relative w-fit [font-family:'Inter',Helvetica] font-semibold text-text text-sm md:text-base text-center tracking-[0] hover:underline hidden md:block">
            求人掲載を検討中の企業様はこちら
          </Link>
          
          <Link to="/企業向け" className="leading-4 relative w-fit [font-family:'Inter',Helvetica] font-semibold text-text text-sm md:text-base text-center tracking-[0] hover:underline md:hidden">
            企業様はこちら
          </Link>

          <div className="leading-4 relative w-fit [font-family:'Inter',Helvetica] font-semibold text-text text-sm md:text-base text-center tracking-[0] whitespace-nowrap">
            登録
          </div>

          <div className="leading-4 relative w-fit [font-family:'Inter',Helvetica] font-semibold text-text text-sm md:text-base text-center tracking-[0] whitespace-nowrap">
            いいね
          </div>

          <div className="flex w-auto md:w-[151px] h-10 md:h-11 items-center justify-center gap-2.5 px-4 md:px-6 py-2.5 md:py-3.5 relative bg-blue rounded-lg">
            <div className="relative w-fit [font-family:'Noto_Sans_JP',Helvetica] font-bold text-white text-sm md:text-base text-center tracking-[0] leading-4 whitespace-nowrap">
              ログイン
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

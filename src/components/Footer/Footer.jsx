/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Link } from "react-router-dom";

export const Footer = ({ className }) => {
  return (
    <div
      className={`flex w-full max-w-[1440px] mx-auto items-center justify-center gap-6 md:gap-11 px-4 md:px-[58px] py-6 relative bg-white ${className}`}
    >
      <p className="relative w-fit mt-[-1.00px] [font-family:'Open_Sans',Helvetica] font-normal text-text text-xs text-center tracking-[0] leading-3 whitespace-nowrap">
        © 2023 派遣市場. All rights reserved.
      </p>

      <Link
        className="relative w-fit mt-[-1.00px] [font-family:'Open_Sans',Helvetica] font-normal text-text text-xs text-center tracking-[0] leading-3 whitespace-nowrap block hover:underline"
        to="/u21033u29992u35215u32004"
      >
        利用規約
      </Link>
    </div>
  );
};

/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

export const Footer6 = ({ className, to }) => {
  return (
    <div className={`flex flex-col w-full items-center relative bg-white ${className}`}>
      {/* Colorful bar at the top */}
      <div className="w-full h-1 flex">
        <div className="flex-1 bg-[#89b929]"></div>
        <div className="flex-1 bg-[#57c384]"></div>
        <div className="flex-1 bg-[#e8d97c]"></div>
        <div className="flex-1 bg-[#11a5b1]"></div>
      </div>
      
      {/* Copyright and Terms section */}
      <div className="flex flex-col md:flex-row w-full items-center justify-center gap-4 md:gap-11 px-4 md:px-[58px] py-6">
        <p className="relative w-fit mt-[-1.00px] [font-family:'Open_Sans',Helvetica] font-normal text-text text-[10px] md:text-xs text-center tracking-[0] leading-3 whitespace-nowrap">
          © 2023 派遣市場. All rights reserved.
        </p>

        <Link
          className="relative w-fit mt-[-1.00px] [font-family:'Open_Sans',Helvetica] font-normal text-text text-[10px] md:text-xs text-center tracking-[0] leading-3 whitespace-nowrap block hover:underline"
          to={to}
        >
          利用規約
        </Link>
      </div>
    </div>
  );
};

Footer6.propTypes = {
  to: PropTypes.string,
};

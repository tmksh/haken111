/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

export const Footer6 = ({ className, to }) => {
  return (
    <div
      className={`flex w-[1440px] items-center justify-center gap-11 px-[58px] py-6 relative top-[588px] left-[103px] bg-white ${className}`}
    >
      <p className="relative w-fit mt-[-1.00px] [font-family:'Open_Sans',Helvetica] font-normal text-text text-xs text-center tracking-[0] leading-3 whitespace-nowrap">
        © 2025 派遣市場. All rights reserved.
      </p>

      <Link
        className="relative w-fit mt-[-1.00px] [font-family:'Open_Sans',Helvetica] font-normal text-text text-xs text-center tracking-[0] leading-3 whitespace-nowrap block"
        to={to}
      >
        利用規約
      </Link>
    </div>
  );
};

Footer6.propTypes = {
  to: PropTypes.string,
};

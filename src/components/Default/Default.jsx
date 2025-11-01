/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { Magnifyingglass1 } from "../../icons/Magnifyingglass1";

export const Default = ({ className, to }) => {
  return (
    <Link
      className={`flex w-[230px] h-[50px] items-center gap-1 p-3.5 relative top-[798px] left-[103px] bg-blue rounded-lg ${className}`}
      to={to}
    >
      <Magnifyingglass1
        className="!relative !w-4 !h-4 !aspect-[1]"
        color="white"
      />
      <div className="relative flex-1 [font-family:'Noto_Sans_JP',Helvetica] font-medium text-white text-sm tracking-[0] leading-[14px]">
        検索
      </div>

      <div className="inline-flex items-center justify-center gap-2.5 px-2 py-1 relative flex-[0_0_auto] bg-white rounded-sm">
        <p className="relative w-[61px] mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-normal text-blue text-sm text-center tracking-[0] leading-[14px]">
          <span className="font-medium">1</span>

          <span className="font-bold">,</span>

          <span className="font-medium">247件</span>
        </p>
      </div>
    </Link>
  );
};

Default.propTypes = {
  to: PropTypes.string,
};

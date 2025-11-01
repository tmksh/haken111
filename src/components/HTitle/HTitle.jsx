/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const HTitle = ({ prop = "H1見出し", className }) => {
  return (
    <div
      className={`inline-flex items-center justify-center gap-2.5 relative top-[7545px] left-[164px] ${className}`}
    >
      <div className="relative w-fit mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-bold text-text text-2xl tracking-[0] leading-6 whitespace-nowrap">
        {prop}
      </div>
    </div>
  );
};

HTitle.propTypes = {
  prop: PropTypes.string,
};

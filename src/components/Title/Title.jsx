/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Title = ({ prop = "H3見出し", className, divClassName }) => {
  return (
    <div
      className={`inline-flex items-center justify-center gap-2.5 relative top-[7748px] left-[163px] ${className}`}
    >
      <div
        className={`relative w-fit mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-bold text-text text-lg tracking-[0] leading-[18px] whitespace-nowrap ${divClassName}`}
      >
        {prop}
      </div>
    </div>
  );
};

Title.propTypes = {
  prop: PropTypes.string,
};

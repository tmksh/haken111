/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Title = ({ prop = "H3見出し", className, divClassName }) => {
  return (
    <div
      className={`flex items-center justify-start md:justify-center gap-2.5 relative w-full ${className}`}
    >
      <div
        className={`relative w-full mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-bold text-text text-sm md:text-lg tracking-[0] leading-5 md:leading-[18px] break-words ${divClassName}`}
      >
        {prop}
      </div>
    </div>
  );
};

Title.propTypes = {
  prop: PropTypes.string,
};

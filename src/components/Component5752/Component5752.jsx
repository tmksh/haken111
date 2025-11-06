/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Component5752 = ({
  prop = "第1位：なぜ税理士業界を選んだのですか？",
  className,
}) => {
  return (
    <div
      className={`inline-flex items-center justify-center gap-2 md:gap-2.5 pl-3 pr-0 py-0 relative border-l-[3px] [border-left-style:solid] border-blue w-full ${className}`}
    >
      <div className="relative w-full mt-[-3.00px] [font-family:'Noto_Sans_JP',Helvetica] font-bold text-text text-base md:text-lg tracking-[0] leading-[20px] md:leading-[18px] break-words">
        {prop}
      </div>
    </div>
  );
};

Component5752.propTypes = {
  prop: PropTypes.string,
};

/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const ListTtile = ({
  prop = "料金形態・費用",
  className,
  divClassName,
}) => {
  return (
    <div
      className={`flex w-[220px] h-[98px] items-center justify-center gap-2.5 px-[53px] py-[41px] relative top-[6081px] left-[973px] bg-white border-t [border-top-style:solid] border-grey-3 ${className}`}
    >
      <div
        className={`relative w-fit mt-[-3.00px] mb-[-1.00px] ml-[-13.00px] mr-[-13.00px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-text text-xl text-center tracking-[0] leading-5 whitespace-nowrap ${divClassName}`}
      >
        {prop}
      </div>
    </div>
  );
};

ListTtile.propTypes = {
  prop: PropTypes.string,
};

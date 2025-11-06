/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const JobDetails = ({
  prop = "募集背景",
  prop1 = "増員募集です！",
  className,
  divClassName,
}) => {
  return (
    <div
      className={`flex flex-col md:flex-row w-full md:w-[954px] items-start md:items-center gap-2 md:gap-4 relative ${className}`}
    >
      <div className="flex w-[72px] h-[26px] items-center justify-center gap-1.5 px-2 py-1.5 relative bg-grey-2 rounded-sm">
        <div className="w-fit mt-[-1.00px] whitespace-nowrap relative [font-family:'Inter',Helvetica] font-normal text-[#000000] text-sm tracking-[0] leading-[14px]">
          {prop}
        </div>
      </div>

      <div
        className={`flex-1 relative [font-family:'Inter',Helvetica] font-normal text-[#000000] text-sm tracking-[0] leading-[14px] ${divClassName}`}
      >
        {prop1}
      </div>
    </div>
  );
};

JobDetails.propTypes = {
  prop: PropTypes.string,
  prop1: PropTypes.string,
};

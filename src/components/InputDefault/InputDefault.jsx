/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Caretdown3 } from "../../icons/Caretdown3";

export const InputDefault = ({
  prop = "職種を選択",
  className,
  visible = true,
  icon = <Caretdown3 className="!relative !w-4 !h-4 !aspect-[1]" />,
  divClassName,
}) => {
  return (
    <div
      className={`flex w-full h-[44px] md:h-[50px] items-center gap-1 p-3 md:p-3.5 relative bg-white rounded-lg border-[0.92px] border-solid border-grey-3 ${className}`}
    >
      <input
        type="text"
        placeholder={prop}
        className={`relative flex-1 [font-family:'Noto_Sans_JP',Helvetica] font-medium text-text text-sm tracking-[0] leading-[14px] bg-transparent border-none outline-none placeholder:text-grey-4 ${divClassName}`}
      />

      {visible && <>{icon}</>}
    </div>
  );
};

InputDefault.propTypes = {
  prop: PropTypes.string,
  visible: PropTypes.bool,
};

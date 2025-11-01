/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const AvatarIllustration = ({ one, className }) => {
  return (
    <div
      className={`w-14 flex items-center top-5 gap-2.5 h-14 rounded-[28px] bg-grey1-bg relative ${one === "one" ? "left-5" : (one === "two") ? "left-[98px]" : one === "four" ? "left-[254px]" : "left-44"} ${className}`}
    >
      <img
        className="w-14 h-14 relative"
        alt="Mask group"
        src={
          one === "one"
            ? "/img/mask-group-2.png"
            : one === "two"
              ? "/img/mask-group-3.png"
              : one === "four"
                ? "/img/mask-group-4.png"
                : "/img/mask-group-1.png"
        }
      />
    </div>
  );
};

AvatarIllustration.propTypes = {
  one: PropTypes.oneOf(["two", "four", "three", "one"]),
};

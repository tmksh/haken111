/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Avatar = ({
  one,
  className,
  element = "/img/1-1.svg",
  img = "/img/1-2.svg",
  element1 = "/img/1-3.svg",
  element2 = "/img/1-4.svg",
}) => {
  return (
    <img
      className={`w-10 h-10 md:w-11 md:h-11 left-0 top-0 relative md:absolute flex-shrink-0 ${className}`}
      alt="Element"
      src={
        one === "two"
          ? img
          : one === "three"
            ? element1
            : one === "four"
              ? element2
              : element
      }
    />
  );
};

Avatar.propTypes = {
  one: PropTypes.oneOf(["two", "four", "three", "one"]),
  element: PropTypes.string,
  img: PropTypes.string,
  element1: PropTypes.string,
  element2: PropTypes.string,
};

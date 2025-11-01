/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Checkboxes = ({ one, className }) => {
  return (
    <div
      className={`relative top-4 left-4 w-4 h-4 rounded-sm border border-solid border-grey-4 ${className}`}
    />
  );
};

Checkboxes.propTypes = {
  one: PropTypes.oneOf(["default"]),
};

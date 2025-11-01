/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Envelopesimple = ({ color = "#ABABAB", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="18"
      viewBox="0 0 18 18"
      width="18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.75 3.375H2.25C2.10082 3.375 1.95774 3.43426 1.85225 3.53975C1.74676 3.64524 1.6875 3.78832 1.6875 3.9375V13.5C1.6875 13.7984 1.80603 14.0845 2.017 14.2955C2.22798 14.5065 2.51413 14.625 2.8125 14.625H15.1875C15.4859 14.625 15.772 14.5065 15.983 14.2955C16.194 14.0845 16.3125 13.7984 16.3125 13.5V3.9375C16.3125 3.78832 16.2532 3.64524 16.1477 3.53975C16.0423 3.43426 15.8992 3.375 15.75 3.375ZM14.3037 4.5L9 9.36211L3.69633 4.5H14.3037ZM15.1875 13.5H2.8125V5.21648L8.61961 10.5398C8.72338 10.6351 8.85913 10.688 9 10.688C9.14087 10.688 9.27661 10.6351 9.38039 10.5398L15.1875 5.21648V13.5Z"
        fill={color}
      />
    </svg>
  );
};

Envelopesimple.propTypes = {
  color: PropTypes.string,
};

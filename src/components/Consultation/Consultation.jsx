/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Consultation = ({ one, className }) => {
  return (
    <div
      className={`aspect-[1.56] w-[302px] top-5 bg-[100%_100%] h-[193px] relative ${one === "online" ? "left-5" : (one === "phone") ? "left-[331px]" : one === "chat" ? "left-[953px]" : "left-[642px]"} ${one === "online" ? "bg-[url(/img/consultation-online-1.png)]" : (one === "phone") ? "bg-[url(/img/consultation-phone.png)]" : one === "chat" ? "bg-[url(/img/consultation-chat.png)]" : "bg-[url(/img/consultation-line.png)]"} ${className}`}
    />
  );
};

Consultation.propTypes = {
  one: PropTypes.oneOf(["line", "chat", "online", "phone"]),
};

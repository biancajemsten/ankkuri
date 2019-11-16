import React from "react";
import { Link } from "react-router-dom";

import { CTAWrapper } from "./Cta.style";

export default props => {
  //pass ctaType as either 'button' or 'a'
  const CTAElement = props.ctaType;

  return (
    <CTAWrapper>
      {props.ctaType === "Link" ? (
        <Link to={props.href ? props.href : ""} className="button">
          {props.children}
        </Link>
      ) : (
        <CTAElement>{props.children}</CTAElement>
      )}
    </CTAWrapper>
  );
};
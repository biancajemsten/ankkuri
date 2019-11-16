import React from "react";

export default props => {
  const HeadingElement = props.headingLevel;
  return <HeadingElement>{props.children}</HeadingElement>;
};

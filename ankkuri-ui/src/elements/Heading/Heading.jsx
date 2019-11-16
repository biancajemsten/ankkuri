import React from "react";

export default props => {
  const HeadingElement = props.headingLevel;
  console.log(props.children);
  return <HeadingElement>{props.children}</HeadingElement>;
};

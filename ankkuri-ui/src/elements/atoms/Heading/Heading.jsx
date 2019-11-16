import React from "react";

export default props => {
  const HeadingElement = props.headingLevel;
  return (
    <HeadingElement className={`heading-${HeadingElement}`}>
      {props.children}
    </HeadingElement>
  );
};

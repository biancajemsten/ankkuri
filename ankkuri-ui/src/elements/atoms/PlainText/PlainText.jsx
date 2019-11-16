import React from "react";

import { PlainTextWrapper } from "./PlainText.style";

export default props => {
  const { children } = props;

  return <PlainTextWrapper>{children}</PlainTextWrapper>;
};

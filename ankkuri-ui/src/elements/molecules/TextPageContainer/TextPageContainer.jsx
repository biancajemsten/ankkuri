import React from "react";
import { Wrapper, ContentContainer } from "./TextPageContainer.style";

const TextPageContainer = ({ children }) => (
  <Wrapper>
    <ContentContainer>{children}</ContentContainer>
  </Wrapper>
);

export default TextPageContainer;

// packages
import React from "react";

// Components

// Styles
import { Wrapper } from "./WavesContainer.style";
import { ArticleBanner } from "..";

const WavesContainer = ({ children, waveColor }) => (
  <Wrapper waveColor={waveColor}>{children}</Wrapper>
);

export default WavesContainer;

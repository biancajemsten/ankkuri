// packages
import React from "react";

// Components

// Styles
import { Wrapper } from "./WavesContainer.style";

const WavesContainer = ({ children, waveColor }) => (
  <Wrapper waveColor={waveColor}>{children}</Wrapper>
);

export default WavesContainer;

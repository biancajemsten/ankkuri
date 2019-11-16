// packages
import React from "react";

// Components

// Styles
import { Wrapper } from './WavesContainer.style';
import { ArticleBanner } from '..';

const WavesContainer = ({waveColor}) => (
  <Wrapper waveColor={waveColor}>
    <ArticleBanner />
  </Wrapper>
);

export default WavesContainer;

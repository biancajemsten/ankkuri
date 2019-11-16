// packages
import React from "react";

// Components
import { Heading, PlainText, Cta } from '../../atoms'

// Styles
import { Wrapper } from './TopBanner.style';

const TopBanner = () => (
  <Wrapper>
    <Heading headingLevel="h1">Wake up with us</Heading>
    <PlainText>
      The app that helps you get up on the right side of bed
    </PlainText>
    <Cta ctaType="Link" href="/create-routine">
      Create a routine
    </Cta>
  </Wrapper>
);

export default TopBanner;

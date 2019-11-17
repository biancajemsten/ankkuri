// packages
import React from "react";

// Components
import { Heading, Cta } from "../../atoms";

// Styles
import { Wrapper } from "./TopBanner.style";

const TopBanner = () => (
  <Wrapper>
    <Heading headingLevel="h1">Wake up with us</Heading>
    <h2 className="h5">
      The app that helps you get up on the right side of bed
    </h2>
    <Cta ctaType="Link" href="/create-routine">
      Create a routine
    </Cta>
  </Wrapper>
);

export default TopBanner;

import React from "react";

import { Heading, PlainText, Cta } from "../../elements";
import { HomePanelWrapper } from "./HomePanel.style";

export default () => (
  <HomePanelWrapper>
    <Heading headingLevel="h2">Wake up with us</Heading>
    <PlainText>
      The app that helps you get up on the right side of bed
    </PlainText>
    <Cta ctaType="Link" href="/create-routine">
      Create a routine
    </Cta>
  </HomePanelWrapper>
);

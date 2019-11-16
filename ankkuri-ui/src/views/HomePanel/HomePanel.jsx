import React from "react";

// Components
import { TopBanner, ArticleBanner } from "../../elements/molecules";
import { WavesContainer } from "../../elements/molecules";

// Styles
import { HomePanelWrapper } from "./HomePanel.style";

export default () => (
  <HomePanelWrapper>
    <TopBanner />
    <WavesContainer>
      <ArticleBanner />
    </WavesContainer>
  </HomePanelWrapper>
);

import React from "react";

// Components
import { TopBanner, ArticleBanner } from "../../elements/molecules";

// Styles
import { HomePanelWrapper } from "./HomePanel.style";

export default () => (
  <HomePanelWrapper>
    <TopBanner />
    <ArticleBanner />
  </HomePanelWrapper>
);

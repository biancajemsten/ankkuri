import React from "react";

// Components
import { TopBanner, ArticleBanner, Footer } from "../../elements/molecules";
import { WavesContainer } from "../../elements/molecules";

import Mobile from "../../assets/app-screenshot.png";

// Styles
import { HomePanelWrapper, MarketingContainer } from "./HomePanel.style";
import { Cta } from "../../elements/atoms";

export default () => (
  <HomePanelWrapper>
    <TopBanner />
    <WavesContainer>
      <ArticleBanner />

      <MarketingContainer>
        <div>
          <h2 className="h3">Experience the voice app</h2>
          <img src={Mobile} alt="mobile app sign in" />
          <div>
            <p>
              Our app can be used by anyone. You can start using Ankkuri
              straight away, simply follow the link below to register with
              Alexa.
            </p>

            <a
              href={`https://ankkuri.auth.eu-west-1.amazoncognito.com/login?client_id=6ktheufil9bvtg3sd60jn3rmj9&response_type=code&scope=email+openid+phone&redirect_uri=https://alexa.amazon.co.jp/api/skill/link/M34P9F0WA9RXDM`}
            >
              Go to App
            </a>

            <blockquote>'No structure. No purpose. No peace.’</blockquote>
            <p>- Benjamin Folley, Medium</p>

            <p className="align-left">
              ‘Studies have shown that when you change your morning routine to
              one that is geared towards reducing your levels of stress, it can
              help to decrease your chances for feeling anxious both in the
              morning, as well as later in the day.’ Health Europa. This sounds
              great but not always easy to put into practise. That’s why our
              Alexa skill, which starts when our users do, will prompt to
              complete the routine and establish the positive anchors, making
              mornings that bit more managebale
            </p>
          </div>
        </div>
      </MarketingContainer>

      <Footer>
        
      </Footer>
    </WavesContainer>
  </HomePanelWrapper>
);

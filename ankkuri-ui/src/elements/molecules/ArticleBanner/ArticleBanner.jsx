import React from "react";
import { Heading, PlainText, Cta } from "../../atoms";
import { ArticleBannerWrapper } from "./ArticleBanner.style";

import img from "../../../assets/people.png";
import Row from "../../atoms/Row/Row";
import Column from "../../atoms/Column/Column";

export default () => (
  <ArticleBannerWrapper>
    <h3>The Science</h3>
    <Row>
      <Column md={6}>
        <div>
          <blockquote>
            "Having a morning routine can increase your energy, productivity and
            positivity."
            <br />
          </blockquote>
          <p className="quoteBy">
            - Luna Greenstein, National Alliance on Mental Illness
          </p>
          <PlainText>
            Do you find yourself struggling to get up? Are you constantly
            forgetting if you've locked your house or turned your straighteners
            off? There's a science behind having a good morning routine, it can
            set you up for a day of success.
          </PlainText>
          <Cta ctaType="Link" href="/the-science">
            Read more about the science
          </Cta>
        </div>
      </Column>
      <Column lg={6}>
        <img src={img} alt="" />
      </Column>
    </Row>
  </ArticleBannerWrapper>
);

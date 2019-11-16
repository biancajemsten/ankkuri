import React from "react";
import { Heading, PlainText, Cta } from "../../atoms";
import { ArticleBannerWrapper } from "./ArticleBanner.style";

import img from "../../../assets/people.png";

export default () => (
  <ArticleBannerWrapper>
    <Heading headingLevel="h2">The Science</Heading>
    <div className="left-container">
      <blockquote>
        <span className="quoteMarks">"</span>Having a morning routine can
        increase your energy, productivity and positivity. It also generates
        momentum, building up to the brain’s peak time for cognitive work
        <span className="quoteMarks">"</span> - Luna Greenstein, National
        Alliance on Mental Illness
      </blockquote>
      <PlainText>
        Do you find yourself struggling to get up? Are you constantly forgetting
        if you've locked your house or turned your straighteners off? There's a
        science behind having a good morning routine, it can set you up for a
        day of success.
      </PlainText>
      <Cta ctaType="Link" href="/the-science">
        Read more about the science
      </Cta>
    </div>
    <img src={img} alt="" />
  </ArticleBannerWrapper>
);

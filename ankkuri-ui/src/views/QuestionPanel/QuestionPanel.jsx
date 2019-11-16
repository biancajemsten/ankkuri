import React from "react";
import { QuestionPanelWrapper } from "./QuestionPanel.style";
import { Heading } from "../../elements/atoms";

export default () => (
  <QuestionPanelWrapper>
    <div className="tophalf">
      <Heading headingLevel="h1">Tell us about yourself</Heading>
    </div>
    <div className="bottomhalf">
      <h2></h2>
    </div>
  </QuestionPanelWrapper>
);

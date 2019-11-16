import React from "react";
import { QuestionPanelWrapper } from "./QuestionPanel.style";
import { Heading, PlainText } from "../../elements/atoms";
import { Cta } from "../../elements/atoms";

export default ({ question }) => {
  return (
    <QuestionPanelWrapper>
      <div className="bottomhalf">
        {question === "end-of-questions" ? (
          <div>Heres your morning routine:</div>
        ) : (
          <>
            <Heading headingLevel="h2">{question.sectionHeading}</Heading>
            <PlainText>{question.question}</PlainText>
            {question.answerType === "string" ? (
              <input className="questionPanel-input" type="text" name="fname" />
            ) : (
              <div className="button-container">
                {question.answerOptions.map(el => (
                  <Cta ctaType="button" className="select">
                    {el}
                  </Cta>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </QuestionPanelWrapper>
  );
};

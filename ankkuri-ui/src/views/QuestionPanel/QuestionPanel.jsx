import React from "react";
import { QuestionPanelWrapper } from "./QuestionPanel.style";
import { Heading, PlainText } from "../../elements/atoms";
import { Cta } from "../../elements/atoms";

export default ({ question }) => {
  return (
    <QuestionPanelWrapper>
      {question === "end-of-questions" ? (
        <div>
          <Heading headingLevel="h5">
            Go to your profile to see your personal morning routine.
          </Heading>
        </div>
      ) : (
        <>
          <Heading headingLevel="h2">{question.sectionHeading}</Heading>
          <PlainText>{question.question}</PlainText>

          {question.answerType === "string" ? (
            <input className="questionPanel-input" type="text" name="fname" />
          ) : (
            <div className="button-container">
              {question.answerOptions.map((el, index) => (
                <Cta
                  ctaType="button"
                  key={index + Math.random()}
                  className={`select`}
                >
                  {el}
                </Cta>
              ))}
            </div>
          )}
        </>
      )}
    </QuestionPanelWrapper>
  );
};

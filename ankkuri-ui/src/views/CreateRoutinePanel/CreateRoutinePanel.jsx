import React, { useState } from "react";
import QuestionPanel from "../QuestionPanel/QuestionPanel";
import { questionData } from "../../config/create-routine-questions";
import { Cta, Heading } from "../../elements/atoms";
import { WavesContainer } from "../../elements/molecules";

import { CreateRoutineWrapper } from "./CreateRoutine.style";

export default () => {
  const [questionIndex, setIndex] = useState(0);

  return (
    <CreateRoutineWrapper>
      <div className="top-banner">
        <Heading headingLevel="h1">Tell us about yourself</Heading>
      </div>
      <WavesContainer waveColor="primary">
        <div className="question-panel">
          <QuestionPanel
            question={
              questionIndex < questionData.length
                ? questionData[questionIndex]
                : "end-of-questions"
            }
          />

          {questionIndex < questionData.length ? (
            <Cta
              ctaType="button"
              handleClick={() => setIndex(questionIndex + 1)}
            >
              {questionIndex < questionData.length - 1
                ? "Next question"
                : "Finish"}
            </Cta>
          ) : (
            <Cta ctaType="Link" href="/profile">
              See your results here
            </Cta>
          )}
        </div>
      </WavesContainer>
    </CreateRoutineWrapper>
  );
};

import React, { useState } from "react";
import QuestionPanel from "../QuestionPanel/QuestionPanel";
import { questionData } from "../../config/create-routine-questions";
import { Cta, Heading } from "../../elements/atoms";

import { CreateRoutineWrapper } from "./CreateRoutine.style";

export default () => {
  const [questionIndex, setCount] = useState(0);

  return (
    <CreateRoutineWrapper>
      <div className="tophalf">
        <Heading headingLevel="h1">Tell us about yourself</Heading>
      </div>
      <div className="bottomhalf">
        <QuestionPanel
          question={
            questionIndex < questionData.length
              ? questionData[questionIndex]
              : "end-of-questions"
          }
        />

        {questionIndex < questionData.length ? (
          <Cta ctaType="button" handleClick={() => setCount(questionIndex + 1)}>
            {questionIndex < questionData.length - 1
              ? "Next question"
              : "Finish"}
          </Cta>
        ) : null}
      </div>
    </CreateRoutineWrapper>
  );
};

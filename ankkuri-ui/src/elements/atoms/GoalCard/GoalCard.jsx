import React from "react";

// Styles
import { Wrapper, CircleContainer } from "./GoalCard.style";
import Circle from './Circle';

const GoalCard = ({ progress, maxDays }) => (
  <Wrapper>
    <CircleContainer>
      <Circle />
      <h5>
        <span role="nothing">{progress}</span>
        days
      </h5>
    </CircleContainer>
    <p className="maxDays">of your {maxDays} day goal</p>
  </Wrapper>
);

export default GoalCard;

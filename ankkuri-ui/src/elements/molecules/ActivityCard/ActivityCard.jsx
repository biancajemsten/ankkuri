import React from "react";

import { Wrapper, ImageContainer } from "./ActivityCard.style";

const ActivityCard = ({ icon, title, time }) => (
  <Wrapper>
    <ImageContainer>
      <img src={icon} alt="" />
    </ImageContainer>
    <h5>{title}</h5>
    {time ? <p>{time}</p> : null}
  </Wrapper>
);

export default ActivityCard;

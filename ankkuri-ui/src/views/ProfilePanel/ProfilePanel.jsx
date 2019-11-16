import React from "react";

// Components
import Profile from "../../assets/avatar.jpeg";
// Styles
import { Wrapper, ProfileContainer, GoalContainer } from "./ProfilePanel.style";

import { CardsContainer, ActivityCard } from "../../elements/molecules";

import Stretching from "../../assets/icons/stretching.svg";
import Scrolling from "../../assets/icons/scrolling.svg";
import Breakfast from "../../assets/icons/breakfast.svg";
import Shower from "../../assets/icons/shower.svg";
import { GoalCard } from "../../elements/atoms";

export default () => (
  <Wrapper>
    <ProfileContainer>
      <img src={Profile} alt="" className="avatar" />
      <h1 className="h3">Catherine Oxley</h1>
      <p className="streak">5 day streak 🔥</p>

      <h5>My Favourites</h5>
      <CardsContainer>
        <ActivityCard icon={Stretching} title="Stretching" time="5 mins" />
        <ActivityCard icon={Scrolling} title="No Scrolling" />
        <ActivityCard icon={Breakfast} title="Breakfast" />
        <ActivityCard icon={Shower} title="Shower" time="15 mins" />
      </CardsContainer>

      <GoalContainer>
        <h5>Goal Progress</h5>
        <GoalCard progress={5} maxDays={7} />
      </GoalContainer>
    </ProfileContainer>
  </Wrapper>
);

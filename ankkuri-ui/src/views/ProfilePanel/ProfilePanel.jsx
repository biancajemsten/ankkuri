import React, { useState, useEffect } from "react";

// Components
import Profile from "../../assets/avatar.jpeg";
// Styles
import { Wrapper, ProfileContainer, GoalContainer } from "./ProfilePanel.style";

import { CardsContainer, ActivityCard } from "../../elements/molecules";

import Stretching from "../../assets/icons/stretching.svg";
import Scrolling from "../../assets/icons/scrolling.svg";
import Breakfast from "../../assets/icons/breakfast.svg";
import Shower from "../../assets/icons/shower.svg";
import Beverage from "../../assets/icons/beverage.svg";
import { GoalCard } from "../../elements/atoms";
import { getUser } from "../../helpers/apiFunctions";

export default () => {
  const [user, setUser] = useState();
  useEffect(() => {
    async function fetchData() {
      const fetchedUser = await getUser();
      console.log(fetchedUser[0]);

      setUser(fetchedUser[0]);
    }
    fetchData();
  }, []);
  return user ? (
    <Wrapper>
      <ProfileContainer>
        <img src={Profile} alt="" className="avatar" />
        <h1 className="h3">{user.name}</h1>
        <p className="streak">{user.streak} day streak 🔥</p>

        <h5>My Favourites</h5>
        <CardsContainer>
          {user.routine.stretch && (
            <ActivityCard
              icon={Stretching}
              title="Stretching"
              time={`${user.preferences.stretchTime} mins`}
            />
          )}
          {user.routine.socialMedia && (
            <ActivityCard icon={Scrolling} title="No Scrolling" />
          )}
          <ActivityCard icon={Beverage} title="Beverage" />
          {user.routine.shower && (
            <ActivityCard
              icon={Shower}
              title="Shower"
              time={`${user.preferences.showerTime} mins`}
            />
          )}
        </CardsContainer>

        <GoalContainer>
          <h5>Goal Progress</h5>
          <GoalCard progress={user.streak} maxDays={user.goal} />
        </GoalContainer>
      </ProfileContainer>
    </Wrapper>
  ) : (
    <div>Loading ...</div>
  );
};

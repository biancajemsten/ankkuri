import React, { useEffect, useState } from "react";
import { getUser } from "../../helpers/apiFunctions";
import { ProfileWrapper } from "./TestPanel.style";
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
    <ProfileWrapper>Hello {user.name}</ProfileWrapper>
  ) : (
    <ProfileWrapper>Hello</ProfileWrapper>
  );
};

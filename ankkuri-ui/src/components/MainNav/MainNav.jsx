import React from "react";

import { MainNavWrapper } from "./MainNav.style";
import { MenuItem } from "../../elements/atoms";

export default ({isOpen}) => {
  console.log(isOpen);
  return (
    <MainNavWrapper isOpen={isOpen}>
      <ul className="navList">
        <MenuItem linkName="Home" route="/" />
        <MenuItem linkName="The Science" route="/the-science" />
        <MenuItem linkName="Data Privacy" route="/data-privacy" />
        <MenuItem linkName="Profile" route="/profile" />
      </ul>
    </MainNavWrapper>
  );
};

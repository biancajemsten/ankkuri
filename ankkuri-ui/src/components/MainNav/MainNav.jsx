import React from "react";

import { MainNavWrapper } from "./MainNav.style";

import { MenuItem } from "../../elements";

export default () => (
  <MainNavWrapper>
    <ul className="navList">
      <MenuItem linkName="Home" route="/home" />
      <MenuItem linkName="About" route="/about" />
    </ul>
  </MainNavWrapper>
);

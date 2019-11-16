import React from "react";

import { MainNavWrapper } from "./MainNav.style";
import { MenuItem } from "../../elements/atoms";

export default () => (
  <MainNavWrapper>
    <ul className="navList">
      <MenuItem linkName="Home" route="/" />
      <MenuItem linkName="About" route="/about" />
      <MenuItem linkName="Test" route="/test" />
    </ul>
  </MainNavWrapper>
);

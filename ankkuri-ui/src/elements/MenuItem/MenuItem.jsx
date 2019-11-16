import React from "react";
import { NavLink } from "react-router-dom";

import { MenuItemWrapper } from "./MenuItem.style";

export default ({ linkName, route }) => (
  <MenuItemWrapper>
    <NavLink
      exact
      to={`${route}`}
      className="menuItem-link"
      activeClassName="active"
    >
      {linkName}
    </NavLink>
  </MenuItemWrapper>
);

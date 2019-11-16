import React from "react";
import { NavLink } from "react-router-dom";

import { MenuItemWrapper } from "./MenuItem.style";

export default ({ linkName, route }) => (
  <MenuItemWrapper isActive>
    <NavLink
      to={`${route}`}
      className="menuItem-link"
      activeClassName="active"
      onlyActiveOnIndex
    >
      {linkName}
    </NavLink>
  </MenuItemWrapper>
);

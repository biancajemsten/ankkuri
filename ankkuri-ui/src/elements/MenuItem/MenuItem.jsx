import React from "react";
import { Link } from "react-router-dom";

import { MenuItemWrapper } from "./MenuItem.style";

export default ({ linkName, route }) => (
  <MenuItemWrapper>
    <Link to={`${route}`}>{linkName}</Link>
  </MenuItemWrapper>
);

import React from "react";

import { HeaderWrapper } from "./HeaderPanel.style";
import { NavLink } from "react-router-dom";

import { MainNav } from "../../components";

import Logo from "../../assets/logo-small.png";

export default () => (
  <HeaderWrapper>
    <NavLink exact to={`/`} className="menuItem-link" activeClassName="active">
      <img className="logo" src={Logo} alt="ankkuri" />
    </NavLink>
    <MainNav />
  </HeaderWrapper>
);

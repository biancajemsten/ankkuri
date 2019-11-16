import React from "react";

import { HeaderWrapper } from "./HeaderPanel.style";

import { MainNav } from "../../components";

import Logo from "../../assets/logo-small.png";

export default () => (
  <HeaderWrapper>
    <img className="logo" src={Logo} alt="ankkuri" />
    <MainNav />
  </HeaderWrapper>
);

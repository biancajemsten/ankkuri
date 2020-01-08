import React, { useState } from "react";

import { HeaderWrapper, MenuButton } from "./HeaderPanel.style";
import { NavLink } from "react-router-dom";

import { MainNav } from "../../components";

import BurgerIcon from '../../assets/icons/menu.svg';
import Logo from "../../assets/logo-small.png";

export default () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
  <HeaderWrapper>
    <NavLink exact to={`/`} className="menuItem-link" activeClassName="active">
      <img className="logo" src={Logo} alt="ankkuri" />
    </NavLink>
    <MenuButton onClick={() => {
      setIsMenuOpen(!isMenuOpen)}}>
      <img src={BurgerIcon} alt="menu"/>
    </MenuButton>
    <MainNav isOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
  </HeaderWrapper>
)
  }

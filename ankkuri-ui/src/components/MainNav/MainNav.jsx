import React from "react";

import { MainNavWrapper } from "./MainNav.style";
import { MenuItem } from "../../elements/atoms";

export default ({ isOpen, setIsMenuOpen }) => {
  const handleClick = () => {
    setIsMenuOpen(false);
  };
  return (
    <MainNavWrapper isOpen={isOpen}>
      <ul className="navList">
        <MenuItem linkName="Home" route="/" onClick={() => handleClick()} />
        <MenuItem
          linkName="The Science"
          route="/the-science"
          onClick={() => handleClick()}
        />
        <MenuItem
          linkName="Data Privacy"
          route="/data-privacy"
          onClick={() => handleClick()}
        />
        <MenuItem
          linkName="Profile"
          route="/profile"
          onClick={() => handleClick()}
        />
      </ul>
    </MainNavWrapper>
  );
};

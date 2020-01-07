import styled, { css } from "styled-components";

const MainNavWrapper = styled.nav`
  .navList {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  @media (max-width: 660px) {
    position: absolute;
    width: 300px;
    height: 100vh;
    right: 0;
    background: rgba(255,255,255,0.8);
    top: 86px;

    transform: translateX(100%);

    transition: transform 250ms;

    ul {
      li {
        display: block;
        margin: 0;
      }
    }

    ${({ isOpen }) =>
      isOpen &&
      css`
        transform: translateX(0);
      `}
  }
`;

export { MainNavWrapper };

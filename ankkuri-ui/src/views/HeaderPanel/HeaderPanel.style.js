import styled from "styled-components";
import rem from "../../styles/utils/rem";

export const HeaderWrapper = styled.header`
  width: 100%;
  padding: ${({ theme }) =>
    `${rem(theme.spacing.s2)} ${rem(theme.spacing.l2)}`};
  position: fixed;
  top: 0;

  z-index: 10;

  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;

  background-color: rgba(255, 255, 255, 0.8);

  @media screen and (min-width: 660px) and (max-width: 879px) {
    flex-direction: column;
    padding: ${({ theme }) => `${rem(theme.spacing.s2)} 0`};
  }

  .logo {
    height: 50px;
    object-fit: contain;
  }

  @media (max-width: 660px) {
    flex-direction: row;
    padding: ${({ theme }) => rem(theme.spacing.s1)};
    height: 86px;
    .logo {
      margin-top: 15px;
    }
  }
`;

export const MenuButton = styled.button`
  border: none;
  background: transparent;
  padding: 0;
  @media (min-width: 660px) {
    display: none;
  }
`;
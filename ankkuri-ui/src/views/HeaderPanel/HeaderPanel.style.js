import styled from "styled-components";
import rem from "../../styles/utils/rem";

const HeaderWrapper = styled.header`
  width: 100%;
  padding: ${({ theme }) =>
    `${rem(theme.spacing.s2)} ${rem(theme.spacing.l1)}`};
  position: fixed;
  top: 0;

  z-index: 10;

  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;

  background-color: rgba(255, 255, 255, 0.8);

  .logo {
    height: 50px;
    object-fit: contain;
  }
`;

export { HeaderWrapper };

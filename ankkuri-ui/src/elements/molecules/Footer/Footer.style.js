import styled from "styled-components";

import rem from "../../../styles/utils/rem";
import theme from "../../../styles/theme";

export const Wrapper = styled.footer`
  background-color: ${({theme}) => theme.colors.primary};
  width: 100%;
  padding: 50px;
  height: 100vh;
  box-sizing: border-box;
  margin-top: 50px;
  text-align: center;
  color: white;

  img {
    height: 50px;
  }
`;

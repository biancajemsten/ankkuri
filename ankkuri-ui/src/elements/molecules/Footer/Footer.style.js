import styled from "styled-components";

import rem from "../../../styles/utils/rem";
import theme from "../../../styles/theme";

export const Wrapper = styled.footer`
  height: 300px;
  background-color: ${({theme}) => theme.colors.primary};
  width: 100%;
  padding: 50px;
`;

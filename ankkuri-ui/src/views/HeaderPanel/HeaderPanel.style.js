import styled from "styled-components";
import rem from "../../styles/utils/rem";

const HeaderWrapper = styled.header`
  width: 100%;
  padding: ${({theme}) => `${rem(theme.spacing.s3)} ${rem(theme.spacing.l1)}`};

  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;

  .logo {
    max-width: 140px;
    padding: 13px 0;
    object-fit: contain;
  }
`;

export { HeaderWrapper };

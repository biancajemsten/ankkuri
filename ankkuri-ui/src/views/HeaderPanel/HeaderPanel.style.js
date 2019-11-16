import styled from "styled-components";

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;

  .logo {
    max-width: 140px;
    padding: 13px 0;
    object-fit: contain;
  }
`;

export { HeaderWrapper };

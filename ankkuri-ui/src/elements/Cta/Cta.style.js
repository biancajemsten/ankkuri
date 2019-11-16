import styled from "styled-components";

import colors from "../../styles/colors";

const CTAWrapper = styled.div`
  margin: 50px 0;

  .button {
    background: ${colors.accent};
    border-radius: 30px;
    color: ${colors.white};
    padding: 15px 31px;
    text-decoration: none;
    text-transform: lowercase;

    &:hover,
    &:focus {
      background: ${colors.accentTint};
    }
  }
`;

export { CTAWrapper };

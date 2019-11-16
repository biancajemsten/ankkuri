import styled from "styled-components";

import colors from "../../../styles/colors";

const CTAWrapper = styled.div`
  margin: 50px 0;

  &.select {
    display: inline-block;
    margin: 20px 50px;
  }

  .button {
    background: ${colors.accent};
    border-radius: 30px;
    color: ${colors.white};
    padding: 15px 31px;
    text-decoration: none;
    text-transform: lowercase;

    &.select {
      background: ${colors.primaryTint};
      &:hover,
      &:focus {
        background: ${colors.accentTint};
      }
    }

    &:hover,
    &:focus {
      background: ${colors.accentTint};
    }
  }
`;

export { CTAWrapper };

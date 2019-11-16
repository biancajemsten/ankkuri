import styled from "styled-components";

import colors from "../../../styles/colors";

const CTAWrapper = styled.div`
  margin: 50px 0 0;

  &.select {
    display: inline-block;
    margin: 20px 64px;
  }

  .button {
    background: ${colors.accent};
    border-radius: 30px;
    color: ${colors.white};
    padding: 15px 31px;
    text-decoration: none;
    text-transform: lowercase;

    &.select {
      background: ${colors.primary};
      color: ${colors.white};
      cursor: pointer;

      &:hover,
      &:focus {
        background: ${colors.primary};
      }

      &.isActive {
        background: ${colors.primaryTint};
      }
    }

    &:hover,
    &:focus &.not() {
      background: ${colors.accentTint};
    }
  }
`;

export { CTAWrapper };

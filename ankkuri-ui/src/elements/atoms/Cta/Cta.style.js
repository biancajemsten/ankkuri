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
    transition: background-color .5s;
    border: 0;
    font-size: 16px;
    cursor: pointer;

    &.select {
      background: ${colors.primary};
      color: ${colors.white};
      cursor: pointer;
      border: 2px solid white;

      &:hover,
      &:focus {
        background: ${colors.primary};
      }

      &.isActive {
        background: ${colors.primaryTint};
        border: 0;
      }
    }

    &:hover,
    &:focus {
      background: ${colors.accentTint};
    }
  }
`;

export { CTAWrapper };

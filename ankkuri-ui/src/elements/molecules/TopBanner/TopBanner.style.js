import styled from "styled-components";

// Components

// Utils
import rem from "../../../styles/utils/rem";
import { breakpoint } from "../../../styles/utils/mediaQuery";
import colors from "../../../styles/colors";

const Wrapper = styled.div`
  padding: ${({ theme }) => rem(theme.spacing.s3)};
  box-sizing: border-box;

  position: relative;

  &:after {
    content: "";

    height: 100%;
    width: 100%;

    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;

    background-size: cover;
    background-position: 0 80%;
    background-repeat: no-repeat;

    z-index: -1;
    transform: rotate(180deg);
  }

  h1 {
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  }

  h2 {
    font-family: ${({ theme }) => theme.text.bodyFont};
    font-weight: 300;
    line-height: 1.5;
  }

  @media (max-width: ${breakpoint.medium - 1}px) {
    h1 {
      font-size: 50px;
      span {
        box-shadow: inset 0px -20px ${({ theme }) => theme.colors.accent};
      }
    }

    h2 {
      font-size: 20px;
    }
  }

  @media (min-width: ${breakpoint.medium}px) {
    height: 100vh;
    padding: ${({ theme }) =>
      `${rem(theme.spacing.l1)} ${rem(theme.spacing.l2)}`};

    h2 {
      max-width: 30%;
    }
  }
`;

export { Wrapper };

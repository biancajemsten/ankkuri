import styled, { css } from "styled-components";

// Components
import Wave from "../../../assets/wave.svg";
import WaveBlue from "../../../assets/wave-blue.svg";

// Utils
import rem from "../../../styles/utils/rem";
import { breakpoint } from "../../../styles/utils/mediaQuery";

const Wrapper = styled.div`
  background-image: url(${Wave});
  background-position: top;
  background-size: contain;
  background-repeat: no-repeat;
  padding: 6vh 0 0;

  > * {
    background-color: ${({ theme, waveColor }) =>
      waveColor ? theme.colors[waveColor] : theme.colors.background};
    padding: 0 ${({ theme }) => rem(theme.spacing.s2)};
  }

  ${({ waveColor, theme }) =>
    waveColor
      ? css`
          ${waveColor === "primary" &&
            `
      background-image: url(${WaveBlue});
      color: ${theme.colors.white};
    `}
        `
      : ``}

  @media (min-width: ${breakpoint.medium}px) {
    padding: 30vh 0 0;

    > * {
      padding: 0 ${({ theme }) => rem(theme.spacing.l2)};
    }
  }
`;

export { Wrapper };

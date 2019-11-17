import styled, { css } from "styled-components";

// Components
import Wave from "../../../assets/wave.svg";
import WaveBlue from "../../../assets/wave-blue.svg";

// Utils
import rem from "../../../styles/utils/rem";

const Wrapper = styled.div`
  background-image: url(${Wave});
  background-position: top;
  background-size: contain;
  background-repeat: no-repeat;
  padding: 4vh 0 0;

  > * {
    background-color: ${({ theme, waveColor }) =>
      waveColor ? theme.colors[waveColor] : theme.colors.background};
    padding: 0 ${({ theme }) => rem(theme.spacing.l2)};
    margin: ${({ theme }) => rem(theme.spacing.l3)} 0 0;
    padding: 0 ${({ theme }) => rem(theme.spacing.l2)}
      ${({ theme }) => rem(theme.spacing.l1)};
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
`;

export { Wrapper };

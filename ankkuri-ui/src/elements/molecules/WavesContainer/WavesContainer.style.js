import styled, {css} from "styled-components";

// Components
import Wave from "../../../assets/wave.svg";
import WaveBlue from "../../../assets/wave-blue.svg";

// Utils
import rem from "../../../styles/utils/rem";

const Wrapper = styled.div`
  height: 100vh;
  padding: 30vh 0;

  background-image: url(${Wave});
  background-position: top;
  background-size: contain;
  background-repeat: no-repeat;

  > * {
      background-color: ${({ theme, waveColor }) => waveColor ? theme.colors[waveColor] : theme.colors.background};
      padding: 0 ${({ theme }) => rem(theme.spacing.l1)};
    }


  ${({waveColor, theme}) => waveColor ? css`
    ${waveColor === 'primary' && `
      background-image: url(${WaveBlue});
      color: ${theme.colors.white};
    `}  
  ` : ``}
`;

export { Wrapper };
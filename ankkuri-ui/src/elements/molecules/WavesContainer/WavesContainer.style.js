import styled from "styled-components";

// Components
import Wave from '../../../assets/wave.svg'

// Utils
import rem from '../../../styles/utils/rem';

const Wrapper = styled.div`
  /* background-image: url(${Wave});
  background-position: top;
  margin-top: -30vh;
  background-size: contain;
  background-repeat: no-repeat;
  height: 100vh;
  padding: 30vh ${({theme}) => rem(theme.spacing.l1)};

  transform-origin: 0 0;
  transform: translateZ(-2px) scale(3); */
`;

export { Wrapper };

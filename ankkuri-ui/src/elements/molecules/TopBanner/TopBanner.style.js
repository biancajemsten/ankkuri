import styled from "styled-components";

// Components
import Waves from "../../../assets/waves.jpeg";
import Wave from "../../../assets/wave.svg";

// Utils
import rem from "../../../styles/utils/rem";

const Wrapper = styled.div`
  height: 100vh;
  padding: ${({ theme }) => `${rem(theme.spacing.l1)}`};
  box-sizing: border-box;
  
  position: relative;

  &:after {
    content: '';

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
    text-shadow: 1px 1px 2px rgba(0,0,0,0.2);
  }
`;

export { Wrapper };

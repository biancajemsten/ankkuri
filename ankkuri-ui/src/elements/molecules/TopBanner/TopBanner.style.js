import styled from "styled-components";

// Components
import Waves from "../../../assets/waves.jpeg";

// Utils
import rem from '../../../styles/utils/rem';

const Wrapper = styled.div`
  height: 100vh;
  padding: ${({theme}) => `${rem(theme.spacing.l1)}`};
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
    
    background-image: url(${Waves});
    background-size: cover;
    background-position: 0 -65vh;
    background-repeat: no-repeat;
    background-attachment: fixed;

    z-index: -1;
    transform: rotate(180deg);
  }
`;

export { Wrapper };

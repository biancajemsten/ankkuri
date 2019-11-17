import styled from "styled-components";

import colors from "../../styles/colors";
import Waves from "../../assets/waves.jpeg";
import Wave from "../../assets/wave.svg";

import { Wrapper as WaveContainer } from "../../elements/molecules/WavesContainer/WavesContainer.style";
import rem from "../../styles/utils/rem";

const HomePanelWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  perspective: 1px;
  perspective-origin: 0 0;
  top: 0;
  z-index: -1;
  padding-top: 100px;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 200%;
    background-image: url(${Waves});
    background-size: cover;
    background-position: 0 90%;
    background-repeat: no-repeat;
    transform: rotate(180deg) scaleX(-1);
  }

  ${WaveContainer} {
    transform-origin: 0 0;
    transform: translateZ(-0.5px) scale(1.5);

    p {
      height: 100%;
    }
  }
`;

export { HomePanelWrapper };

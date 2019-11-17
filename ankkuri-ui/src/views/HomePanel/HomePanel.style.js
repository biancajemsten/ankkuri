import styled from "styled-components";

import Waves from "../../assets/waves.jpeg";

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

export const MarketingContainer = styled.div`
  padding: 0;
  min-height: 100vh;
  margin: 80px 0 0;

  > div {
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.colors.accent};
    width: 85%;
    padding: ${({ theme }) =>
      `${rem(theme.spacing.l3)} ${rem(theme.spacing.l1)} ${rem(
        theme.spacing.l3
      )} ${rem(theme.spacing.l3)}`};
    color: white;
    img {
      width: 30%;
      display: inline-block;
    }
    h2 {
      text-align: right;
      margin: 0 0 50px;
    }
    > div {
      max-width: 60%;
      float: right;
      p {
        text-align: right;
        box-sizing: border-box;
        line-height: 1.8;
        &.align-left {
          margin-top: 100px;
          text-align: left;
        }
      }
      blockquote {
        margin-top: 150px;
        display: block;
        font-size: ${({ theme }) => rem(theme.text.sizes.h5)};
        font-family: ${({ theme }) => theme.text.headerFont};
        text-align: right;
      }
    }
    a {
      background: ${({ theme }) => theme.colors.accentTint};
      border-radius: 30px;
      color: ${({ theme }) => theme.colors.white};
      padding: 15px 31px;
      text-decoration: none;
      text-transform: lowercase;
      transition: background-color 0.5s;
      float: right;

      &.select {
        background: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.white};
        cursor: pointer;

        &:hover,
        &:focus {
          background: ${({ theme }) => theme.colors.primary};
        }

        &.isActive {
          background: ${({ theme }) => theme.colors.primaryTint};
        }
      }

      &:hover,
      &:focus {
        background: ${({ theme }) => theme.colors.accentTint};
      }
    }
  }
`;

export { HomePanelWrapper };

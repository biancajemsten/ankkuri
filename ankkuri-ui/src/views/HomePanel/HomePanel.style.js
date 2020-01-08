import styled from "styled-components";

import Waves from "../../assets/waves.jpeg";

import { Wrapper as WaveContainer } from "../../elements/molecules/WavesContainer/WavesContainer.style";
import rem from "../../styles/utils/rem";
import { breakpoint } from "../../styles/utils/mediaQuery";

const HomePanelWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;

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
    height: 100%;
    background-image: url(${Waves});
    background-size: cover;
    background-position: 0 90%;
    background-repeat: no-repeat;
    transform: rotate(180deg) scaleX(-1);
    z-index: -1;
  }

  ${WaveContainer} {
    p {
      height: 100%;
    }
  }

  @media (min-width: ${breakpoint.medium}px) {
    perspective: 1px;
    perspective-origin: 0 0;

    &:before {
      height: 200%;
    }

    ${WaveContainer} {
      transform-origin: 0 0;

      transform: translateZ(-0.5px) scale(1.5);
    }
  }
`;

export const MarketingContainer = styled.div`
  padding: ${({ theme }) =>
    `${rem(theme.spacing.l1)} ${rem(theme.spacing.s3)}`};
  min-height: 100vh;
  margin: 80px 0 0;
  background-color: ${({ theme }) => theme.colors.accent};

  > div {
    box-sizing: border-box;
    color: white;
    img {
      width: 50%;
      position: relative;
      display: block;
      margin: auto;
    }
    h2 {
      text-align: right;
      margin: 0 0 50px;
    }
    > div {
      p {
        box-sizing: border-box;
        line-height: 1.8;
        &.align-left {
          text-align: left;
          margin-top: ${({ theme }) => rem(theme.spacing.m3)};
        }
      }
      blockquote {
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
      display: inline-block;

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

  @media (min-width: ${breakpoint.medium}px) {
    padding: ${({ theme }) => rem(theme.spacing.l3)};

    > div {
      img {
        position: absolute;
        width: 25%;
        display: inline-block;
      }

      > div {
        max-width: 60%;
        float: right;

        p {
          text-align: right;
          &.align-left {
            margin-top: 100px;
          }
        }

        a {
          float: right;
          margin-top: 10px;
        }

        blockquote {
          margin-top: 150px;
        }
      }
    }
  }
`;

export { HomePanelWrapper };

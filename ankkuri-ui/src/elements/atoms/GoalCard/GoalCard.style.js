import styled, { keyframes } from "styled-components";
import rem from "../../../styles/utils/rem";

export const Wrapper = styled.div`
  padding: ${({ theme }) =>
    `${rem(theme.spacing.s3)} ${rem(theme.spacing.s2)}`};
  border-radius: ${({ theme }) => rem(theme.spacing.s1)};
  display: inline-block;

  box-sizing: border-box;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);

  background-color: ${({ theme }) => theme.colors.white};
  text-align: center;
  width: min-content;

  @media (min-width: 660px) {
    padding: ${({ theme }) =>
      `${rem(theme.spacing.m1)} ${rem(theme.spacing.m3)}`};
  }
  p.maxDays {
    color: ${({ theme }) => theme.colors.secondaryAccent};
  }
`;

const circleFill = () => keyframes`
  to {
    stroke-dashoffset: 0;
  }
`;

export const CircleContainer = styled.div`
  width: 242px;
  height: 242px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  svg {
    position: absolute;
    left: 0;
    top: 0;
    stroke-dashoffset: 400%;
    stroke-dasharray: 400%;

    animation: ${circleFill} 10s forwards;
  }

  h5 {
    font-family: ${({ theme }) => theme.text.bodyFont};
    text-align: center;
    line-height: 1;
    color: ${({ theme }) => theme.colors.secondaryAccent};
    font-size: ${({ theme }) => rem(theme.text.sizes.base)};
    span {
      font-size: ${rem(80)};
      display: block;
    }
  }
`;

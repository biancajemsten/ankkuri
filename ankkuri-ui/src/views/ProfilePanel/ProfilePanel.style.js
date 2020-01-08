import styled from "styled-components";
import rem from "../../styles/utils/rem";

import Waves from "../../assets/waves.jpeg";
import { Wrapper as CardsContainer } from "../../elements/molecules/CardsContainer/CardsContainer.style";

const avatarSize = 250;

export const Wrapper = styled.div`
  padding-top: ${({ theme }) => rem(theme.spacing.navigation)};
  min-height: 100vh;

  background-image: url(${Waves});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const ProfileContainer = styled.div`
  position: relative;

  padding: ${({ theme }) => rem(theme.spacing.l1)} 0;
  margin: 170px auto 0;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;

  background-color: ${({ theme }) => theme.colors.background};
  width: 90%;

  @media (min-width: 879px) {
    width: 80%;
  }

  img.avatar {
    position: absolute;
    width: ${avatarSize}px;
    height: ${avatarSize}px;
    margin: auto;

    object-fit: cover;
    object-position: center;
    border-radius: 50%;
    border: 10px solid ${({ theme }) => theme.colors.white};

    top: calc(-${avatarSize}px / 2);
    left: calc(50% - ${avatarSize}px / 2);
  }

  h1 {
    text-align: center;
    margin-top: ${avatarSize / 3}px;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.14);
  }

  > h5 {
    padding: 0 ${({ theme }) => rem(theme.spacing.s3)};
    letter-spacing: 1px;
    @media (min-width: 660px) {
      padding: 0 ${({ theme }) => rem(theme.spacing.m3)};
    }

    @media (min-width: 879px) {
      padding: 0 ${({ theme }) => rem(theme.spacing.l3)};
    }
  }

  p {
    color: ${({ theme }) => theme.colors.text};
  }

  p.streak {
    text-align: center;
    font-size: ${({ theme }) => rem(theme.text.sizes.h5)};
  }

  ${CardsContainer} {
    padding: 0 ${({ theme }) => rem(theme.spacing.s3)} 10px;
    box-sizing: border-box;
    width: 100%;

    @media (min-width: 660px) {
      padding: 0 ${({ theme }) => rem(theme.spacing.m3)} 10px;
    }

    @media (min-width: 879px) {
      padding: 0 ${({ theme }) => rem(theme.spacing.l3)} 10px;
    }
  }
`;

export const GoalContainer = styled.div`
  padding: ${({ theme }) =>
    `${rem(theme.spacing.l1)} ${rem(theme.spacing.s3)}`};

  @media (min-width: 660px) {
    padding: 0 ${({ theme }) => rem(theme.spacing.m3)};
  }

  @media (min-width: 879px) {
    padding: 0 ${({ theme }) => rem(theme.spacing.l3)};
  }
`;

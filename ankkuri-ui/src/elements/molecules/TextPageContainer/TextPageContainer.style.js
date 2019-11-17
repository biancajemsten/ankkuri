import styled from "styled-components";
import Waves from "../../../assets/waves.jpeg";
import rem from "../../../styles/utils/rem";

export const Wrapper = styled.div`
  padding: 15% 0;
  min-height: 100vh;

  background-image: url(${Waves});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const ContentContainer = styled.div`
  text-align: center;
  width: 70vw;
  box-sizing: border-box;
  padding: ${({ theme }) =>
    `${rem(theme.spacing.m1)} ${rem(theme.spacing.l1)}`};
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.background};
  .detail-wrapper {
    display: flex;

    @media screen and (max-width: 1000px) {
      flex-wrap: wrap;
    }

    > div {
      margin: ${({ theme }) => `0 ${rem(theme.spacing.s1)}`};
    }
  }
`;

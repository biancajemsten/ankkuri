import styled from "styled-components";
import Waves from "../../assets/waves.jpeg";
import rem from "../../styles/utils/rem";

const DataPrivacyWrapper = styled.div`
  padding-top: ${({ theme }) => rem(theme.spacing.navigation)};
  min-height: 100vh;

  background-image: url(${Waves});
  background-size: cover;
  background-repeat: no-repeat;
`;

const PolicyContainer = styled.div`
  text-align: center;
  width: 70vw;
  padding: ${({ theme }) =>
    `${rem(theme.spacing.m1)} ${rem(theme.spacing.l1)}`};
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.background};
  .detail-wrapper {
    display: flex;
    > div {
      margin: ${({ theme }) => `0 ${rem(theme.spacing.s1)}`};
    }
  }
`;

export { DataPrivacyWrapper, PolicyContainer };

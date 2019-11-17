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
  width: 90%;
  padding: ${({ theme }) => rem(theme.spacing.l1)} 0;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.background};
`;

export { DataPrivacyWrapper, PolicyContainer };

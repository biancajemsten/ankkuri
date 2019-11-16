import styled from "styled-components";
import rem from "../../styles/utils/rem";

const ProfileWrapper = styled.div`
  width: 100%;
  padding: ${({ theme }) =>
    `${rem(theme.spacing.s3)} ${rem(theme.spacing.l1)}`};
`;

export { ProfileWrapper };

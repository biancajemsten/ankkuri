import styled from "styled-components";
import rem from "../../../styles/utils/rem";

export const Wrapper = styled.div`
  padding: ${({ theme }) =>
    `${rem(theme.spacing.m1)} ${rem(theme.spacing.m2)}`};
  border-radius: ${({ theme }) => rem(theme.spacing.s1)};
  margin-right: ${({ theme }) => rem(theme.spacing.s3)};
  min-width: 232px;
  box-sizing: border-box;

  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);

  background-color: ${({ theme }) => theme.colors.white};

  h5 {
    font-family: ${({ theme }) => theme.text.bodyFont};
    font-weight: 400;
    font-size: 20px;

    margin: 20px 0;

    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const ImageContainer = styled.div`
  width: 116px;
  height: 116px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;

  background-image: ${({ theme }) =>
    `linear-gradient(to bottom, ${theme.colors.primaryTint}, ${theme.colors.accent})`};

  border-radius: 50%;
`;

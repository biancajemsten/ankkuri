import styled from "styled-components";

import rem from "../../../styles/utils/rem";
import theme from "../../../styles/theme";
import { breakpoint } from "../../../styles/utils/mediaQuery";

const ArticleBannerWrapper = styled.article`
  margin-top: 15%;
  padding-bottom: ${({ theme }) => rem(theme.spacing.l2)};
  blockquote {
    display: block;
    font-size: ${rem(theme.text.sizes.h5)};
    font-family: ${({ theme }) => theme.text.headerFont};
  }

  h3 {
    text-align: center;
  }

  p.quoteBy {
    margin: 20px 60px;
  }

  p {
    line-height: 1.5;
    margin: 30px 0;
    font-size: 18px;
  }

  img {
    width: 100%;
    right: -120px;
    position: relative;
    display: block;
  }

  @media (min-width: ${breakpoint.medium}px) {
    margin-top: 0;
  }

  @media (min-width: ${breakpoint.large}px) {
    margin-top: 5%;
  }

  @media (min-width: ${breakpoint.xLarge}px) {
    margin-top: 10%;
  }
`;

export { ArticleBannerWrapper };

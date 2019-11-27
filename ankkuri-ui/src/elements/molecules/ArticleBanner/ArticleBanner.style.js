import styled from "styled-components";

import rem from "../../../styles/utils/rem";
import theme from "../../../styles/theme";

const ArticleBannerWrapper = styled.article`
  margin-top: 10%;
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
`;

export { ArticleBannerWrapper };

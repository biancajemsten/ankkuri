import styled from "styled-components";

import rem from "../../../styles/utils/rem";
import theme from "../../../styles/theme";

const ArticleBannerWrapper = styled.article`
  margin-top: 10%;
  blockquote {
    display: block;
    font-size: ${rem(theme.text.sizes.h5)};
  }

  img {
    width: 100%;
    right: -25px;
    position: relative;
    display: block;
  }
`;

export { ArticleBannerWrapper };

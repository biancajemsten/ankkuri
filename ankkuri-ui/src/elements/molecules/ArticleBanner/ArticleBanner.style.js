import styled from "styled-components";

import rem from "../../../styles/utils/rem";
import theme from "../../../styles/theme";

const ArticleBannerWrapper = styled.article`
  blockquote {
    display: block;
    font-size: ${rem(theme.text.sizes.h5)};
  }

  .left-container {
    display: inline-block;
    width: 30%;
  }
`;

export { ArticleBannerWrapper };

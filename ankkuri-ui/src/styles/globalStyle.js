import { createGlobalStyle } from "styled-components";
import text from "./text";
import colors from "./colors";
import rem from "./utils/rem";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${text.bodyFont};
    font-size: ${rem(text.sizes.base)};
    font-weight: ${text.weight.medium};

    background-color: ${colors.background};
    color: ${colors.primary};

    margin: 0;

    /* padding: 0 ${rem(100)}; */
  }

  h1, h2, h3, h4, h5, h5, .h1, .h2, .h3, .h4, .h5, .h6 {
    font-family: ${text.headerFont};
    font-weight: ${text.weight.bold};
  }

  h1, .h1 {
    font-size: ${rem(text.sizes.h1)};
  }

  h2, .h2 {
    font-size: ${rem(text.sizes.h2)};
  }

  h3, .h3 {
    font-size: ${rem(text.sizes.h3)};
  }

  h4, .h4 {
    font-size: ${rem(text.sizes.h4)};
  }

  h5, .h5 {
    font-size: ${rem(text.sizes.h5)};
  }

  h6, .h6 {
    font-size: ${rem(text.sizes.h6)};
  }

  a {
    text-decoration: none;
    color: ${colors.primary};
  }

`;

export default GlobalStyle;

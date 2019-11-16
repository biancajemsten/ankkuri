import { createGlobalStyle } from "styled-components";
import text from "./text";
import colors from "./colors";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${text.bodyFont};
    font-size: ${text.sizes.base};
    font-weight: ${text.weight.medium};

    background-color: ${colors.background};
  }

  h1, h2, h3, h4, h5, h5, .h1, .h2, .h3, .h4, .h5, .h6 {
    font-family: ${text.headerFont};
    font-weight: ${text.weight.bold};
  }

  h1, .h1 {
    font-size: ${text.sizes.h1};
  }

  h2, .h2 {
    font-size: ${text.sizes.h2};
  }

  h3, .h3 {
    font-size: ${text.sizes.h3};
  }

  h4, .h4 {
    font-size: ${text.sizes.h4};
  }

  h5, .h5 {
    font-size: ${text.sizes.h5};
  }

  h6, .h6 {
    font-size: ${text.sizes.h6};
  }

`;

export default GlobalStyle;

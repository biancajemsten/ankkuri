import styled from "styled-components";

import color from "../../styles/colors";

import text from "../../styles/text";
import rem from "../../styles/utils/rem";

const QuestionPanelWrapper = styled.div`
  text-align: center;

  .questionPanel-input {
    background: none;
    border-width: 0 0 2px;
    border-color: ${color.white};
    color: ${color.white};
    font-family: futura;
    font-size: ${rem(text.sizes.h5)};
    outline: 0;
    text-align: center;
    min-width: 60%;
    line-height: 60px;
  }

  .button-container {
    max-width: 67%;
    margin: 0 auto;
  }

  h2 {
    text-align: left;
    margin-bottom: 100px;
  }

  p {
    font-size: 28px;
  }
`;

export { QuestionPanelWrapper };

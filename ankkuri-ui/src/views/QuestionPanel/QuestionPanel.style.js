import styled from "styled-components";

import color from "../../styles/colors";

const QuestionPanelWrapper = styled.div`
  text-align: center;

  .questionPanel-input {
    background: none;
    border-width: 0 0 2px;
    border-color: ${color.white};
    color: ${color.white};
    outline: 0;
    text-align: center;
  }

  .button-container {
    max-width: 58%;
    margin: 0 auto;
  }
`;

export { QuestionPanelWrapper };

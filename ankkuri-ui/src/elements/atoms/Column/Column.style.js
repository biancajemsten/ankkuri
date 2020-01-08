import styled from "styled-components";
import {
  columnSize
} from "../../../styles/utils/column";

export const Wrapper = styled.div`
  box-sizing: border-box;
  ${({ xs, sm, md, lg, xl }) => `
    ${columnSize(xs, sm, md, lg, xl)}
  `}
`;

import styled from "styled-components";
import {
  columnSize
} from "../../../styles/utils/column";

export const Wrapper = styled.div`
  ${({ xs, sm, md, lg, xl }) => `
    ${columnSize(xs, sm, md, lg, xl)}
  `}
`;

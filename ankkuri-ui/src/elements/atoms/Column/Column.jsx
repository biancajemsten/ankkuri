import React from "react";

// Styles
import { Wrapper } from "./Column.style";

const Column = props => <Wrapper {...props}>{props.children}</Wrapper>;

export default Column;

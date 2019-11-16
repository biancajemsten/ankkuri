import React from "react";

// Styles
import { Wrapper } from "./Row.style";

const Row = props => <Wrapper {...props}>{props.children}</Wrapper>;

export default Row;

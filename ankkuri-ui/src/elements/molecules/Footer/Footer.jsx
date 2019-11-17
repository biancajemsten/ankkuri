import React from "react";
import { Wrapper } from "./Footer.style";

import Anchor from "../../../assets/anchor-icon.png";

export default () => (
  <Wrapper className="footer">
    <img src={Anchor} alt=""/>
    <p>&copy; Ankkuri 2019</p>
  </Wrapper>
);

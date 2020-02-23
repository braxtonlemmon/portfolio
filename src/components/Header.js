import React from "react";
import styled from "styled-components";
import { H1 } from './shared/Headings.js';


const HeaderBar = styled.header`
  width: 100%;
  margin-bottom: 15px;
  padding: 10px;
  background: red;
`;

function Header() {
  return (
    <HeaderBar>
      <H1>BL</H1>
    </HeaderBar>
  );
}

export default Header;

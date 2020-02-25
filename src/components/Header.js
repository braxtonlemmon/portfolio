import React from "react";
import styled from "styled-components";
import { H1 } from './shared/Headings.js';

const HeaderBar = styled.header`
  width: 100%;
  margin-bottom: 15px;
  padding: 10px;
  background: #303030;
`;

const Logo = styled(H1)`
  font-family: 'Bungee Shade', sans-serif;
  color: #c9c9c9;
`

function Header() {
  return (
    <HeaderBar>
      <Logo>BL</Logo>
    </HeaderBar>
  );
}

export default Header;

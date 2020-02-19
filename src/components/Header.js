import React from "react";
import styled from "styled-components";

const HeaderBar = styled.header`
  background: blue;
  width: 100%;
`;
const H1 = styled.h1`
  font-size: 3rem;
  background: grey;
  color: blue;
`;
function Header() {
  return (
    <HeaderBar>
      <H1>Braxton Lemmon</H1>
    </HeaderBar>
  );
}

export default Header;

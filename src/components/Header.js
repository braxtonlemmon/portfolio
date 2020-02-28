import React from "react";
import styled from "styled-components";
import { H1, H2 } from './shared/Headings.js';
import { Responsive } from 'responsive-react';
import NavButton from './shared/NavButton.js';

const HeaderBar = styled.header`
  width: 100%;
  margin-bottom: 15px;
  padding: 10px;
  background: #303030;
  display: flex;
  justify-content: space-between;
  z-index: 88;
  color: white;
  @media only screen and (min-width: 43em) {
    position: fixed;
  }
`;

const Logo = styled(H1)`
  font-family: 'Bungee Shade', sans-serif;
  color: #c9c9c9;
`

const TopNav = styled.div`
  display: flex;
`

const Header = (props) => {
  const handleClick = (e) => {
    const id = parseInt(e.target.id);
    props.changeId(id);
  }

  return (
    <HeaderBar>
      <Logo>BL</Logo>

      <Responsive displayIn={["Tablet", "Laptop"]}>
        <H2>Braxton Lemmon</H2>
        <TopNav>
          <NavButton top id={1} onClick={handleClick}>
            Home
          </NavButton>
          <NavButton top id={2} onClick={handleClick}>
            Music
          </NavButton>
          <NavButton top id={3} onClick={handleClick}>
            About
          </NavButton>
          <NavButton top id={4} onClick={handleClick}>
            Contact
          </NavButton>
        </TopNav>
      </Responsive>
    </HeaderBar>
  );
}

export default Header;

import React from "react";
import styled from "styled-components";
import { H1, H2 } from './shared/Headings.js';
import { Responsive } from 'responsive-react';
import NavButton from './shared/NavButton.js';
import { Link } from 'react-router-dom';

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

const Header = () => {
  return (
    <HeaderBar>
      <Logo>BL</Logo>
      <Responsive displayIn={["Tablet", "Laptop"]}>
        <H2>Braxton Lemmon</H2>
        <TopNav>
          <Link to="/home">
            <NavButton top>Home</NavButton>
          </Link>
          <Link to="/music">
            <NavButton top>Music</NavButton>
          </Link>
          <Link to="/about">
            <NavButton top>About</NavButton>
          </Link>
          <Link to="/contact">
            <NavButton top>Contact</NavButton>
          </Link>
        </TopNav>
      </Responsive>
    </HeaderBar>
  );
}

export default Header;

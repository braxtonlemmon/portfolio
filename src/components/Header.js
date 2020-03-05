import React from "react";
import styled from "styled-components";
import { H1 } from './shared/Headings.js';
import { Responsive } from 'responsive-react';
import NavButton from './shared/NavButton.js';
import { Link } from 'react-router-dom';

const HeaderBar = styled.header`
  width: 100%;
  position: relative;
  margin-bottom: 15px;
  padding: 10px;
  background: #3d3d3d;
  /* display: flex;
  justify-content: space-between; */
  display: grid;
  grid-template-columns: 120px 1fr;
  z-index: 88;
  color: white;
  @media only screen and (min-width: 43em) {
    position: fixed;
    grid-template-columns: 120px 2fr 1fr;
  }
`;

const MyName = styled(H1)`
  text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black;
  color: white;
  @media only screen and (max-width: 24em) {
   font-size: 1.5em; 
  }

`;

const TopNav = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Lemon = styled.img`
  height: 50px;

`;

const Header = () => {
  return (
    <HeaderBar>
      <Lemon src={process.env.PUBLIC_URL + 'img/lemon.png'} />
      <MyName>Braxton Lemmon</MyName>
      <Responsive displayIn={["Tablet", "Laptop"]}>
        <TopNav>
          <Link to="/">
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

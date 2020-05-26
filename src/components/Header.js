import React from "react";
import styled, { keyframes } from "styled-components";
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
  align-items: center;
  grid-template-columns: 80px 1fr;
  z-index: 88;
  color: white;
  box-shadow: 0 2px 2px grey;

  @media only screen and (min-width: 768px) {
    position: fixed;
    grid-template-columns: 120px 1fr 1fr;
  }
  a {
    text-decoration: none;
    outline: none;
  }
`;

const MyName = styled(H1)`
  /* text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black; */
  color: white;
  @media (min-width: 460px) {
    font-size: 2.8em;
  }
  @media (min-width: 768px) {
    font-size: 1.7em;
  }
  @media (min-width: 1000px) {
    font-size: 2.8em;
  }
  /* @media only screen and (max-width: 26em) {
   font-size: 2em; 
  } */
`;

const TopNav = styled.div`
  display: flex;
  justify-content: center;
`;

const Lemon = styled.img`
  height: 50px;
  transition: transform 1s ease-in-out;
  &:hover {
    transform: rotate(360deg);
  }
`;

const Header = () => {
  return (
    <HeaderBar>
      <Link to="/">
        <Lemon src={process.env.PUBLIC_URL + 'img/lemon.png'} />
      </Link>
      <Link to="/resume">
        <MyName>Braxton Lemmon</MyName>
      </Link>
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

import React from "react";
import styled from "styled-components";
import NavButton from './shared/NavButton.js';
import { Link } from 'react-router-dom';

const Nav = styled.footer`
  display: grid;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  grid-template-columns: repeat(4, 1fr);
  gap: 2px;
  background: black;
  padding: 2px 0;
  border-right: 2px solid black;
  border-left: 2px solid black;
  z-index: 80;
`;

const Footer = () => {
  return (
    <Nav>
      <Link to="/">
        <NavButton>Home</NavButton>
      </Link>
      <Link to="/music">
        <NavButton>Music</NavButton>
      </Link>
      <Link to="/about">
        <NavButton>About</NavButton>
      </Link>
      <Link to="/contact">
        <NavButton>Contact</NavButton>
      </Link>
    </Nav>
  );
}

export default Footer;

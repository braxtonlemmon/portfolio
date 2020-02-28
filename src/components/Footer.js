import React from "react";
import styled from "styled-components";
import NavButton from './shared/NavButton.js';

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
  z-index: 50;
`;

const Footer = (props) => {
  const handleClick = (e) => {
    const id = parseInt(e.target.id);
    props.changeId(id);
    props.doAnimate();
  }

  return (
    <Nav>
      <NavButton id={1} onClick={handleClick}>
        Home
      </NavButton>
      <NavButton id={2} onClick={handleClick}>
        Music
      </NavButton>
      <NavButton id={3} onClick={handleClick}>
        About
      </NavButton>
      <NavButton id={4} onClick={handleClick}>
        Contact
      </NavButton>
    </Nav>
  );
}

export default Footer;

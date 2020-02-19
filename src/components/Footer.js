import React, { Component } from "react";
import styled from "styled-components";

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
`;

const NavButton = styled.button`
  height: 100%;
  width: 100%;
  padding: 5px;
  background: red;
  border: none;
  font-size: 1.5em;
`;

class Footer extends Component {
  render() {
    return (
      <Nav>
        <NavButton onClick={() => this.props.changeId(1)}>Home</NavButton>
        <NavButton onClick={() => this.props.changeId(2)}>Music</NavButton>
        <NavButton onClick={() => this.props.changeId(3)}>About</NavButton>
        <NavButton onClick={() => this.props.changeId(4)}>Contact</NavButton>
      </Nav>
    );
  }
}

export default Footer;

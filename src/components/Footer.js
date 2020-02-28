import React, { Component } from "react";
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

class Footer extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const id = parseInt(e.target.id);
    this.props.changeId(id);
    this.props.doAnimate();
  }

  render() {
    return (
      <Nav>
        <NavButton 
          id={1}
          onClick={this.handleClick}
        >Home</NavButton>
        <NavButton 
          id={2}
          onClick={this.handleClick}
        >Music</NavButton>
        <NavButton 
          id={3}
          onClick={this.handleClick}
        >About</NavButton>
        <NavButton 
          id={4}
          onClick={this.handleClick}
        >Contact</NavButton>
      </Nav>
    );
  }
}

export default Footer;

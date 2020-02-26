import React, { Component } from "react";
import styled from "styled-components";
import { H1 } from './shared/Headings.js';
import { Responsive } from 'responsive-react';
import Footer from './Footer.js';
import NavButton from './NavButton.js';

const HeaderBar = styled.header`
  width: 100%;
  margin-bottom: 15px;
  padding: 10px;
  background: #303030;
  display: flex;
  justify-content: space-between;
`;

const Logo = styled(H1)`
  font-family: 'Bungee Shade', sans-serif;
  color: #c9c9c9;
`

const TopNav = styled.div`
  display: flex;
`

class Header extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const id = parseInt(e.target.id);
    this.props.changeId(id);
  }

  render() {
    return (
      <HeaderBar>
        <Logo>BL</Logo>
        <Responsive displayIn={["Tablet", "Laptop"]}>
          <TopNav>
            <NavButton
              top
              id={1}
              onClick={this.handleClick}
            >Home</NavButton>
            <NavButton
              top
              id={2}
              onClick={this.handleClick}
            >Music</NavButton>
            <NavButton
              top
              id={3}
              onClick={this.handleClick}
            >About</NavButton>
            <NavButton
              top
              id={4}
              onClick={this.handleClick}
            >Contact</NavButton>
          </TopNav>
        </Responsive>
      </HeaderBar>
    );
  } 
}

export default Header;

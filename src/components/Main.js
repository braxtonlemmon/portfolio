import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import Home from "./Home.js";
import Music from "./Music.js";
import About from "./About.js";
import Contact from "./Contact.js";

const Content = styled.div`
  margin-bottom: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  /* opacity: 0;

  opacity: ${props => props.class ? '1' : '0'};
  transition: opacity 2s ease-in; */
  visibility: ${props => props.class ? 'hidden' : 'visible'};
  animation: ${props => props.class ? fadeOut : fadeIn} 1s linear;
  transition: visibility 1s linear;
`
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const fadeOut = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

class Main extends Component {
  constructor() {
    super();
    this.state = {
      class: null
    }
  }

  componentDidUpdate() {
    console.log('loaded');
    
    // this.setState({class: "active" });
  }

  render() {
    console.log(this.props.id);
    return (
      <Content class={this.state.class}>
        {this.props.id === 1 && <Home />}
        {this.props.id === 2 && <Music />}
        {this.props.id === 3 && <About />}
        {this.props.id === 4 && <Contact />}
      </Content>
    );
  }
}

export default Main;

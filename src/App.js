import React, { Component } from "react";
import styled from "styled-components";
import { Reset } from "styled-reset";
import GlobalStyle from './GlobalStyle.js';
import { Transition } from 'react-transition-group';
import { Responsive } from 'responsive-react';


import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Main from "./components/Main.js";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      mainId: 1,
      animate: true
    };
    this.changeId = this.changeId.bind(this);
    this.doAnimate = this.doAnimate.bind(this);
  }

  doAnimate() {
    this.setState({ animate: true });
    setTimeout(() => {
      this.setState({ animate: false });
    }, 3000);
  }

  changeId(id) {
    this.setState({ mainId: id });
  }

  render() {
    return (
      <React.Fragment>
        <Reset />
        <GlobalStyle />
        <Wrapper>
          <Header 
            changeId={this.changeId}
          />
          <Transition in={this.state.animate} timeout={600}>
           <Main id={this.state.mainId} state={this.state} />
          </Transition>
          <Responsive displayIn={["Mobile"]}>
            <Footer 
             changeId={this.changeId} 
             doAnimate={this.doAnimate}
            />
          </Responsive>
        </Wrapper>
      </React.Fragment>
    );
  }
}

export default App;

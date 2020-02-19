import React, { Component } from "react";
import styled from "styled-components";
import { Reset } from "styled-reset";

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
      mainId: 1
    };
    this.changeId = this.changeId.bind(this);
  }

  changeId(id) {
    this.setState({ mainId: id });
  }

  render() {
    return (
      <Wrapper>
        <Reset />
        <Header />
        <Main id={this.state.mainId} />
        <Footer changeId={this.changeId} />
      </Wrapper>
    );
  }
}

export default App;

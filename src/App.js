import React from "react";
import styled from "styled-components";
import { Reset } from "styled-reset";
import GlobalStyle from './GlobalStyle.js';
import { Responsive } from 'responsive-react';
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Main from "./components/Main.js";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  font-family: 'Acme', sans-serif;
`;

function App() {
  return (
    <React.Fragment>
      <Reset />
      <GlobalStyle />
      <Wrapper>
        <Header />
        <Main />
        <Responsive displayIn={["Mobile"]}>
          <Footer />
        </Responsive>
      </Wrapper>
    </React.Fragment>
  )
}

export default App;

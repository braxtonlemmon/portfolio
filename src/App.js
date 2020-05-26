import React from "react";
import styled from "styled-components";
import { Reset } from "styled-reset";
import GlobalStyle from './GlobalStyle.js';
import { Responsive } from 'responsive-react';
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Main from "./components/Main.js";
import Theme from './Theme';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  /* font-family: 'Acme', sans-serif; */
  /* font-family: "Barlow", sans-serif; */
  /* font-family: sans-serif; */
  font-family: "Open Sans", sans-serif;
`;


const App = () => {

  return (
    <React.Fragment>
      <Reset />
      <GlobalStyle />
      <Theme>
        <Wrapper>
          <Header />
          <Main />
          <Responsive displayIn={["Mobile"]}>
            <Footer />
          </Responsive>
        </Wrapper>
      </Theme>
    </React.Fragment>
  )
}

export default App;

import React from "react";
import styled from "styled-components";
import Home from "./Home.js";
import Music from "./Music.js";
import About from "./About.js";
import Contact from "./Contact.js";

const Content = styled.div`
  margin-bottom: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
`

const Main = (props) => {
  return (
    <Content>
      {props.id === 1 && <Home />}
      {props.id === 2 && <Music />}
      {props.id === 3 && <About />}
      {props.id === 4 && <Contact />}
    </Content>
  );
}

export default Main;

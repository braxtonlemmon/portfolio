import React from "react";
import styled from "styled-components";
import Home from "./Home.js";
import Music from "./Music.js";
import About from "./About.js";
import Contact from "./Contact.js";
import { Switch, Route } from "react-router-dom";

const Content = styled.div`
  margin-bottom: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
`

const Main = () => {
  return (
  <Content>
    <Switch>
      <Route path='/home'>
        <Home />
      </Route>
      <Route path='/music'>
        <Music />
      </Route>
      <Route path='/about'>
        <About />
      </Route>
      <Route path='/contact'>
        <Contact />
      </Route>
    </Switch>
  </Content>
  );
}

export default Main;

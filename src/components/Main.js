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
      <Route path='/home' component={Home} />
      <Route path='/music' component={Music} />
      <Route path='/about' component={About} />
      <Route path='/contact' component={Contact} />
    </Switch>
  </Content>
  );
}

export default Main;

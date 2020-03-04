// Used for page transitions:
// https://medium.com/@khwsc1/step-by-step-guide-of-simple-routing-transition-effect-for-react-with-react-router-v4-and-9152db1566a0
// https://github.com/Ihatetomatoes/react-router-page-transition-css/blob/master/02-End/src/App.css

import React from "react";
import styled from "styled-components";
import Home from "./Home.js";
import Music from "./Music.js";
import About from "./About.js";
import Contact from "./Contact.js";
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Content from './Content.js';

const Main = () => {
  return (
    <Content>
      <Route render={({location}) => (
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            timeout={450}
            classNames="fade"
          >
            <section className="route-section">
              <Switch location={location}>
                <Route path='/' exact component={Home} />
                <Route path='/music' exact component={Music} />
                <Route path='/about' exact component={About} />
                <Route path='/contact' exact component={Contact} />
              </Switch>
            </section>
          </CSSTransition>
        </TransitionGroup>
      )} />
    </Content>
  );
}

export default withRouter(Main);

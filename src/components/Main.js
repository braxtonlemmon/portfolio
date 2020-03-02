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

const Content = styled.div`
  margin-bottom: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  
  .fade-appear,
  .fade-enter {
    opacity: 0;
    z-index: 1;
  }
  .fade-appear-active,
  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 300ms linear 150ms;
  }

  .fade-exit {
    opacity: 1;
  }

  .fade-exit.fade-exit-active {
    opacity: 0;
    transition: opacity 150ms linear;
  }

  div.transition-group {
    position: relative;
  }

  section.route-section {
    position: absolute;
    width: 100%;
    top: 100px;
    left: 0;
  }
`;

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

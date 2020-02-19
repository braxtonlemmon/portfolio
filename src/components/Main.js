import React, { Component } from "react";
import styled from "styled-components";
import Home from "./Home.js";
import Music from "./Music.js";
import About from "./About.js";
import Contact from "./Contact.js";

class Main extends Component {
  render() {
    console.log(this.props.id);
    return (
      <div>
        {this.props.id === 1 && <Home />}
        {this.props.id === 2 && <Music />}
        {this.props.id === 3 && <About />}
        {this.props.id === 4 && <Contact />}
      </div>
    );
  }
}

export default Main;

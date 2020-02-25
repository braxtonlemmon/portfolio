import React, { Component } from "react";
import styled from "styled-components";
import { H2, H3 } from './shared/Headings.js';
import Stamps from './Stamps.js';
import Bio from './Bio.js';
import Hobbies from './Hobbies.js';

const AboutWrapper = styled.div`
  margin: 10px 50px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;

`
const AboutBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 15px 0;
`

class About extends Component {
  render() {
    return (
      <AboutWrapper>
        <H2>About</H2>
        <AboutBox>
          <H3>Bio</H3>
          <Bio />
        </AboutBox>
        <AboutBox>
          <H3>Technologies</H3>
          <Stamps />
        </AboutBox>
        <AboutBox>
          <H3>Hobbies</H3>
          <Hobbies />
        </AboutBox>
      </AboutWrapper>
    );
  }
}

export default About;

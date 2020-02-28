import React, { useEffect } from "react";
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
  @media only screen and (min-width: 43em) {
    margin-top: 100px;
  }

`
const AboutBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 15px 0;
  background: #e1e1e1;
  padding: 10px;
  box-shadow: 5px 5px 3px grey, -5px 5px 3px grey;
`
const TechnologyBox = styled(AboutBox)`
  width: 90%;
  @media only screen and (min-width: 43em) {
    width: 80%;
  }
  /* @media only screen and (min-width: 64em) {
    width: 70%;
  } */
  @media only screen and (min-width: 86em) {
    width: 70%;
  }
`;

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <AboutWrapper>
      <H2>About</H2>
      <AboutBox>
        <H3>Bio</H3>
        <Bio />
      </AboutBox>
      <TechnologyBox>
        <H3>Technologies</H3>
        <Stamps />
      </TechnologyBox>
      <AboutBox>
        <H3>Hobbies</H3>
        <Hobbies />
      </AboutBox>
    </AboutWrapper>
  );
}

export default About;

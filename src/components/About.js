import React, { useEffect } from "react";
import styled from "styled-components";
import { H2, H3 } from './shared/Headings.js';
import Stamps from './Stamps.js';
import Bio from './Bio.js';
import Hobbies from './Hobbies.js';

const AboutWrapper = styled.div`
  margin: 0 50px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
`;

const AboutBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 15px 0;
  background: ${props => props.theme.colors.boxColor};
  padding: 10px;
  box-shadow: 5px 5px 3px grey, -5px 5px 3px grey;
  @media only screen and (min-width: 43em) {
    max-width: 50%;
  }
`

const TechnologyBox = styled(AboutBox)`
  width: 90%;
  background: ${props => props.theme.colors.boxColor};
  @media only screen and (min-width: 43em) {
    width: 80%;
  }
  @media only screen and (min-width: 86em) {
    width: 70%;
  }
`;

const About = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, []);
  
  return (
    <AboutWrapper>
      <H2>About</H2>
      <AboutBox bio>
        <H3>Bio</H3>
        <Bio />
      </AboutBox>
      <TechnologyBox>
        <H3>Technologies</H3>
        <Stamps />
      </TechnologyBox>
      <AboutBox>
        <H3>What I Do</H3>
        <Hobbies />
      </AboutBox>
    </AboutWrapper>
  );
}

export default About;

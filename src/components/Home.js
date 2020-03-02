import React, { useEffect }from "react";
import styled from "styled-components";
import Project from "./Project.js";
import CARDS from '../data/CARDS.js';
import { H2 } from './shared/Headings.js';
import Crossword from './Crossword.js';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Projects = styled.div`
  margin: 12px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Work = styled.div`
  width: 85%;
  padding: 10px;
  background: #e1e1e1;
  box-shadow: 5px 5px 3px grey, -5px 5px 3px grey;
  z-index: 1; 
  margin-bottom: 20px;
  @media only screen and (min-width: 43em) {
    width: 90%;
  }
  @media only screen and (min-width: 64em) {
    width: 80%;
  }
  @media only screen and (min-width: 86em) {
    width: 75%;
  }
`;

const Home = () => {
  const projects = [];
  CARDS.forEach(card => projects.push(<Project card={card} key={card.id} />));

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, []);

  return (
    <Wrapper>
      <Crossword />
      <Work>
        <H2>Work</H2>
        <Projects>
          {projects}
        </Projects>
      </Work>
    </Wrapper>
  );
}

export default Home;

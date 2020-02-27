import React from "react";
import styled from "styled-components";
import Project from "./Project.js";
import CARDS from '../CARDS.js';
import { H2 } from './shared/Headings.js';
import Crossword from './Crossword.js';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Intro = styled(H2)`
  padding: 10px;

`;

const Projects = styled.div`
  display: grid;
  margin: 20px 0 50px 0;
  grid-template-columns: 1fr;
  gap: 20px;

  @media only screen and (min-width: 41em) {
    grid-template-columns: 1fr 1fr;
  }
  @media only screen and (min-width: 62em) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media only screen and (min-width: 84em) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

function Home() {
  const projects = [];
  CARDS.forEach(card => projects.push(<Project card={card} key={card.id} />));

  return (
    <Wrapper>
      <Intro>Braxton Lemmon</Intro>
      <Crossword />
      <H2>Work</H2>
      <Projects>
        {projects}
      </Projects>
    </Wrapper>
  );
}

export default Home;

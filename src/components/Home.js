import React from "react";
import styled from "styled-components";
import Project from "./Project.js";
import CARDS from '../CARDS.js';
import { H2 } from './shared/Headings.js';

const Intro = styled(H2)`

  padding: 10px;
  margin: 15px 0;
`;

const Projects = styled.div`
  display: grid;
  margin-bottom: 50px;
  grid-template-columns: 1fr;
  gap: 10px;

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
    <div>
      <Intro>Braxton Lemmon</Intro>
      <Intro>open-minded web development</Intro>
      <Projects>
        {projects}
      </Projects>
    </div>
  );
}

export default Home;

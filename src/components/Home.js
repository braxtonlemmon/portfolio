import React from "react";
import styled from "styled-components";
import Project from "./Project.js";
import CARDS from '../CARDS.js';

const Intro = styled.p`
  background: yellow;
  padding: 10px;
  margin: 15px 0;
  border: 2px solid black;
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
      <Intro>This is a page about me</Intro>
      <Projects>
        {projects}
      </Projects>
    </div>
  );
}

export default Home;

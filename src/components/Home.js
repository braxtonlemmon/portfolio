import React, { useEffect }from "react";
import styled from "styled-components";
import Project from "./Project.js";
import CARDS from '../CARDS.js';
import { H2 } from './shared/Headings.js';
import Crossword from './Crossword.js';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (min-width: 43em) {
    margin-top: 100px;
  }

`
const Intro = styled(H2)`
  align-self: flex-end;
  font-size: 3em;
`;

const Projects = styled.div`
  display: grid;
  margin: 12px 0;
  grid-template-columns: 1fr;
  gap: 30px;

  @media only screen and (min-width: 43em) {
    grid-template-columns: 1fr 1fr;
  }
  @media only screen and (min-width: 64em) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media only screen and (min-width: 86em) {
    grid-template-columns: repeat(4, auto);
  }
`;

const Work = styled.div`
  /* border: 1px solid grey; */
  padding: 20px;
  background: #e1e1e1;
  box-shadow: 5px 5px 3px grey, -5px 5px 3px grey;
  z-index: 1; 
  margin-bottom: 20px;
`

function Home() {
  const projects = [];
  CARDS.forEach(card => projects.push(<Project card={card} key={card.id} />));

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Wrapper>
      <Intro>Braxton Lemmon</Intro>
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

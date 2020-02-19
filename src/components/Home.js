import React from "react";
import styled from "styled-components";

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
  background: green;

  @media only screen and (min-width: 30em) {
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (min-width: 42em) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media only screen and (min-width: 64em) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Project = styled.p`
  background: orange;
  height: 200px;
  width: 200px;
  border: 2px solid black;
`;

function Home() {
  return (
    <div>
      <Intro>This is a page about me</Intro>
      <Projects>
        <Project>First</Project>
        <Project>Second</Project>
        <Project>Third</Project>
      </Projects>
    </div>
  );
}

export default Home;

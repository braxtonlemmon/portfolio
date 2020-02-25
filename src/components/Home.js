import React from "react";
import styled from "styled-components";
import Project from "./Project.js";


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
  return (
    <div>
      <Intro>This is a page about me</Intro>
      <Projects>
        <Project 
          img={'odinbook.gif'}
          github={'https://github.com/braxtonlemmon/odin-facebook'}
          live={'https://murmuring-wave-95625.herokuapp.com/'} 
          isLive
        />
        <Project 
          img={'chess.png'}
          github={'https://github.com/braxtonlemmon/chess'}  
        />
        <Project 
          img={'pomodoro.gif'}
          github={'https://github.com/braxtonlemmon/pomodoro'}
          live={'https://braxtonlemmon.github.io/pomodoro/'}
          isLive
        />
        <Project 
          img={'weather.png'}
          github={'https://github.com/braxtonlemmon/weather-app'}
          live={'https://braxtonlemmon.github.io/weather-app/'}
          isLive
        />
        <Project
          img={'pitchfork.png'}
          github={'https://github.com/braxtonlemmon/pitchfork-clone'}
          live={'https://braxtonlemmon.github.io/pitchfork-clone/'}
          isLive
        />
      </Projects>
    </div>
  );
}

export default Home;

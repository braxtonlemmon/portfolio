import React, { useState } from 'react';
import styled from 'styled-components';

const TileBox = styled.div`
  background: ${props => props.letter ? 'black' : 'none'};
  background: ${props => {
    if (props.letter) {
      return 'black';
    } else if (props.accent) {
      return `${props.color}`;
      // return `linear-gradient(${props.degree}deg, ${props.color}, ${props.color2})`
    } else {
      return 'none';
    }
  }};

  border: ${props => {
    if (props.accent) {
      return '4px solid black';
    } else {
      return 'none';
    }
  }};

  color: ${props => props.develop ? '#e0ff5d' : 'white'};
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3em;
  &:hover {
    transform: ${props => props.letter ? 'rotate(10deg)' : 'none'};
  }
    @media only screen and (min-width: 41em) {
    font-size: 1.8em;
  }
  @media only screen and (min-width: 62em) {
    font-size: 2.2em;
  }
  @media only screen and (min-width: 84em) {
    font-size: 2.5em;
  }
`;

function Tile(props) {
  const [color, setColor] = useState()
  const [color2, setColor2] = useState();
  const [degree, setDegree] = useState();
  
  const handleChange = () => {
    const randomColor = getRandomColor();
    const randomColor2 = getRandomColor();
    const randomDegree = getRandomDegree();
    setColor(randomColor);
    setColor2(randomColor2);
    setDegree(randomDegree);
  }

  const getRandomColor = () => {
    const color = Math.floor(Math.random()*16777216).toString(16);
    return '#000000'.slice(0, -color.length) + color;
  }

  const getRandomDegree = () => {
    return Math.floor(Math.random() * 360);
  }

  return (
    <TileBox 
      onMouseEnter={handleChange}
      onTouchStart={handleChange}
      color={color}
      color2={color2}
      degree={degree}
      letter={props.letter}
      accent={props.accent}
      develop={props.develop}
    >
      {props.children}  
    </TileBox>

  )
}

export default Tile;
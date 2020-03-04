import React from 'react';
import styled from 'styled-components';
import { letters, develop } from '../data/CrosswordData.js';

const CrosswordContainer = styled.div`
  display: grid;
  gap: 2px;
  grid-template-columns: repeat(12, 1.75em);
  grid-template-rows: repeat(9, 1.75em);
  justify-self: center;
  margin: 20px 0;
  padding-bottom: 30px;

    
  @media only screen and (min-width: 41em) {
    grid-template-columns: repeat(12, 2.5em);
    grid-template-rows: repeat(9, 2.5em);
  }
  @media only screen and (min-width: 62em) {
    grid-template-columns: repeat(12, 3em);
    grid-template-rows: repeat(9, 3em);
  }
  @media only screen and (min-width: 84em) {
    grid-template-columns: repeat(12, 3.2em);
    grid-template-rows: repeat(9, 3.2em);
  }
`;

const Tile = styled.div`
  background: ${props => props.letter ? 'black' : '#ebebeb'};
  background: ${props => {
    if (props.letter) {
      return 'black';
    } else if (props.accent) {
      return '#c4c4c4';
    } else {
      return 'none';
    }
  }};

  border: ${props => {
    if (props.accent) {
      return '2px dotted black';
    } else {
      return 'none';
    }
  }};

  /* border: 1px dotted black; */
  color: ${props => props.develop ? '#e0ff5d' : 'white'};
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3em;
  &:hover {
    transform: ${props => props.letter ? 'rotate(10deg)' : 'none'};
    background: ${props => {
      if (props.accent) return 'green';
    }}
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
`

const generateTiles = () => {
  let tiles = [];
  for(let i = 0; i < 108; i++) {
    if (letters[i] !== undefined) {
      tiles.push(
        letters[i].length === 1 ?
          (develop.includes(i) ? 
          <Tile key={i} letter develop>{letters[i]}</Tile>:
          <Tile key={i} letter>{letters[i]}</Tile> 
          )
        :
        <Tile key={i} accent></Tile> 
      )
    }
    else {
      tiles.push(<Tile key={i} />)
    }



      // if (letters[i] !== undefined) {
      //   return letters[i] === '' ? <Tile key={i} accent /> : <Tile key={i} letter>{letters[i]}</Tile>
      // }
      // letters[i] ? 
      // <Tile key={i} letter>{letters[i]}</Tile> :
      // <Tile key={i} />

  }
  return tiles;
}


const Crossword = () => {
  
  
  return (
    <CrosswordContainer>
      {generateTiles()}
    </CrosswordContainer>
  )
}

export default Crossword;

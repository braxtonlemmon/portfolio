import React from 'react';
import styled from 'styled-components';
import { letters, develop } from '../data/CrosswordData.js';
import Tile from './Tile';

const CrosswordContainer = styled.div`
  display: grid;
  gap: 2px;
  grid-template-columns: repeat(12, 1.5em);
  grid-template-rows: repeat(9, 1.5em);
  justify-self: center;
  padding-bottom: 30px;
  font-weight: 600;

  @media only screen and (min-width: 26em) {
    grid-template-columns: repeat(12, 2.0em);
    grid-template-rows: repeat(9, 2.0em);
  }
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

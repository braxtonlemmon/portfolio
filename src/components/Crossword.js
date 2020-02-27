import React from 'react';
import styled from 'styled-components';
import Letters from '../CrosswordData.js';

const CrosswordContainer = styled.div`
  display: grid;
  gap: 2px;
  grid-template-columns: repeat(10, 32px);
  grid-template-rows: repeat(7, 32px);
  justify-self: center;
  margin: 20px;
`

const Tile = styled.div`
  background: ${props => props.letter ? 'black' : '#ebebeb'};
  border: 1px dotted black;
  color: white;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4em;
`

const generateTiles = () => {
  let tiles = [];
  for(let i = 0; i < 70; i++) {
    tiles.push(
      Letters[i] ? 
      <Tile key={i} letter>{Letters[i]}</Tile> :
      <Tile key={i} />
    );
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

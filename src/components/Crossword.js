import React from 'react';
import styled from 'styled-components';
import Letters from '../CrosswordData.js';

const CrosswordContainer = styled.div`
  display: grid;
  gap: 2px;
  grid-template-columns: repeat(12, 1.75em);
  grid-template-rows: repeat(9, 1.75em);
  justify-self: center;
  margin: 20px 0;
  padding-bottom: 30px;
  border-bottom: 1px solid black;
    
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
`

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
  /* border: 1px dotted black; */
  color: white;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3em;

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
    if (Letters[i] !== undefined) {
      tiles.push(
        Letters[i].length === 1 ?
        <Tile key={i} letter>{Letters[i]}</Tile> :
        <Tile key={i} accent></Tile> 
      )
    }
    else {
      tiles.push(<Tile key={i} />)
    }



      // if (Letters[i] !== undefined) {
      //   return Letters[i] === '' ? <Tile key={i} accent /> : <Tile key={i} letter>{Letters[i]}</Tile>
      // }
      // Letters[i] ? 
      // <Tile key={i} letter>{Letters[i]}</Tile> :
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

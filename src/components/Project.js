import React from 'react';
import styled from 'styled-components';
// import img from '../img/odinbook.png';


const Card = styled.div`
  background: url(${props => props.imgUrl});
  background-size: cover;
  /* background-position: center; */
  position: relative;
  height: 400px;
  width: 300px;
  border: 2px solid black;
  display: grid;
  grid-template-rows: 1fr 50px;
`;

const Buttons = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 15px;
  grid-row: 2 / span 1;
  margin: 10px auto;

`;

const Button = styled.a`
  border-radius: 5px;
  border: 2px solid black;
  height: 30px;
  background: red;
  color: white;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 8px;
  &:hover {
    background: pink;
  }
  opacity: 1;
`

function Project(props) {
  return (
    <Card imgUrl={process.env.PUBLIC_URL + `${props.img}`}>
      <Buttons>
        <Button 
          href={props.github}
          target="_blank"
        >GITHUB</Button>
        {props.isLive && 
        <Button 
          href={props.live}
          target="_blank"
        >LIVE</Button>}
      </Buttons>
    </Card>
  )
}
export default Project;
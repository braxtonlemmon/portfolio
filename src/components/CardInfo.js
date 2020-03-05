import React from 'react';
import styled from 'styled-components';
import { H2 } from './shared/Headings.js';

const CardInfoBox = styled.div`
  grid-row: 1 / span 1;
  height: 100%;
  width: 100%;
  display: grid;
  gap: 10px;
  grid-auto-flow: row;
  align-content: center;
  justify-items: center;
  padding: 20px;
`;

const CardTitle = styled(H2)`
  background: rgb(222, 209, 175, 0.8);
  padding: 10px;
  border: 2px solid black;
  border-radius: 10px;
`;

const CardAbout = styled.p`
  text-align: center;
  background: #a0a0ffb0;
  padding: 5px;
  border: 2px solid black;
  border-radius: 5px;
`;

const CardTechnologies = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  background: #37bf42c4;
  padding: 5px;
  border: 2px solid black;
  border-radius: 5px;
`;

const CardInfo = (props) => {
  const info = props.info;
  const list = []
  info.technologies.forEach(tech => {
    list.push(
      <li key={tech}>{tech}</li>
    )
  })

  return (
    <CardInfoBox>
      <CardTitle>{info.title}</CardTitle>
      <CardAbout>{info.about}</CardAbout>
      <CardTechnologies>
        {list} 
      </CardTechnologies>
    </CardInfoBox>
  )
};

export default CardInfo;
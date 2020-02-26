import React from 'react';
import styled from 'styled-components';
import { H2 } from './shared/Headings.js';

const CardInfoBox = styled.div`
  grid-row: 1 / span 1;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`

const CardAbout = styled.p`
  text-align: center;
`

const CardInfo = (props) => {
  const info = props.info;
  const list = []
  info.technologies.forEach(tech => {
    list.push(
      <li>{tech}</li>
    )
  })

  return (
    <CardInfoBox>
      <H2>{info.title}</H2>
      <CardAbout>{info.about}</CardAbout>
      <ul>
        {list} 
      </ul>
    </CardInfoBox>
  )
}

export default CardInfo;
import React from 'react';
import styled from 'styled-components';
import hobbyList from '../data/HobbyData.js';

const Hobby = styled.span`
  padding: 8px;
  margin: 5px;
  border: 1px solid black;
  font-size: 1.3em;
  background: #e1e1e1;
  &:hover {
    background: url(${props => props.imgUrl});
    background-size: cover;
    background-position: center;
    color: transparent;
  }
`;

const HobbiesBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media only screen and (min-width: 43em) {
    width: 70%;
  }
`;

const generateHobbies = () => {
  return hobbyList.map(hobby => {
    return (
      <Hobby key={hobby} imgUrl={process.env.PUBLIC_URL + `img/${hobby.img}`}>
        {hobby.name}
      </Hobby>
    )
  })
}

const Hobbies = () => {
  return (
    <HobbiesBox>
      {generateHobbies()}
    </HobbiesBox>
  )
}

export default Hobbies;
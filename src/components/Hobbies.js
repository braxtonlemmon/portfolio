import React from 'react';
import styled from 'styled-components';
import hobbyList from '../data/HobbyData.js';

const HobbiesBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media only screen and (min-width: 43em) {
    width: 70%;
  }
`;

const Hobby = styled.span`
  padding: 8px;
  margin: 5px;
  /* border: 1px solid black; */
  font-size: 1.3em;
  background: #0000007d;
  color: white;
  text-shadow: -0.5px 0 black, 0 0.5px black, 0.5px 0 black, 0 -0.5px black;
  &:hover {
    background: url(${props => props.imgUrl});
    background-size: cover;
    background-position: center;
    color: transparent;
    transform: scale(1.1);
    text-shadow: none;
  }
`;


const Hobbies = () => {
  const generateHobbies = () => {
    return hobbyList.map(hobby => {
      return (
        <Hobby key={hobby.name} imgUrl={process.env.PUBLIC_URL + `img/${hobby.img}`}>
          {hobby.name}
        </Hobby>
      )
    })
  }

  return (
    <HobbiesBox>
      {generateHobbies()}
    </HobbiesBox>
  )
}

export default Hobbies;
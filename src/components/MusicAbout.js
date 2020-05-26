import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 5px 5px 3px grey, -5px 5px 3px grey;
  background: ${props => props.theme.colors.boxColor};
  padding: 10px;
  align-items: center;
  text-align: center;
  font-size: ${props => props.theme.fontSize.paragraph};
  width: 70%;
  
  @media only screen and (min-width: 86em) {
    align-items: flex-start;
    text-align: left;
  }
  
  p {
    padding: 10px 0;
  }
`;

const Img = styled.a`
  height: 40px;
  width: 75px;
  background-image: url('http://businessgrowthpodcast.com/wp-content/uploads/2014/07/Business-Growth-Podcast2.png');
  background-repeat: no-repeat;
  background-size: contain;
`;

const MusicAbout = () => {
  return (
    <Wrapper>
      <p>I write and produce music.</p>
      <p>My work was featured on Business Growth Podcast:</p>
      <Img href="http://businessgrowthpodcast.com/" target="_blank" />
      <p>Take a listen to my material and contact me if you have any musical needs for an upcoming project.</p>
    </Wrapper>
  )
};

export default MusicAbout;
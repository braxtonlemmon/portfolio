import React, { useEffect } from 'react';
import styled from 'styled-components';
import { H2 } from './shared/Headings.js';
import MusicAbout from './MusicAbout.js';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

`;

const MusicContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (min-width: 86em) {
    flex-direction: row-reverse;
  }
`;

const MusicPlayer = styled.div`
  box-shadow: 5px 5px 3px grey, -5px 5px 3px grey;
  margin-top: 30px;
  padding: 10px;
  font-size: 20px;
`;

const Music = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, []);

  return (
    <Wrapper>
      <H2>Music</H2>
      <MusicContent>
        <MusicAbout />
        <MusicPlayer>
          <iframe 
            width="100%" 
            height="500" 
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/8174867&sharing=false&show_playcount=false&show_artwork=false&download=false&buying=false&auto_play=false&color=c0000e&show_teaser=false"
            >
          </iframe>
        </MusicPlayer>
      </MusicContent>
    </Wrapper>
  )
}

export default Music;
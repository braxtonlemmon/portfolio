import React from 'react';
import styled from 'styled-components';
import { H2 } from './shared/Headings.js';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MusicPlayer = styled.div`
  box-shadow: 5px 5px 3px grey, -5px 5px 3px grey;
  margin-top: 30px;
  padding: 10px;
  font-size: 20px;
`

const MusicAbout = styled.p`
  text-align: center;
`

const Music = () => {
  return (
    <Wrapper>
      <H2>Music</H2>
      <MusicAbout>
        I write and produce music.
      </MusicAbout>
      <MusicPlayer>
        <iframe 
          width="100%" 
          height="500" 
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/8174867&sharing=false&show_playcount=false&show_artwork=false&download=false&buying=false&auto_play=false&color=c0000e&show_teaser=false"
          >
        </iframe>
      </MusicPlayer>
    </Wrapper>
    // <RelativeWrapper>
    //   <H2>Music Production</H2>
    //   {/* <AbsolutePlayer /> */}
    // </RelativeWrapper>
  )
}

export default Music;
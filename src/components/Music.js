import React from 'react';
import styled from 'styled-components';
// import ReactPlayer from 'react-player';
import { H2 } from './shared/Headings.js';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
// const Player = () => (
//   <ReactPlayer
//     url="https://soundcloud.com/glennmorrison/beethoven-moonlight-sonata"
//     width="100%"
//     height="100%"
//   />
// );

// const AbsolutePlayer = styled(Player)`
//   position: absolute;
//   top: 0;
//   left: 0;
// `

// const RelativeWrapper = styled.div`
//   position: relative;
//   padding-top: 56.25%;
// `

const MusicPlayer = styled.div`
  box-shadow: 5px 5px 3px grey, -5px 5px 3px grey;
  margin-top: 30px;
  padding: 10px;
`


const Music = () => {
  return (
    <Wrapper>
      <H2>Music</H2>
      <MusicPlayer>
        <iframe 
          width="100%" 
          height="500" 
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/8174867&sharing=false&show_playcount=false&show_artwork=false&download=false&buying=false&auto_play=false&color=c0000e"
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
import React from 'react';
import styled from 'styled-components';
// import ReactPlayer from 'react-player';
import { H2 } from './shared/Headings.js';

const Wrapper = styled.div`
  @media only screen and (min-width: 43em) {
    margin-top: 100px;
  }
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



const Music = () => {
  return (
    <Wrapper>
      <H2>Music</H2>
    </Wrapper>
    // <RelativeWrapper>
    //   <H2>Music Production</H2>
    //   {/* <AbsolutePlayer /> */}
    // </RelativeWrapper>
  )
}

export default Music;
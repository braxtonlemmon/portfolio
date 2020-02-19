import React from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';

const Player = () => (
  <ReactPlayer
    url="https://soundcloud.com/glennmorrison/beethoven-moonlight-sonata"
    width="100%"
    height="100%"
  />
);

const AbsolutePlayer = styled(Player)`
  position: absolute;
  top: 0;
  left: 0;
`

const RelativeWrapper = styled.div`
  position: relative;
  padding-top: 56.25%;
`



function Music() {
  return (
    <RelativeWrapper>
      <AbsolutePlayer />
    </RelativeWrapper>
  )
}

export default Music;
import React from 'react';
import styled from 'styled-components';

const BioBox = styled.p`
  text-align: center;
`

const bioText = `
My name is Braxton Lemmon. 
I received a Bachelor of Science in Recreation Management in 2014.
I've been a student of The Odin Project Full Stack curriculum since 2018.
`
const Bio = () => {
  return (
    <BioBox>
      {bioText}
    </BioBox>
  )
}

export default Bio;

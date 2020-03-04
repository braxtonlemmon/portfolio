import React from 'react';
import styled from 'styled-components';

const BioBox = styled.p`
  text-align: center;
`

const bioText = `
  My name is Braxton Lemmon. 
  I received a Bachelor of Science in Recreation Management in 2014. After graduating I spent time working as a therapist and as an English teacher. In 2018 I became a student of The Odin Project Full Stack curriculum.
`

const Bio = () => {
  return (
    <BioBox>
      {bioText}
    </BioBox>
  )
}

export default Bio;

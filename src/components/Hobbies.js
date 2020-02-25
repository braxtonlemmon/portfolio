import React from 'react';
import styled from 'styled-components';

const hobbyText = `
  If I'm not coding, I'm most likely enjoying my time doing one of the following activities: rock climbing, camping, making music, cooking, homebrewing.
`

const HobbiesBox = styled.div`

`

const Hobbies = () => {
  return (
    <HobbiesBox>
      {hobbyText}
    </HobbiesBox>
  )
}

export default Hobbies;
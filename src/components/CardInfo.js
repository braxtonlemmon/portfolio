import React from 'react';
import styled from 'styled-components';

const CardInfoBox = styled.div`
  grid-row: 1 / span 1;
  height: 100%;
  width: 100%;


`

const CardInfo = () => {
  return (
    <CardInfoBox><h1>Card!</h1></CardInfoBox>
  )
}

export default CardInfo;
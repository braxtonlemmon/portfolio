import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background: white;
  }

  html {
    overflow-y: scroll;
  }
  
  * {
    box-sizing: border-box;
    user-select: none;
    font-family: 'Acme', sans-serif;
  }
`

export default GlobalStyle;
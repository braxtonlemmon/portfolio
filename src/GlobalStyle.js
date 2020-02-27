import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background: #fafafa;
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
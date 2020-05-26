import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background: #fafafa;
    /* background-image: url('https://remember-to-cook.s3.us-east-2.amazonaws.com/_DSC0967.JPG'); */
    background-size: cover;
    background-attachment: fixed;
    background-repeat: none;
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
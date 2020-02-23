import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Bungee+Shade&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Trade+Winds&display=swap');

  body {
    background: white;
    
  }
  
  * {
    box-sizing: border-box;
  }
`

export default GlobalStyle;
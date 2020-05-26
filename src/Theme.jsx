import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    boxColor: '#e9e8e8a3',
    linkColor: '#551a91',
    fadedDark: '#464646',

  },
  fontSize: {
    paragraph: '1.3em' 
  }
}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
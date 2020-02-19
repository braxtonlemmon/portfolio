import React from "react";
import styled, {
  ThemeProvider,
  createGlobalStyle,
  css
} from "styled-components";
import { Reset } from "styled-reset";
import "./App.css";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";

const GlobalStyle = createGlobalStyle`
  * {
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    border: 2px solid black;
  }
`;

const theme = {
  primary: "orange",
  secondary: "pink",
  alert: "yellow"
  // font: 'Georgia'
};

// const Button = styled.button`
//   /* font-family: ${props => props.theme.font}; */
//   font-size: 1.3rem;
//   border: none;
//   border-radius: 5px;
//   padding: 7px 10px;
//   /* background: ${props => props.primary ? 'red' : 'green'}; */
//   ${props => props.color && css`
//     background: ${props => props.theme[props.color]};
//   `}
//   /* background: ${props => props.theme.primary}; */
//   color: white;
//   &:hover {
//     background: blue;
//   }
// `

// const H1 = styled.h1`
//   font-size: 3rem;
//   font-family: ${props => props.theme.font};
// `

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

const Intro = styled.p`
  background: yellow;
  padding: 10px;
  margin: 15px 0;
  border: 2px solid black;
`;

const Projects = styled.div`
  display: grid;
  margin-bottom: 50px;
  grid-template-columns: 1fr;
  gap: 10px;
  background: green;

  @media only screen and (min-width: 30em) {
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (min-width: 42em) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media only screen and (min-width: 64em) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Project = styled.p`
  background: orange;
  height: 200px;
  width: 200px;
  border: 2px solid black;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Reset />
        <Header />
        <Intro>This is a page about me.</Intro>
        <Projects>
          <Project>First</Project>
          <Project>Second</Project>
          <Project>Third</Project>
        </Projects>
        <Footer />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;

{
  /* <div className="App">
  <GlobalStyle />
  <H1>Styled Components</H1>
  <form action="">
    <input type="text"></input>
    <button>Create</button>
    <Button color="secondary">Create</Button>
  </form>
</div> */
}

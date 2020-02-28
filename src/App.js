import React, { useState } from "react";
import styled from "styled-components";
import { Reset } from "styled-reset";
import GlobalStyle from './GlobalStyle.js';
import { Transition } from 'react-transition-group';
import { Responsive } from 'responsive-react';
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Main from "./components/Main.js";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  font-family: 'Acme', sans-serif;
`;

// const duration = 300;

// const defaultStyle = {
//   transition: `opacity ${duration}ms ease-in-out`,
//   opacity: 0,
// }

// const transitionStyles = {
//   entering: { opacity: 1 },
//   entered:  { opacity: 1 },
//   exiting:  { opacity: 0 },
//   exited:   { opacity: 0 },
// };
function App() {
  const [mainId, setMainId] = useState(1);
  const [animate, setAnimate] = useState(true);

  const changeId = (id) => setMainId(id);
  const doAnimate = () => {
    setAnimate(true);
    setTimeout(() => {
      setAnimate(false);
    }, 3000);
  }

  return (
    <React.Fragment>
      <Reset />
      <GlobalStyle />
      <Wrapper>
        <Header
          changeId={changeId}
        />
        <Transition in={animate} timeout={600}>
          <Main id={mainId} />
        </Transition>
        <Responsive displayIn={["Mobile"]}>
          <Footer
            changeId={changeId}
            doAnimate={doAnimate}
          />
        </Responsive>
      </Wrapper>
    </React.Fragment>
  )
}

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       mainId: 1,
//       animate: true
//     };
//     this.changeId = this.changeId.bind(this);
//     this.doAnimate = this.doAnimate.bind(this);
//   }

//   doAnimate() {
//     this.setState({ animate: true });
//     setTimeout(() => {
//       this.setState({ animate: false });
//     }, 3000);
//   }

//   changeId(id) {
//     this.setState({ mainId: id });
//   }

//   render() {
//     return (
//       <React.Fragment>
//         <Reset />
//         <GlobalStyle />
//         <Wrapper>
//           <Header 
//             changeId={this.changeId}
//           />
//           <Transition in={this.state.animate} timeout={600}>
//            <Main id={this.state.mainId} state={this.state} />
//           </Transition>
//           <Responsive displayIn={["Mobile"]}>
//             <Footer 
//              changeId={this.changeId} 
//              doAnimate={this.doAnimate}
//             />
//           </Responsive>
//         </Wrapper>
//       </React.Fragment>
//     );
//   }
// }

export default App;

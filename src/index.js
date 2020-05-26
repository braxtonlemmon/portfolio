import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from 'react-router-dom';
import "typeface-acme"
import "typeface-barlow"
import "typeface-open-sans"

// if (process.env.NODE_ENV === 'development') {
//   const whyDidYouRender = require('@welldone-software/why-did-you-render');
//   whyDidYouRender(React, {
//     trackAllPureComponents: true,
//   });
// }

ReactDOM.render(
  <Router>
    <App/>
  </Router>, 
  document.getElementById("root"));


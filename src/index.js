import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from 'react-router-dom';
import "typeface-bungee-shade";
import "typeface-acme"

// if (process.env.NODE_ENV === 'development') {
//   const whyDidYouRender = require('@welldone-software/why-did-you-render');
//   whyDidYouRender(React, {
//     trackAllPureComponents: true,
//   });
// }
const loader = document.querySelector('.loader');

const showLoader = () => loader.classList.remove('loader--hide');
const hideLoader = () => loader.classList.add('loader--hide');

setTimeout(() => 


  ReactDOM.render(
    <Router>
      <App 
        hideLoader={hideLoader}
        showLoader={showLoader}
      />
    </Router>, 
    document.getElementById("root")
  )
, 3000);




serviceWorker.unregister();

import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "typeface-bungee-shade";
import "typeface-acme"

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();

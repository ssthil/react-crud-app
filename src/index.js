import React, { Component } from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";

import App from "./components/App";
/** css */
import "./style.css";

import "./utils";

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("app")
);

import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import App from "./App";
import Navbar from "./components/Navbar";
import "./index.css";

ReactDOM.render(
  <HashRouter>
    <Navbar />
    <App />
  </HashRouter>,
  document.getElementById("root")
);

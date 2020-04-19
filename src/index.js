import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { PictureContextProvider } from "./pictureContext";

ReactDOM.render(
  <PictureContextProvider>
    <Router>
      <App />
    </Router>
  </PictureContextProvider>,
  document.getElementById("root")
);

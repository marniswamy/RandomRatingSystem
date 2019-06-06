import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Store from "./store";
import Routes from "./routes";
import { browserHistory } from "react-router";

ReactDOM.render(
  <Provider store={Store()}>
    <Routes history={browserHistory} />
  </Provider>,
  document.getElementById("root")
);

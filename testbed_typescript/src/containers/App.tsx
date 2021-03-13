import React from "react";
import classes from "./App.module.scss";

import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";

import store from "../store";

import Main from "../components/Main/Main";

class App extends React.Component {
  render() {
    return (
      <div className={classes.App}>
        <BrowserRouter>
          <Provider store={store}>
            <Main />
          </Provider>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

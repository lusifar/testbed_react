import React from "react";
import classes from "./App.module.scss";

import Main from "../components/Main/Main";

class App extends React.Component {
  render() {
    return (
      <div className={classes.App}>
        <Main />
      </div>
    );
  }
}

export default App;

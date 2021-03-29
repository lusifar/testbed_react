import React from "react";

import classes from "./BurgerBuilder.module.scss";

class BurgerBuilder extends React.Component {
  render() {
    return (
      <div className={classes.BurgerBuilder}>
        <p>BurgerBuilder Content</p>
      </div>
    );
  }
}

export default BurgerBuilder;

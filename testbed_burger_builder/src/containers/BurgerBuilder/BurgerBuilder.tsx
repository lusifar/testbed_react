import React from "react";

import classes from "./BurgerBuilder.module.scss";

import Burger from "../../components/Burger/Burger";

class BurgerBuilder extends React.Component {
  render() {
    return (
      <div className={classes.BurgerBuilder}>
        <Burger></Burger>
      </div>
    );
  }
}

export default BurgerBuilder;

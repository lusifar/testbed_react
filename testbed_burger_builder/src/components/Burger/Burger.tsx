import React from "react";
import classes from "./Burger.module.scss";

interface TProps {}

const Burger: React.FC<TProps> = () => {
  return (
    <React.Fragment>
      <div className={classes.Burger}>
        <p>Burger</p>
      </div>
    </React.Fragment>
  );
};

export default Burger;

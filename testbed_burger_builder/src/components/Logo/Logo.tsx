import React from "react";
import classes from "./Logo.module.scss";

import burgerLogo from "../../assets/images/burger-logo.png";

interface TProps {}

const Logo: React.FC<TProps> = (props) => {
  return (
    <div className={classes.Logo}>
      <img src={burgerLogo} alt="My Burger" />
    </div>
  );
};

export default Logo;

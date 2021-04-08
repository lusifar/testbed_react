import React from "react";
import classes from "./NavigationItems.module.scss";

import NavigationItem from "./NavigationItem/NavigationItem";

interface TProps {}

const NavigationItems: React.FC<TProps> = (props) => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link="/" active={true}>
        Burger Builder
      </NavigationItem>
      <NavigationItem link="/">Checkout</NavigationItem>
    </ul>
  );
};

export default NavigationItems;

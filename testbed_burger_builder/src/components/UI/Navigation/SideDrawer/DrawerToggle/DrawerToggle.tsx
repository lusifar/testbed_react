import React from "react";
import classes from "./DrawerToggle.module.scss";

interface TProps {
  clicked: () => void;
}

const DrawerToggle: React.FC<TProps> = (props) => {
  return (
    <div className={classes.DrawerToggle} onClick={props.clicked}>
      <div />
      <div />
      <div />
    </div>
  );
};

export default DrawerToggle;

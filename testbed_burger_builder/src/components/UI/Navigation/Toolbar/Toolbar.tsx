import React from "react";
import classes from "./Toolbar.module.scss";

interface TProps {}

const Toolbar: React.FC<TProps> = (props) => {
  return (
    <header className={classes.Toolbar}>
      <div>MENU</div>
      <div>LOGO</div>
      <nav>...</nav>
    </header>
  );
};

export default Toolbar;

import React from "react";
import classes from "./Layout.module.scss";

import Toolbar from "../UI/Navigation/Toolbar/Toolbar";

interface TProps {}

const Layout: React.FC<TProps> = (props) => {
  return (
    <React.Fragment>
      <div className={classes.Layout}>
        <Toolbar></Toolbar>
        <main className={classes.Content}>{props.children}</main>
      </div>
    </React.Fragment>
  );
};

export default Layout;

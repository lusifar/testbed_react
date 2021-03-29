import React from "react";

import classes from "./Layout.module.scss";

interface TProps {}

const Layout: React.FC<TProps> = (props) => {
  return (
    <React.Fragment>
      <div className={classes.Layout}>
        <div>toolbar, sidebar and backdrop</div>
        <main className={classes.Content}>{props.children}</main>
      </div>
    </React.Fragment>
  );
};

export default Layout;

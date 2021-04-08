import React, { useState } from "react";
import classes from "./Layout.module.scss";

import Toolbar from "../UI/Navigation/Toolbar/Toolbar";
import SideDrawer from "../UI/Navigation/SideDrawer/SideDrawer";

interface TProps {}

const Layout: React.FC<TProps> = (props) => {
  const [showSideDrawer, setShowSideDrawer] = useState(false);

  const sideDrawerClosedHandler = () => {
    setShowSideDrawer(false);
  };

  const sideDrawerToggleHandler = () => {
    setShowSideDrawer((prevState) => {
      return !prevState;
    });
  };

  return (
    <React.Fragment>
      <div className={classes.Layout}>
        <SideDrawer open={showSideDrawer} closed={sideDrawerClosedHandler} />
        <Toolbar drawerToggleClicked={sideDrawerToggleHandler} />
        <main className={classes.Content}>{props.children}</main>
      </div>
    </React.Fragment>
  );
};

export default Layout;

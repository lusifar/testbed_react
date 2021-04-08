import React from "react";
import classes from "./Toolbar.module.scss";

import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";
import Logo from "../../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

interface TProps {
  drawerToggleClicked: () => void;
}

const Toolbar: React.FC<TProps> = (props) => {
  return (
    <header className={classes.Toolbar}>
      <DrawerToggle clicked={props.drawerToggleClicked} />
      <div className={classes.Logo}>
        <Logo />
      </div>
      <nav className={classes.DesktopOnly}>
        <NavigationItems></NavigationItems>
      </nav>
    </header>
  );
};

export default Toolbar;

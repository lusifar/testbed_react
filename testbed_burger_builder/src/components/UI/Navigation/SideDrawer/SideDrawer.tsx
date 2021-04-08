import React from "react";
import classes from "./SideDrawer.module.scss";

import Logo from "../../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from "../../Backdrop/Backdrop";

interface TProps {
  open: boolean;
  closed: () => void;
}

const SideDrawer: React.FC<TProps> = (props) => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (props.open) {
    console.log("AAAAA");
    attachedClasses = [classes.SideDrawer, classes.Open];
  }

  return (
    <React.Fragment>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems></NavigationItems>
        </nav>
      </div>
    </React.Fragment>
  );
};

export default SideDrawer;

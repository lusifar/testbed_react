import React from "react";

import classes from "./Backdrop.module.scss";

interface TProps {
  show: boolean;
  clicked: () => void;
}

const Backdrop: React.FC<TProps> = (props) => {
  return props.show ? (
    <div className={classes.Backdrop} onClick={props.clicked}>
      {props.children}
    </div>
  ) : null;
};

export default Backdrop;

import React from "react";

import classes from "./Button.module.scss";

interface TProps {
  type: string;
  onClick: () => void;
}

const Button: React.FC<TProps> = (props) => {
  return (
    <div
      className={[classes.Button, classes[props.type]].join(" ")}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
};

export default Button;

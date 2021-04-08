import React from "react";
import classes from "./NavigationItem.module.scss";

interface TProps {
  link: string;
  active?: boolean;
}

const NavigationItem: React.FC<TProps> = (props) => {
  return (
    <li className={classes.NavigationItem}>
      <a href={props.link} className={props.active ? classes.active : ""}>
        {props.children}
      </a>
    </li>
  );
};

export default NavigationItem;

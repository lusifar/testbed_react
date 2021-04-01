import React from "react";

import classes from "./BuildControls.module.scss";

import BuildControl from "./BuildControl/BuildControl";

interface TProps {
  ingredientAdded: (type: string) => void;
  ingredientRemoved: (type: string) => void;
  totalPrice: string;
  disabledInfo: { [key: string]: boolean };
}

interface TControl {
  label: string;
  type: string;
}

const controls: TControl[] = [
  { label: "Salad", type: "Salad" },
  { label: "Bacon", type: "Bacon" },
  { label: "Cheese", type: "Cheese" },
  { label: "Meat", type: "Meat" },
];

const BuildControls: React.FC<TProps> = (props) => {
  return (
    <div className={classes.BuildControls}>
      <strong>Total Price: {props.totalPrice}</strong>
      {controls.map((ctrl) => {
        return (
          <BuildControl
            key={ctrl.label}
            label={ctrl.label}
            added={() => props.ingredientAdded(ctrl.type)}
            removed={() => props.ingredientRemoved(ctrl.type)}
            disabled={props.disabledInfo[ctrl.type]}
          />
        );
      })}
    </div>
  );
};

export default BuildControls;

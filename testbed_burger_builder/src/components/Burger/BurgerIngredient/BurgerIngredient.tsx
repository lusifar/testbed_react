import React from "react";

import classes from "./BurgerIngredient.module.scss";

import { BurgerIngredientType } from "../../../configs";

interface TProps {
  type: BurgerIngredientType;
}

const BurgerIngredient: React.FC<TProps> = (props) => {
  const ingredient = (type: BurgerIngredientType) => {
    switch (type) {
      case BurgerIngredientType.BreadBottom:
        return <div className={classes.BreadBottom}></div>;
      case BurgerIngredientType.BreadTop:
        return (
          <div className={classes.BreadTop}>
            <div className={classes.Seed1}></div>
            <div className={classes.Seed2}></div>
          </div>
        );
      case BurgerIngredientType.Meat:
        return <div className={classes.Meat}></div>;
      case BurgerIngredientType.Cheese:
        return <div className={classes.Cheese}></div>;
      case BurgerIngredientType.Bacon:
        return <div className={classes.Bacon}></div>;
      case BurgerIngredientType.Salad:
        return <div className={classes.Salad}></div>;
      default:
        return null;
    }
  };

  return <React.Fragment>{ingredient(props.type)}</React.Fragment>;
};

export default BurgerIngredient;

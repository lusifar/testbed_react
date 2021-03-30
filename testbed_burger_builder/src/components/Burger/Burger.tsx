import React from "react";
import classes from "./Burger.module.scss";

import { BurgerIngredientType } from "../../configs";

import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

interface TProps {}

const Burger: React.FC<TProps> = () => {
  return (
    <React.Fragment>
      <div className={classes.Burger}>
        <BurgerIngredient type={BurgerIngredientType.BreadTop} />
        <BurgerIngredient type={BurgerIngredientType.Cheese} />
        <BurgerIngredient type={BurgerIngredientType.Meat} />
        <BurgerIngredient type={BurgerIngredientType.BreadBottom} />
      </div>
    </React.Fragment>
  );
};

export default Burger;

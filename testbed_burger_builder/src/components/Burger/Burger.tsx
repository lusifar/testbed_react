import React from "react";
import classes from "./Burger.module.scss";

import { BurgerIngredientType } from "../../configs";

import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

interface TProps {
  ingredients: {
    [key: string]: number;
  };
}

const Burger: React.FC<TProps> = (props) => {
  const transformedIngredients = () => {
    const res = Object.entries(props.ingredients)
      .map(([key, value], index1) => {
        return Array(value)
          .fill(key)
          .map((type, index2) => {
            return (
              <BurgerIngredient
                key={`${key}_${index1}_${index2}`}
                type={type}
              />
            );
          });
      })
      .reduce((arr, e) => arr.concat(e), []);

    return res.length === 0 ? <p>Please start adding ingredients!</p> : res;
  };

  return (
    <React.Fragment>
      <div className={classes.Burger}>
        <BurgerIngredient type={BurgerIngredientType.BreadTop} />
        {transformedIngredients()}
        <BurgerIngredient type={BurgerIngredientType.BreadBottom} />
      </div>
    </React.Fragment>
  );
};

export default Burger;

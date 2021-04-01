import React from "react";

import classes from "./BurgerBuilder.module.scss";

import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

import { BurgerIngredientPrice } from "../../configs";

interface TProps {}

interface TState {
  ingredients: {
    [key: string]: number;
  };
  totalPrice: number;
}

class BurgerBuilder extends React.Component<TProps> {
  state: TState = {
    ingredients: {
      Seeds1: 0,
      Seeds2: 0,
      Meat: 0,
      Cheese: 0,
      Salad: 0,
      Bacon: 0,
    },
    totalPrice: 4,
  };

  addIngredientHandler = (type: string) => {
    this.setState((prevState: TState) => {
      const newState = {
        ingredients: { ...prevState.ingredients },
        totalPrice: prevState.totalPrice,
      };
      newState.ingredients[type] = prevState.ingredients[type] + 1;
      newState.totalPrice += BurgerIngredientPrice[type];

      return newState;
    });
  };

  removeIngredientHandler = (type: string) => {
    this.setState((prevState: TState) => {
      if (prevState.ingredients[type] === 0) {
        return;
      }

      const newState = {
        ingredients: { ...prevState.ingredients },
        totalPrice: prevState.totalPrice,
      };
      newState.ingredients[type] = prevState.ingredients[type] - 1;
      newState.totalPrice -= BurgerIngredientPrice[type];

      return newState;
    });
  };

  render() {
    const disabledInfo: { [key: string]: boolean } = {};

    Object.keys(this.state.ingredients).forEach((key) => {
      disabledInfo[key] = this.state.ingredients[key] <= 0;
    });

    return (
      <div className={classes.BurgerBuilder}>
        <Burger ingredients={this.state.ingredients}></Burger>
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          totalPrice={this.state.totalPrice.toFixed(2)}
          disabledInfo={disabledInfo}
        ></BuildControls>
      </div>
    );
  }
}

export default BurgerBuilder;

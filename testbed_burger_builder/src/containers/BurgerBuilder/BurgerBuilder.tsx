import React from "react";

import classes from "./BurgerBuilder.module.scss";

import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Modal from "../../components/UI/Modal/Modal";

import { BurgerIngredientPrice } from "../../configs";

interface TProps {}

interface TState {
  ingredients: {
    [key: string]: number;
  };
  totalPrice: number;
  purchasable: boolean;
  purchasing: boolean;
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
    purchasable: false,
    purchasing: false,
  };

  isPurchasable(ingredients: { [key: string]: number }): boolean {
    return Object.values(ingredients).reduce((sum, e) => sum + e, 0) > 0;
  }

  addIngredientHandler = (type: string) => {
    this.setState((prevState: TState) => {
      const newState = {
        ingredients: { ...prevState.ingredients },
        totalPrice: prevState.totalPrice,
        purchasable: false,
      };
      newState.ingredients[type] = prevState.ingredients[type] + 1;
      newState.totalPrice += BurgerIngredientPrice[type];
      newState.purchasable = this.isPurchasable(newState.ingredients);

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
        purchasable: false,
      };
      newState.ingredients[type] = prevState.ingredients[type] - 1;
      newState.totalPrice -= BurgerIngredientPrice[type];
      newState.purchasable = this.isPurchasable(newState.ingredients);

      return newState;
    });
  };

  purchaseHandler = () => {
    this.setState({
      purchasing: true,
    });
  };

  purchaseCancelHandler = () => {
    this.setState({
      purchasing: false,
    });
  };

  purchaseContinueHandler = () => {
    alert("Continue!!");
  };

  render() {
    const disabledInfo: { [key: string]: boolean } = {};

    Object.keys(this.state.ingredients).forEach((key) => {
      disabledInfo[key] = this.state.ingredients[key] <= 0;
    });

    return (
      <div className={classes.BurgerBuilder}>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          <OrderSummary
            ingredients={this.state.ingredients}
            purchaseContinueHandler={this.purchaseContinueHandler}
            purchaseCancelHandler={this.purchaseCancelHandler}
            price={this.state.totalPrice}
          ></OrderSummary>
        </Modal>

        <Burger ingredients={this.state.ingredients}></Burger>
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          totalPrice={this.state.totalPrice.toFixed(2)}
          disabledInfo={disabledInfo}
          purchasable={this.state.purchasable}
          ordered={this.purchaseHandler}
        ></BuildControls>
      </div>
    );
  }
}

export default BurgerBuilder;

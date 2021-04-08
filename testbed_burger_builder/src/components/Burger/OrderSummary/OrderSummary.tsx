import React, { useEffect } from "react";

import classes from "./OrderSummary.module.scss";

import Button from "../../UI/Button/Button";

interface TProps {
  ingredients: { [key: string]: number };
  purchaseContinueHandler: () => void;
  purchaseCancelHandler: () => void;
  price: number;
}

const OrderSummary: React.FC<TProps> = (props) => {
  useEffect(() => {
    console.log("[OrderSummary] useEffect");
    console.log(`total price: ${props.price}`);
  }, [props.price]);

  const ingredientSummary = Object.entries(props.ingredients).map(
    ([key, value]) => {
      return (
        <li key={key} style={{ listStyleType: "none" }}>
          {key}: {value}
        </li>
      );
    }
  );

  return (
    <div className={classes.OrderSummary}>
      <h3>Your Order</h3>
      <p>A delicious burger with the folowing ingredients:</p>
      {ingredientSummary}
      <p>
        <strong>Total Price:</strong>
        {props.price.toFixed(2)}
      </p>
      <p>Continue to Checkout?</p>
      <Button type="Danger" onClick={props.purchaseCancelHandler}>
        CANCEL
      </Button>
      <Button type="Success" onClick={props.purchaseContinueHandler}>
        CONTINUE
      </Button>
    </div>
  );
};

export default OrderSummary;

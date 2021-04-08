export const BurgerIngredientType: { [key: string]: string } = {
  BreadBottom: "BreadBottom",
  BreadTop: "BreadTop",
  Seeds1: "Seeds1",
  Seeds2: "Seeds2",
  Meat: "Meat",
  Cheese: "Cheese",
  Salad: "Salad",
  Bacon: "Bacon",
};

export const BurgerIngredientPrice: { [key: string]: number } = {
  Meat: 1.3,
  Cheese: 0.4,
  Salad: 0.5,
  Bacon: 0.6,
};

export const APIHost =
  "https://burger-builder-6e813-default-rtdb.firebaseio.com/";

export const APIEndpoints: { [key: string]: string } = {
  Orders: "/orders.json",
};

export type BurgerIngredients = {
  topBread: number;
  salad: number;
  bacon: number;
  cheese: number;
  meat: number;
  bottomBread: number;
};

export type Order = {
  burgerIngredients: BurgerIngredients;
  totalPrice: number;
};

export type DisabledInfo = {
  salad: boolean;
  bacon: boolean;
  cheese: boolean;
  meat: boolean;
};

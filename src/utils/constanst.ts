export enum IngredientsNames {
  topBread = 'topBread',
  salad = 'salad',
  bacon = 'bacon',
  cheese = 'cheese',
  meat = 'meat',
  bottomBread = 'bottomBread',
}

export enum IngredientsPrices {
  salad = 0.6,
  bacon = 0.8,
  cheese = 0.3,
  meat = 1.3,
}

export enum IngredientsReducerActions {
  ADD_SALAD = 'ADD_SALAD',
  REMOVE_SALAD = 'REMOVE_SALAD',
  ADD_BACON = 'ADD_BACON',
  REMOVE_BACON = 'REMOVE_BACON',
  ADD_CHEESE = 'ADD_CHEESE',
  REMOVE_CHEESE = 'REMOVE_CHEESE',
  ADD_MEAT = 'ADD_MEAT',
  REMOVE_MEAT = 'REMOVE_MEAT',
  CLEAR_INGREDIENTS = 'CLEAR_INGREDIENTS',
}

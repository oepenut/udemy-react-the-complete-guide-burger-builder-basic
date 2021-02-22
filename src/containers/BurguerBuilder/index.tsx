import React, { useReducer } from 'react';
import { IngredientsReducerActions } from 'utils/constanst';
import Ingredient from 'components/Ingredient';
import BuildControls from 'components/BuildControls';
import Styles from './BurguerBuilder.module.css';

type BurguerIngredients = {
  topBread: number;
  salad: number;
  bacon: number;
  cheese: number;
  meat: number;
  bottomBread: number;
};

const Index = () => {
  const burguerIngredients: BurguerIngredients = {
    topBread: 1,
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0,
    bottomBread: 1,
  };

  const ingredientsReducer = (
    state: BurguerIngredients,
    action: { type: IngredientsReducerActions }
  ): BurguerIngredients => {
    const { salad, bacon, cheese, meat } = state;

    switch (action.type) {
      case IngredientsReducerActions.ADD_SALAD:
        return { ...state, salad: salad + 1 };
      case IngredientsReducerActions.REMOVE_SALAD:
        return salad > 1 ? { ...state, salad: salad - 1 } : state;
      case IngredientsReducerActions.ADD_BACON:
        return { ...state, bacon: bacon + 1 };
      case IngredientsReducerActions.REMOVE_BACON:
        return bacon > 1 ? { ...state, bacon: bacon - 1 } : state;
      case IngredientsReducerActions.ADD_CHEESE:
        return { ...state, cheese: cheese + 1 };
      case IngredientsReducerActions.REMOVE_CHEESE:
        return cheese > 1 ? { ...state, cheese: cheese - 1 } : state;

      case IngredientsReducerActions.ADD_MEAT:
        return { ...state, meat: meat + 1 };
      case IngredientsReducerActions.REMOVE_MEAT:
        return meat > 1 ? { ...state, meat: meat - 1 } : state;

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(ingredientsReducer, burguerIngredients);

  const getProperty = <T, K extends keyof T>(
    object: T,
    propertyName: K
  ): T[K] => {
    return object[propertyName]; // o[propertyName] is of type T[K]
  };

  const ingredientsArray = Object.keys(state).map((ingredient) => {
    return [
      ...Array(getProperty(state, ingredient as keyof BurguerIngredients)),
    ].map((_, index) => {
      return (
        <Ingredient key={ingredient + index} ingredientType={ingredient} />
      );
    });
  });

  return (
    <div>
      <div className={Styles.Burger}>{ingredientsArray}</div>
      <BuildControls ingredientsReducerDispatch={dispatch} />
    </div>
  );
};

export default Index;

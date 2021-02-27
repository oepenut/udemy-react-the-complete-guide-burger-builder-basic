import React, { useReducer, useState } from 'react';
import { IngredientsPrices, IngredientsReducerActions } from 'utils/constanst';
import { BurgerIngredients, Order, DisabledInfo } from 'types/types';
import Ingredient from 'components/Ingredient';
import BuildControls from 'components/BuildControls';
import Modal from 'components/UI/Modal';
import OrderSummary from 'components/OrderSummary';
import Styles from './BurgerBuilder.module.css';

const Index = () => {
  const initialBurgerIngredients: BurgerIngredients = {
    topBread: 1,
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0,
    bottomBread: 1,
  };

  const initialOrderState: Order = {
    burgerIngredients: initialBurgerIngredients,
    totalPrice: 3,
  };

  const ingredientsReducer = (
    state: Order,
    action: { type: IngredientsReducerActions }
  ): Order => {
    const { burgerIngredients, totalPrice } = state;
    const { salad, bacon, cheese, meat } = burgerIngredients;

    switch (action.type) {
      case IngredientsReducerActions.ADD_SALAD:
        return {
          ...state,
          burgerIngredients: { ...burgerIngredients, salad: salad + 1 },
          totalPrice: totalPrice + IngredientsPrices.salad,
        };
      case IngredientsReducerActions.REMOVE_SALAD:
        return salad >= 1
          ? {
              ...state,
              burgerIngredients: { ...burgerIngredients, salad: salad - 1 },
              totalPrice: totalPrice - IngredientsPrices.salad,
            }
          : state;
      case IngredientsReducerActions.ADD_BACON:
        return {
          ...state,
          burgerIngredients: { ...burgerIngredients, bacon: bacon + 1 },
          totalPrice: totalPrice + IngredientsPrices.bacon,
        };
      case IngredientsReducerActions.REMOVE_BACON:
        return bacon >= 1
          ? {
              ...state,
              burgerIngredients: { ...burgerIngredients, bacon: bacon - 1 },
              totalPrice: totalPrice - IngredientsPrices.bacon,
            }
          : state;
      case IngredientsReducerActions.ADD_CHEESE:
        return {
          ...state,
          burgerIngredients: { ...burgerIngredients, cheese: cheese + 1 },
          totalPrice: totalPrice + IngredientsPrices.cheese,
        };
      case IngredientsReducerActions.REMOVE_CHEESE:
        return cheese >= 1
          ? {
              ...state,
              burgerIngredients: { ...burgerIngredients, cheese: cheese - 1 },
              totalPrice: totalPrice - IngredientsPrices.cheese,
            }
          : state;
      case IngredientsReducerActions.ADD_MEAT:
        return {
          ...state,
          burgerIngredients: { ...burgerIngredients, meat: meat + 1 },
          totalPrice: totalPrice + IngredientsPrices.meat,
        };
      case IngredientsReducerActions.REMOVE_MEAT:
        return meat >= 1
          ? {
              ...state,
              burgerIngredients: { ...burgerIngredients, meat: meat - 1 },
              totalPrice: totalPrice - IngredientsPrices.meat,
            }
          : state;

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(ingredientsReducer, initialOrderState);
  const [showModal, setShowModal] = useState(false);

  const loadModal = () => {
    setShowModal(true);
  };

  const hideModal = () => {
    setShowModal(false);
  };

  const handleContinue = () => {
    alert('continue');
  };

  const handleCancel = () => {
    alert('cancel');
  };

  const getProperty = <T, K extends keyof T>(
    object: T,
    propertyName: K
  ): T[K] => {
    return object[propertyName];
  };

  const ingredientsArray = Object.keys(state.burgerIngredients).map(
    (ingredient) => {
      return [
        ...Array(
          getProperty(
            state.burgerIngredients,
            ingredient as keyof BurgerIngredients
          )
        ),
      ].map((_, index) => {
        return (
          <Ingredient key={ingredient + index} ingredientType={ingredient} />
        );
      });
    }
  );

  let disabledInfo = {
    salad: true,
    bacon: true,
    cheese: true,
    meat: true,
  };

  for (let key in disabledInfo) {
    disabledInfo[key as keyof DisabledInfo] =
      state.burgerIngredients[key as keyof BurgerIngredients] === 0;
  }

  return (
    <div>
      <Modal show={showModal} hideModal={hideModal}>
        <OrderSummary
          order={state}
          continueClick={handleContinue}
          cancelClick={handleCancel}
        />
      </Modal>
      <div className={Styles.Burger}>{ingredientsArray}</div>
      <BuildControls
        totalPrice={state.totalPrice.toFixed(2)}
        ingredientsReducerDispatch={dispatch}
        disabledInfo={disabledInfo}
        showModal={loadModal}
      />
    </div>
  );
};

export default Index;

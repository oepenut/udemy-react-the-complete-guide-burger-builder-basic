import React from 'react';
import { IngredientsNames } from 'utils/constanst';
import { IngredientsReducerActions } from 'utils/constanst';
import Styles from './BuildControl.module.css';

type Props = {
  label: string;
  type: string;
  ingredientsReducerDispatch: React.Dispatch<{
    type: IngredientsReducerActions;
  }>;
  isDisabledLess: boolean;
};

const index = (props: Props) => {
  const { label, type, ingredientsReducerDispatch, isDisabledLess } = props;

  let moreIngredient: any;
  let lessIngredient: any;

  switch (type) {
    case IngredientsNames.salad:
      moreIngredient = () =>
        ingredientsReducerDispatch({
          type: IngredientsReducerActions.ADD_SALAD,
        });
      lessIngredient = () =>
        ingredientsReducerDispatch({
          type: IngredientsReducerActions.REMOVE_SALAD,
        });
      break;
    case IngredientsNames.bacon:
      moreIngredient = () =>
        ingredientsReducerDispatch({
          type: IngredientsReducerActions.ADD_BACON,
        });
      lessIngredient = () =>
        ingredientsReducerDispatch({
          type: IngredientsReducerActions.REMOVE_BACON,
        });
      break;
    case IngredientsNames.cheese:
      moreIngredient = () =>
        ingredientsReducerDispatch({
          type: IngredientsReducerActions.ADD_CHEESE,
        });
      lessIngredient = () =>
        ingredientsReducerDispatch({
          type: IngredientsReducerActions.REMOVE_CHEESE,
        });
      break;
    case IngredientsNames.meat:
      moreIngredient = () =>
        ingredientsReducerDispatch({
          type: IngredientsReducerActions.ADD_MEAT,
        });
      lessIngredient = () =>
        ingredientsReducerDispatch({
          type: IngredientsReducerActions.REMOVE_MEAT,
        });
      break;

    default:
      break;
  }

  return (
    <div className={Styles.BuildControl}>
      <div className={Styles.Label}>{label}</div>
      <button
        className={Styles.Less}
        onClick={lessIngredient}
        disabled={isDisabledLess}>
        -
      </button>
      <button className={Styles.More} onClick={moreIngredient}>
        +
      </button>
    </div>
  );
};

export default index;

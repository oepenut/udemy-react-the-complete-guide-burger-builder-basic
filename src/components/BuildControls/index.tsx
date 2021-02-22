import React from 'react';
import { IngredientsNames, IngredientsReducerActions } from 'utils/constanst';
import BuildControl from './BuildControl';
import Styles from './BuildControls.module.css';

const BuildControls = [
  {
    label: 'Salad',
    type: IngredientsNames.salad,
  },
  {
    label: 'Bacon',
    type: IngredientsNames.bacon,
  },
  {
    label: 'Cheese',
    type: IngredientsNames.cheese,
  },
  {
    label: 'Meat',
    type: IngredientsNames.meat,
  },
];

type Props = {
  ingredientsReducerDispatch: React.Dispatch<{
    type: IngredientsReducerActions;
  }>;
};

const index = (props: Props) => {
  const { ingredientsReducerDispatch } = props;

  return (
    <div className={Styles.BuildControls}>
      {BuildControls.map((control) => {
        const { label, type } = control;
        return (
          <BuildControl
            key={label}
            label={label}
            type={type}
            ingredientsReducerDispatch={ingredientsReducerDispatch}
          />
        );
      })}
    </div>
  );
};

export default index;

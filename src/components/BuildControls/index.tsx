import React from 'react';
import { IngredientsNames, IngredientsReducerActions } from 'utils/constanst';
import { DisabledInfo } from 'types/types';
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
  totalPrice: string;
  ingredientsReducerDispatch: React.Dispatch<{
    type: IngredientsReducerActions;
  }>;
  disabledInfo: DisabledInfo;
  showModal: () => void;
};

const index = (props: Props) => {
  const {
    totalPrice,
    ingredientsReducerDispatch,
    disabledInfo,
    showModal,
  } = props;

  const isAvailableToOrder = !Object.values(disabledInfo).some(
    (value) => !value
  );

  return (
    <div className={Styles.BuildControls}>
      <p>
        <strong>Current price: ${totalPrice}</strong>
      </p>
      {BuildControls.map((control) => {
        const { label, type } = control;
        return (
          <BuildControl
            key={label}
            label={label}
            type={type}
            ingredientsReducerDispatch={ingredientsReducerDispatch}
            isDisabledLess={disabledInfo[type as keyof DisabledInfo]}
          />
        );
      })}
      <button
        className={Styles.OrderButton}
        disabled={isAvailableToOrder}
        onClick={showModal}>
        ORDER NOW
      </button>
    </div>
  );
};

export default index;

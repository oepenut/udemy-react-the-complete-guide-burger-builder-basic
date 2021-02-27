import React from 'react';
import { Order, BurgerIngredients } from 'types/types';
import Button from 'components/UI/Button';

type Props = {
  order: Order;
  continueClick: () => void;
  cancelClick: () => void;
};

const index = (props: Props) => {
  const { order, continueClick, cancelClick } = props;
  const { burgerIngredients, totalPrice } = order;

  let ingredients: string[] = [];

  for (let key in burgerIngredients) {
    if (!(key.indexOf('Bread') >= 0))
      ingredients.push(
        key + ': ' + burgerIngredients[key as keyof BurgerIngredients]
      );
  }

  return (
    <div>
      <h2>Your order</h2>
      <h3>Total price: ${totalPrice.toFixed(2)}</h3>
      <ul>
        {ingredients.map((ingredient, i) => {
          return (
            <li key={i} style={{ textTransform: 'capitalize' }}>
              {ingredient}
            </li>
          );
        })}
      </ul>
      <div style={{ textAlign: 'center' }}>
        <p>Continue to checkout?</p>
        <Button
          label={'Continue'}
          onClickButton={continueClick}
          buttonStyle={'Success'}
        />
        <Button
          label={'Cancel'}
          onClickButton={cancelClick}
          buttonStyle={'Danger'}
        />
      </div>
    </div>
  );
};

export default index;

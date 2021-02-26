import React from 'react';
import { Order, BurgerIngredients } from 'types/types';

type Props = {
  order: Order;
};

const index = (props: Props) => {
  const { order } = props;
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
          return <li key={i}>{ingredient}</li>;
        })}
      </ul>
    </div>
  );
};

export default index;

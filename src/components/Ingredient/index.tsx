import React from 'react';
import { IngredientsNames } from 'utils/constanst';
import Styles from './Ingredient.module.css';

type Props = {
  ingredientType: string;
};

const index = (props: Props): JSX.Element => {
  const { ingredientType } = props;

  let ingredientStyled = <div></div>;

  switch (ingredientType) {
    case IngredientsNames.topBread:
      ingredientStyled = (
        <div className={Styles.BreadTop}>
          <div className={Styles.Seeds1}></div>
          <div className={Styles.Seeds2}></div>
        </div>
      );
      break;
    case IngredientsNames.salad:
      ingredientStyled = <div className={Styles.Salad}></div>;
      break;
    case IngredientsNames.bacon:
      ingredientStyled = <div className={Styles.Bacon}></div>;
      break;
    case IngredientsNames.cheese:
      ingredientStyled = <div className={Styles.Cheese}></div>;
      break;
    case IngredientsNames.meat:
      ingredientStyled = <div className={Styles.Meat}></div>;
      break;
    case IngredientsNames.bottomBread:
      ingredientStyled = <div className={Styles.BreadBottom}></div>;
      break;
  }
  return ingredientStyled;
};

export default index;

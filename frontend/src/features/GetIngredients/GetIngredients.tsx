import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getIngredientsInitiator } from './getIngredients.action';

const GetIngredients = () => {
  const dispatch = useDispatch();

  const getIngredientsState = useSelector((state) => state);

  console.log('the state is --->', getIngredientsState);

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    dispatch(getIngredientsInitiator('https://ncsucgclass.github.io/prog1/boxes.json'));
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me For API Call</button>
    </div>
  );
};

export default GetIngredients;

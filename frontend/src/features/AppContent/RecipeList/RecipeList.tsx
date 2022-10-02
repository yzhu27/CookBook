import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const RecipeList = () => {
  const dispatch = useDispatch();

  const getRecipeListState = useSelector((state: any) => state.getRecipeListAppState);
  
  console.log('this is recipe list ---- ', getRecipeListState);
  return (
    <div>
      This is the Recipe List page
    </div>
  );
};

export default RecipeList;

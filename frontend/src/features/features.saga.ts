import { all } from 'redux-saga/effects';
import { getRecipeInfoSaga } from './AppContent/RecipeInformation/getRecipeInformation.saga';
import { getRecipeListSaga } from './AppContent/RecipeList/getRecipeList.saga';
import { getIngredientsSaga } from "./GetIngredients/getIngredients.saga";

export default function* combinedSagas() {
  yield all([
    getIngredientsSaga(),
    getRecipeListSaga(),
    getRecipeInfoSaga()
  ]);
}
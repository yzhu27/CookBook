import { all } from 'redux-saga/effects';
import { getIngredientsSaga } from "./GetIngredients/getIngredients.saga";

export default function* combinedSagas() {
  yield all([
    getIngredientsSaga()
  ]);
}
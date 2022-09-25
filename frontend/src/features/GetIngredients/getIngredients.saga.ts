import { takeEvery, put, call } from 'redux-saga/effects';
import * as ACTIONS from './getIngredients.action';
import * as ACTION_TYPES from './getIngredients.actionTypes';
import { ActionTypes, httpGetRequest } from "../apiMethods";

export function* initiateGetIngredientsRequest(action: ActionTypes) {
  try {
    // @ts-ignore
    const resp: any = yield call(httpGetRequest, action.payload);
    yield put(ACTIONS.getIngredientsSuccess(resp));
  } catch (err) {
    yield put(ACTIONS.getIngredientsFailure(err));
  } 
}

export function* getIngredientsSaga() {
  yield takeEvery(
    ACTION_TYPES.LOADING_GET_INGREDIENTS,
    initiateGetIngredientsRequest
  );
}
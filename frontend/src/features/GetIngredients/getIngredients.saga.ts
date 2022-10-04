/**
 * File name: getIngredients.saga.ts
 * Task - It is a middleware, that handles the async logic in the data flow based on the action that 
 * has been dispatched
 * @author Priyanka Ambawane - dearpriyankasa@gmail.com
 */
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
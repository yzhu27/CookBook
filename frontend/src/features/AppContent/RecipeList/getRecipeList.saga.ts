import { takeEvery, put, call } from 'redux-saga/effects';
import * as ACTIONS from './getRecipeList.action';
import * as ACTION_TYPES from './getRecipeList.actionTypes';
import { ActionTypes, httpPostRequest } from "../../apiMethods";

export function* initiateGetRecipeListRequest(action: ActionTypes) {
  try {
    // @ts-ignore
    const resp: any = yield call(httpPostRequest, action.payload.apiURL, action.payload.body);
    yield put(ACTIONS.getRecipeListSuccess(resp));
  } catch (err) {
    yield put(ACTIONS.getRecipeListFailure(err));
  } 
}

export function* getRecipeListSaga() {
  yield takeEvery(
    ACTION_TYPES.LOADING_GET_RECIPE_LIST,
    initiateGetRecipeListRequest
  );
}
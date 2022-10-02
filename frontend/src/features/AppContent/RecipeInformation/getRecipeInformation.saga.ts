import { takeEvery, put, call } from 'redux-saga/effects';
import * as ACTIONS from './getRecipeInformation.action';
import * as ACTION_TYPES from './getRecipeInformation.actionTypes';
import { ActionTypes, httpPostRequest } from "../../apiMethods";

export function* initiateGetRecipeInfoRequest(action: ActionTypes) {
  try {
    // @ts-ignore
    const resp: any = yield call(httpPostRequest, action.payload.apiURL, action.payload.body);
    yield put(ACTIONS.getRecipeInfoSuccess(resp));
  } catch (err) {
    yield put(ACTIONS.getRecipeInfoFailure(err));
  } 
}

export function* getRecipeInfoSaga() {
  yield takeEvery(
    ACTION_TYPES.LOADING_GET_RECIPE_INFORMATION,
    initiateGetRecipeInfoRequest
  );
}
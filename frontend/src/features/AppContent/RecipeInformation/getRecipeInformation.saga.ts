import { takeEvery, put, call } from 'redux-saga/effects';
import * as ACTIONS from './getRecipeInformation.action';
import * as ACTION_TYPES from './getRecipeInformation.actionTypes';
import { ActionTypes, httpGetRequest } from "../../apiMethods";

export function* initiateGetRecipeInfoRequest(action: ActionTypes) {
  try {
    // @ts-ignore
    const resp: any = yield call(httpGetRequest, action.payload);
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
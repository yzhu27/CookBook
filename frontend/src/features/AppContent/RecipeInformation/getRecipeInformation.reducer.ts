import * as ACTION_TYPES from './getRecipeInformation.actionTypes';
import { ActionTypes } from '../../apiMethods';

const initialState = {
  isGetRecipeInfoLoading: false,
  isGetRecipeInfoSuccess: false,
  isGetRecipeInfoFailure: false,
  getRecipeInfoData: [],
  getRecipeInfoError: [],
};

export default function getRecipeInfoAppState(state = initialState, action: ActionTypes) {
  switch (action.type) {
    case ACTION_TYPES.LOADING_GET_RECIPE_INFORMATION:
      return {
        ...state,
        isGetRecipeInfoLoading: true
      };
    case ACTION_TYPES.SUCCESS_GET_RECIPE_INFORMATION:
      return {
        ...state,
        isGetRecipeInfoLoading: false,
        isGetRecipeInfoSuccess: true,
        isGetRecipeInfoFailure: false,
        getRecipeInfoData: action.payload,
      };
    case ACTION_TYPES.FAILURE_GET_RECIPE_INFORMATION:
      return {
        ...state,
        isGetRecipeInfoLoading: false,
        isGetRecipeInfoSuccess: false,
        isGetRecipeInfoFailure: true,
        getRecipeInfoError: action.payload,
      };
    default:
      return state;
  }
}

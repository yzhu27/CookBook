/**
 * File name: getIngredients.action.ts
 * Task - Contains action handlers (LOAD, SUCCESS, FAIL) for getting the list of ingredients from the DB
 * @author Priyanka Ambawane - dearpriyankasa@gmail.com
 */
import * as ACTION_TYPES from './getIngredients.actionTypes';

export const getIngredientsInitiator = (apiURL: string) => {
  return {
    type: ACTION_TYPES.LOADING_GET_INGREDIENTS,
    payload: apiURL,
  };
};

export const getIngredientsSuccess = (data: any) => {
  return {
    type: ACTION_TYPES.SUCCESS_GET_INGREDIENTS,
    payload: data,
  };
};

export const getIngredientsFailure = (error: any) => {
  return {
    type: ACTION_TYPES.FAILURE_GET_INGREDIENTS,
    payload: error,
  };
};

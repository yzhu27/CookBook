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

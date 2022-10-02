import * as ACTION_TYPES from './getRecipeList.actionTypes';

export const getRecipeListInitiator = (apiURL: string, body: Array<string>) => {
  return {
    type: ACTION_TYPES.LOADING_GET_RECIPE_LIST,
    payload: {apiURL: apiURL, body: body},
  };
};

export const getRecipeListSuccess = (data: any) => {
  return {
    type: ACTION_TYPES.SUCCESS_GET_RECIPE_LIST,
    payload: data,
  };
};

export const getRecipeListFailure = (error: any) => {
  return {
    type: ACTION_TYPES.FAILURE_GET_RECIPE_LIST,
    payload: error,
  };
};

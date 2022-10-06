/**
 * File name: getRecipeInformation.action.ts
 * Task - Contains action handlers (LOAD, SUCCESS, FAIL) for getting the recipe information from the DB
 * @author Priyanka Ambawane - dearpriyankasa@gmail.com
 */
import * as ACTION_TYPES from './getRecipeInformation.actionTypes'

export const getRecipeInfoInitiator = (apiURL: string) => {
  return {
    type: ACTION_TYPES.LOADING_GET_RECIPE_INFORMATION,
    payload: apiURL,
  }
}

export const getRecipeInfoSuccess = (data: any) => {
  return {
    type: ACTION_TYPES.SUCCESS_GET_RECIPE_INFORMATION,
    payload: data,
  }
}

export const getRecipeInfoFailure = (error: any) => {
  return {
    type: ACTION_TYPES.FAILURE_GET_RECIPE_INFORMATION,
    payload: error,
  }
}

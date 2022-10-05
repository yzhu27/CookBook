/**
 * File name: features.reducer.ts
 * Task - It does the task of combining all the reducers for all the features and forms the state tree object
 * that contains the data of the application
 * @author Priyanka Ambawane - dearpriyankasa@gmail.com
 */
import { combineReducers } from 'redux';
import getIngredientsAppState from "../features/GetIngredients/getIngredients.reducer";
import getRecipeInfoAppState from './AppContent/RecipeInformation/getRecipeInformation.reducer';
import getRecipeListAppState from './AppContent/RecipeList/getRecipeList.reducer';

const combineReducer = combineReducers({ getIngredientsAppState, getRecipeListAppState, getRecipeInfoAppState })
 
export default combineReducer;
import { combineReducers } from 'redux';
import getIngredientsAppState from "../features/GetIngredients/getIngredients.reducer";
import getRecipeInfoAppState from './AppContent/RecipeInformation/getRecipeInformation.reducer';
import getRecipeListAppState from './AppContent/RecipeList/getRecipeList.reducer';

const combineReducer = combineReducers({ getIngredientsAppState, getRecipeListAppState, getRecipeInfoAppState })
 
export default combineReducer;
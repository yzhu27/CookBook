import { combineReducers } from 'redux';
import getIngredientsAppState from "../features/GetIngredients/getIngredients.reducer";
import getRecipeListAppState from './AppContent/RecipeList/getRecipeList.reducer';

const combineReducer = combineReducers({ getIngredientsAppState, getRecipeListAppState })
 
export default combineReducer;
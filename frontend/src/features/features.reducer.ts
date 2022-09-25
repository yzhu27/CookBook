import { combineReducers } from 'redux';
import getIngredientsAppState from "../features/GetIngredients/getIngredients.reducer";

const combineReducer = combineReducers({ getIngredientsAppState })
 
export default combineReducer;
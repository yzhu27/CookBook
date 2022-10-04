/**
 * File name: store.ts
 * Task - This file configures the enire application's store using the redux state library
 * It initializes and combines all the reducers and the async middleware functionalities for API
 * @author Priyanka Ambawane - dearpriyankasa@gmail.com
 */
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import combineReducer from './features/features.reducer';
import combinedSagas from './features/features.saga';
 
// initializes async functionality for the API calls
const sagaMiddleware = createSagaMiddleware();
 
export default function applicationStore() {
   // create the application store
   const store = createStore(combineReducer, applyMiddleware(sagaMiddleware));
   sagaMiddleware.run(combinedSagas);
   return store;
}
  
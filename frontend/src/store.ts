/**
 * Configure Store
 * @author dearpriyankasa@gmail.com
 */
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import combineReducer from './features/features.reducer';
import combinedSagas from './features/features.saga';
 
const sagaMiddleware = createSagaMiddleware();
 
export default function applicationStore() {
   const store = createStore(combineReducer, applyMiddleware(sagaMiddleware));
   sagaMiddleware.run(combinedSagas);
   return store;
}
  
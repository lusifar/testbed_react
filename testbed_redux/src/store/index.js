import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import { logger } from './middlewares';

import counReducer from './count';
import resultReducer from './result';

const rootReducer = combineReducers({
  count: counReducer,
  result: resultReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger)));

export default store;

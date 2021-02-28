import { createStore, combineReducers } from 'redux';

import counReducer from './count';
import resultReducer from './result';

const rootReducer = combineReducers({
  count: counReducer,
  result: resultReducer,
});

const store = createStore(rootReducer);

export default store;
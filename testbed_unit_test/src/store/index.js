import { createStore, combineReducers } from 'redux';

import { itemReducer } from './reducers';

const rootReducer = combineReducers({
  item: itemReducer,
});

const store = createStore(rootReducer);

export default store;

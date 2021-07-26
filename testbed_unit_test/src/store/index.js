import { createStore } from 'redux';

import { itemReducer } from './reducers';

const store = createStore(itemReducer);

export default store;

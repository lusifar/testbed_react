import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { auth } from "./reducers";

const reducers = combineReducers({
  auth,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;

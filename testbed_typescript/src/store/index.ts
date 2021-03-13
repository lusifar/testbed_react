import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { itemReducer } from "./reducers";

const rootReducer = combineReducers({
  item: itemReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

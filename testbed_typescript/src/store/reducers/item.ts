import { actionType } from "../../configs";
import { TAction, TState } from "../type";

const initState: TState = {
  lists: [],
  favorites: [],
};

const reducer = (state: TState = initState, action: TAction) => {
  switch (action.type) {
    case actionType.ADD_LIST:
      return {
        ...state,
        lists: state.lists.concat([action.item]),
      };
    case actionType.REMOVE_LIST:
      return {
        ...state,
        lists: state.lists.filter((item) => item.id !== action.item.id),
      };
    case actionType.ADD_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.concat([action.item]),
      };
    case actionType.REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter((item) => item.id !== action.item.id),
      };
    default:
      return state;
  }
};

export default reducer;

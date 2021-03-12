import { actionType } from "../../configs";
import { TItem, TAction } from "../type";

const addList = (item: TItem): TAction => {
  return {
    type: actionType.ADD_LIST,
    item: item,
  };
};

const removeList = (item: TItem): TAction => {
  return {
    type: actionType.REMOVE_LIST,
    item: item,
  };
};

const addFavorite = (item: TItem): TAction => {
  return {
    type: actionType.ADD_FAVORITE,
    item: item,
  };
};

const removeFavorite = (item: TItem): TAction => {
  return {
    type: actionType.REMOVE_FAVORITE,
    item: item,
  };
};

export { addList, removeList, addFavorite, removeFavorite };

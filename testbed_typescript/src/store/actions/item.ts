import { Dispatch } from "redux";
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

const addFavoriteAsync = (item: TItem) => {
  return (dispatch: Dispatch<TAction>) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(null);
      }, 1000);
    }).then(() => {
      dispatch(addFavorite(item));
    });
  };
};

const removeFavorite = (item: TItem): TAction => {
  return {
    type: actionType.REMOVE_FAVORITE,
    item: item,
  };
};

const removeFavoriteAsync = (item: TItem) => {
  return (dispatch: Dispatch<TAction>) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(null);
      }, 1000);
    }).then(() => {
      dispatch(removeFavorite(item));
    });
  };
};

export {
  addList,
  removeList,
  addFavorite,
  removeFavorite,
  addFavoriteAsync,
  removeFavoriteAsync,
};

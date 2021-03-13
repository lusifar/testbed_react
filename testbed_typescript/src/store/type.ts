import { Dispatch } from "redux";

interface TItem {
  id: string;
  text: string;
}

interface TAction {
  type: string;
  item: TItem;
}

type TActionAsync = (dispatch: Dispatch<TAction>) => Promise<void>;

interface TState {
  lists: TItem[];
  favorites: TItem[];
}

export type { TItem, TAction, TActionAsync, TState };

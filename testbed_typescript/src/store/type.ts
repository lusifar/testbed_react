interface TItem {
  id: string;
  text: string;
}

interface TAction {
  type: string;
  item: TItem;
}

interface TState {
  lists: TItem[];
  favorites: TItem[];
}

export type { TItem, TAction, TState };

import { actionType } from "../../../configs";
import { itemAction } from "../../../store/actions";
import { TItem, TAction } from "../../../store/type";

describe("item actions", () => {
  const fakeItem: TItem = {
    id: "123456",
    text: "this is the test text",
  };

  it("action - addList", () => {
    const fakeAction: TAction = {
      type: actionType.ADD_LIST,
      item: fakeItem,
    };

    const testAction = itemAction.addList(fakeItem);

    expect(testAction).toEqual(fakeAction);
  });

  it("action - removeList", () => {
    const fakeAction: TAction = {
      type: actionType.REMOVE_LIST,
      item: fakeItem,
    };

    const testAction = itemAction.removeList(fakeItem);

    expect(testAction).toEqual(fakeAction);
  });

  it("action - addFavorite", () => {
    const fakeAction: TAction = {
      type: actionType.ADD_FAVORITE,
      item: fakeItem,
    };

    const testAction = itemAction.addFavorite(fakeItem);

    expect(testAction).toEqual(fakeAction);
  });

  it("action - removeFavorite", () => {
    const fakeAction: TAction = {
      type: actionType.REMOVE_FAVORITE,
      item: fakeItem,
    };

    const testAction = itemAction.removeFavorite(fakeItem);

    expect(testAction).toEqual(fakeAction);
  });

  it("action - addFavoriteAsync", async () => {
    itemAction.addFavoriteAsync = jest
      .fn()
      .mockImplementation((item: TItem) => {
        return Promise.resolve(item);
      });

    const testItem = await itemAction.addFavoriteAsync(fakeItem);

    expect(testItem).toEqual(fakeItem);
  });

  it("action - removeFavoriteAsync", async () => {
    itemAction.removeFavoriteAsync = jest
      .fn()
      .mockImplementation((item: TItem) => {
        return Promise.resolve(item);
      });

    const testItem = await itemAction.removeFavoriteAsync(fakeItem);
    expect(testItem).toEqual(fakeItem);
  });
});

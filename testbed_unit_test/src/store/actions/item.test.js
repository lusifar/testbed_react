import configureStore from 'redux-mock-store';

import * as itemAction from './item';

const mockStore = configureStore();

describe('test result actions', () => {
  let store = null;

  beforeEach(() => {
    store = mockStore({
      items: [],
    });
  });

  it('action - addItem', () => {
    store.dispatch(itemAction.addItem('Cat'));
    const actions = store.getActions();

    expect(actions).toEqual([itemAction.addItem('Cat')]);
  });
});

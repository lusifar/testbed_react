import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as resultAction from '../../../store/actions/result';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('test result actions', () => {
  let store = null;

  beforeEach(() => {
    store = mockStore({
      count: 0,
      result: [],
    });
  });

  it('action - addResult', () => {
    store.dispatch(resultAction.addResult(10));
    const actions = store.getActions();

    expect(actions).toEqual([resultAction.addResult(10)]);
  });

  it('action - addResultAsync', () => {
    return store.dispatch(resultAction.addResultAsync(10)).then(() => {
      const actions = store.getActions();
      expect(actions).toEqual([resultAction.addResult(10)]);
    });
  });

  it('action - removeResult', () => {
    store.dispatch(resultAction.removeResult(0));
    const actions = store.getActions();

    expect(actions).toEqual([resultAction.removeResult(0)]);
  });

  it('action - removeResultAsync', () => {
    return store.dispatch(resultAction.removeResultAsync(0)).then(() => {
      const actions = store.getActions();
      expect(actions).toEqual([resultAction.removeResult(0)]);
    });
  });
});

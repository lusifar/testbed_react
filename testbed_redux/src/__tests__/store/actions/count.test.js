import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as countAction from '../../../store/actions/count';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('test count actions', () => {
  let store = null;

  beforeEach(() => {
    store = mockStore({
      count: 0,
      result: [],
    });
  });

  it('action - increment', () => {
    store.dispatch(countAction.increment());
    const actions = store.getActions();

    expect(actions).toEqual([countAction.increment()]);
  });

  it('action - incrementAsync', () => {
    return store.dispatch(countAction.incrementAsync()).then(() => {
      const actions = store.getActions();
      expect(actions).toEqual([countAction.increment()]);
    });
  });

  it('action - decrement', () => {
    store.dispatch(countAction.decrement());
    const actions = store.getActions();

    expect(actions).toEqual([countAction.decrement()]);
  });

  it('action - decrementAsync', () => {
    return store.dispatch(countAction.decrementAsync()).then(() => {
      const actions = store.getActions();
      expect(actions).toEqual([countAction.decrement()]);
    });
  });

  it('action - add', () => {
    store.dispatch(countAction.add(5));
    const actions = store.getActions();

    expect(actions).toEqual([countAction.add(5)]);
  });

  it('action - addAsync', () => {
    return store.dispatch(countAction.addAsync(5)).then(() => {
      const actions = store.getActions();
      expect(actions).toEqual([countAction.add(5)]);
    });
  });

  it('action - subtract', () => {
    store.dispatch(countAction.subtract(5));
    const actions = store.getActions();

    expect(actions).toEqual([countAction.subtract(5)]);
  });

  it('action - subtractAsync', () => {
    return store.dispatch(countAction.subtractAsync(5)).then(() => {
      const actions = store.getActions();
      expect(actions).toEqual([countAction.subtract(5)]);
    });
  });
});

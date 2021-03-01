import reducer from '../../../store/reducers/count';
import { actionType } from '../../../constants';

describe('test count reducers', () => {
  const fakeState = {
    count: 0,
  };

  it('reducer - actionType: INCREMENT', () => {
    const res = reducer(fakeState, { type: actionType.INCREMNET });
    expect(res).toEqual({
      count: 1,
    });
  });

  it('reducer - actionType: DECREMENT', () => {
    const res = reducer(fakeState, { type: actionType.DECREMENT });
    expect(res).toEqual({
      count: -1,
    });
  });

  it('reducer - actionType: ADD', () => {
    const res = reducer(fakeState, { type: actionType.ADD, val: 5 });
    expect(res).toEqual({
      count: 5,
    });
  });

  it('reducer - actionType: SUBSTRACT', () => {
    const res = reducer(fakeState, { type: actionType.SUBTRACT, val: 5 });
    expect(res).toEqual({
      count: -5,
    });
  });
});

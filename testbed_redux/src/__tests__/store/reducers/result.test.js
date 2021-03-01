import reducer from '../../../store/reducers/result';
import { actionType } from '../../../constants';

describe('test result reducers', () => {
  const fakeState = {
    result: [0],
  };

  it('reducer - actionType: ADD_RESULT', () => {
    const res = reducer(fakeState, { type: actionType.ADD_RESULT, val: 5 });
    expect(res).toEqual({
      result: [0, 5],
    });
  });

  it('reducer - actionType: REMOVE_RESULT', () => {
    const res = reducer(fakeState, { type: actionType.REMOVE_RESULT, index: 0 });
    expect(res).toEqual({
      result: [],
    });
  });
});

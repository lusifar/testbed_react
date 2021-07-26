import reducer from './item';
import { actionType } from '../../constants';

describe('test result reducers', () => {
  const fakeState = {
    items: ['Cat'],
  };

  it('reducer - actionType: ADD_ITEM', () => {
    const res = reducer(fakeState, { type: actionType.ADD_ITEM, item: 'Dog' });
    expect(res).toEqual({
      items: ['Cat', 'Dog'],
    });
  });
});

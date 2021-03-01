import { actionType } from '../../constants';
import { updateObject } from '../../utilities';

const initState = {
  count: 0,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionType.INCREMNET:
      return updateObject(state, { count: state.count + 1 });

    case actionType.DECREMENT:
      return updateObject(state, { count: state.count - 1 });

    case actionType.ADD:
      return updateObject(state, { count: state.count + action.val });

    case actionType.SUBTRACT:
      return updateObject(state, { count: state.count - action.val });

    default:
      return state;
  }
};

export default reducer;

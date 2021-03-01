import { actionType } from '../../constants';
import { updateObject } from '../../utilities';

const initState = {
  result: [],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionType.ADD_RESULT:
      return updateObject(state, { result: state.result.concat([action.val]) });

    case actionType.REMOVE_RESULT:
      const lastResult = [...state.result];
      lastResult.splice(action.index, 1);

      return updateObject(state, { result: lastResult });

    default:
      return state;
  }
};

export default reducer;

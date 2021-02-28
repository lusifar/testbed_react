import { actionType } from '../constants';

const initState = {
  count: 0,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionType.INCREMNET:
      return {
        ...state,
        count: state.count + 1,
      };

    case actionType.DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };

    case actionType.ADD:
      return {
        ...state,
        count: state.count + action.val,
      };

    case actionType.SUBSTRACT:
      return {
        ...state,
        count: state.count - action.val,
      };

    default:
      return state;
  }
};

export default reducer;

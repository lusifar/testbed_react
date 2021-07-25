import { actionType } from '../../constants';

const initState = {
  items: [],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionType.ADD_ITEM:
      return (state = {
        items: state.items.concate([action.item]),
      });
    default:
      return state;
  }
};

export default reducer;

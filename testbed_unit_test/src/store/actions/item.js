import { actionType } from '../../constants';

const addItem = (item) => {
  return {
    type: actionType.ADD_ITEM,
    item,
  };
};

export { addItem };

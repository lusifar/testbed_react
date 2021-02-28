import { actionType } from '../../constants';

const addResult = (val) => {
  return {
    type: actionType.ADD_RESULT,
    val,
  };
};

const addResultAsync = (val) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(addResult(val));
    }, 2000);
  };
};

const removeResult = (index) => {
  return {
    type: actionType.REMOVE_RESULT,
    index,
  };
};

const removeResultAsync = (index) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(removeResult(index));
    }, 2000);
  };
};

export { addResult, addResultAsync, removeResult, removeResultAsync };

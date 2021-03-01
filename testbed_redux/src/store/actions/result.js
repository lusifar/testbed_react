import { actionType } from '../../constants';

const addResult = (val) => {
  return {
    type: actionType.ADD_RESULT,
    val,
  };
};

const addResultAsync = (val) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    }).then(() => dispatch(addResult(val)));
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
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    }).then(() => dispatch(removeResult(index)));
  };
};

export { addResult, addResultAsync, removeResult, removeResultAsync };

import { actionType } from '../../constants';

const increment = () => {
  return {
    type: actionType.INCREMNET,
  };
};

const incrementAsync = () => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(increment());
    }, 1000);
  };
};

const decrement = () => {
  return {
    type: actionType.DECREMENT,
  };
};

const decrementAsync = () => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(decrement());
    }, 1000);
  };
};

const add = (val) => {
  return {
    type: actionType.ADD,
    val,
  };
};

const addAsync = (val) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(add(val));
    }, 1000);
  };
};

const substract = (val) => {
  return {
    type: actionType.SUBSTRACT,
    val,
  };
};

const substractAsync = (val) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(substract(val));
    }, 1000);
  };
};

export { increment, incrementAsync, decrement, decrementAsync, add, addAsync, substract, substractAsync };

import { actionType } from '../../constants';

const increment = () => {
  return {
    type: actionType.INCREMNET,
  };
};

const incrementAsync = () => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    }).then(() => dispatch(increment()));
  };
};

const decrement = () => {
  return {
    type: actionType.DECREMENT,
  };
};

const decrementAsync = () => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    }).then(() => dispatch(decrement()));
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
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    }).then(() => dispatch(add(val)));
  };
};

const subtract = (val) => {
  return {
    type: actionType.SUBTRACT,
    val,
  };
};

const subtractAsync = (val) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    }).then(() => dispatch(subtract(val)));
  };
};

export { increment, incrementAsync, decrement, decrementAsync, add, addAsync, subtract, subtractAsync };

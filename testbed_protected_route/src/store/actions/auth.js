import moment from "moment";

import { ACTION_TYPE } from "../../constants";

const init = (username, password) => {
  return {
    type: ACTION_TYPE.AUTH.INIT,
    payload: {
      isAuth: true,
      username,
      actionToken: moment().unix(),
    },
  };
};

const initAsync = (username, password) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(init(username, password));
    }, 1000);
  };
};

const deinit = () => {
  return {
    type: ACTION_TYPE.AUTH.DEINIT,
    payload: {
      isAuth: false,
      username: "",
      actionToken: "",
    },
  };
};

const deinitAsync = () => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(deinit());
    }, 1000);
  };
};

export { init, initAsync, deinit, deinitAsync };

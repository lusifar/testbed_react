import { ACTION_TYPE } from "../../constants";

const initState = {
  isAuth: false,
  username: "",
  accessToken: "",
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case ACTION_TYPE.AUTH.INIT:
      return {
        ...state,
        ...action.payload,
      };
    case ACTION_TYPE.AUTH.DEINIT:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default reducer;

import { React } from "react";
import { Redirect, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import * as actions from "../../store/actions";

const Login = () => {
  // use location
  const { state } = useLocation();

  // use selector
  const auth = useSelector((state) => state.auth);

  // use dispatch
  const dispatch = useDispatch();

  const onBtnLogin = () => {
    dispatch(actions.auth.initAsync("rickychao", "1234567"));
  };

  if (auth.isAuth === true) {
    return <Redirect to={state?.from || "/"} />;
  }

  return (
    <div>
      <p>You must log in to view the page</p>
      <button onClick={onBtnLogin}>Log in</button>
    </div>
  );
};

export default Login;

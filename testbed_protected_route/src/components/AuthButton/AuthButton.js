import { React } from "react";

import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import * as actions from "../../store/actions";

const AuthButton = () => {
  // use history
  const history = useHistory();

  // use selector
  const auth = useSelector((state) => state.auth);

  // use dispatch
  const dispatch = useDispatch();

  const onBtnSignOut = () => {
    dispatch(actions.auth.deinit());
    history.push("/login");
  };

  return auth.isAuth ? (
    <p>
      Welcome!
      <button onClick={onBtnSignOut}>Sign out</button>
    </p>
  ) : (
    <p>You are not logged in</p>
  );
};

export default AuthButton;

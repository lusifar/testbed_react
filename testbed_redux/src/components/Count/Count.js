import React from "react";

import { connect, useDispatch } from "react-redux";

import { resultAction } from "../../store/actions";

export const Count = (props) => {
  // react-redux
  const dispatch = useDispatch();

  const addResultHandler = (val) => {
    dispatch(resultAction.addResultAsync(val));
  };

  return (
    <React.Fragment>
      <h1>Current Count: {props.number}</h1>
      <button
        onClick={() => {
          addResultHandler(props.number);
        }}
      >
        Add result
      </button>
      {props.children}
    </React.Fragment>
  );
};

export default React.memo(Count);

import React from 'react';

import { connect } from 'react-redux';

import { actionType } from '../../constants';

const Count = (props) => {
  return (
    <React.Fragment>
      <h1>Current Count: {props.number}</h1>
      <button
        onClick={() => {
          props.addResultHandler(props.number);
        }}
      >
        Add result
      </button>
      {props.children}
    </React.Fragment>
  );
};

const mapDistpatchToProps = (dispatch) => {
  return {
    addResultHandler: (val) => {
      dispatch({ type: actionType.ADD_RESULT, val });
    },
  };
};

export default connect(null, mapDistpatchToProps)(Count);

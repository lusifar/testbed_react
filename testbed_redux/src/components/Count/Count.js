import React from 'react';

import { connect } from 'react-redux';

import { resultAction } from '../../store/actions';

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
      dispatch(resultAction.addResultAsync(val));
    },
  };
};

export default connect(null, mapDistpatchToProps)(Count);

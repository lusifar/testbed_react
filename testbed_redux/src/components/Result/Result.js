import React from 'react';
import { connect } from 'react-redux';

import { actionType } from '../../constants';

const Result = (props) => {
  let result = null;
  if (props.items) {
    result = (
      <ul>
        {props.items.map((item, index) => {
          return (
            <li
              key={index}
              onClick={() => {
                props.removeResultHandler(index);
              }}
            >
              {item}
            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <React.Fragment>
      {result}
      {props.children}
    </React.Fragment>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeResultHandler: (index) => {
      dispatch({ type: actionType.REMOVE_RESULT, index });
    },
  };
};

export default connect(null, mapDispatchToProps)(Result);

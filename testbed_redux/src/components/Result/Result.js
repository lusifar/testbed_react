import React from 'react';
import { connect } from 'react-redux';

import { resultAction } from '../../store/actions';

export const Result = (props) => {
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
      dispatch(resultAction.removeResultAsync(index));
    },
  };
};

export default connect(null, mapDispatchToProps)(Result);

import React from 'react';
import { useDispatch } from 'react-redux';

import { resultAction } from '../../store/actions';

export const Result = (props) => {
  // react-redux
  const dispatch = useDispatch();

  // component handler
  const removeResultHandler = (index) => {
    dispatch(resultAction.removeResultAsync(index));
  };

  const drawResults = () => {
    let result = null;
    if (props.items) {
      result = (
        <ul>
          {props.items.map((item, index) => {
            return (
              <li
                key={index}
                onClick={() => {
                  removeResultHandler(index);
                }}
              >
                {item}
              </li>
            );
          })}
        </ul>
      );
    }
    return result;
  };

  return (
    <React.Fragment>
      {drawResults()}
      {props.children}
    </React.Fragment>
  );
};

export default React.memo(Result);

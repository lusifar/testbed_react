import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import classes from './Welcome.module.css';

import Count from '../Count/Count';
import Result from '../Result/Result';

import { countAction } from '../../store/actions';

const Welcome = () => {
  // react-redux
  const count = useSelector((state) => state.count);
  const result = useSelector((state) => state.result);

  const dispatch = useDispatch();

  // component handler
  const incrementHandler = () => {
    dispatch(countAction.incrementAsync());
  };

  const decrementHandler = () => {
    dispatch(countAction.decrementAsync());
  };

  const addHandler = (val) => {
    dispatch(countAction.addAsync(val));
  };

  const subtractHandler = (val) => {
    dispatch(countAction.subtractAsync(val));
  };

  return (
    <div className={classes.Welcome}>
      <h1>Welcome Page</h1>
      <hr />
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
      <button
        onClick={() => {
          addHandler(5);
        }}
      >
        Add 5
      </button>
      <button
        onClick={() => {
          subtractHandler(5);
        }}
      >
        Substract 5
      </button>
      <hr />
      <Count number={count.count} />
      <hr />
      <Result items={result.result} />
    </div>
  );
};

export default React.memo(Welcome);

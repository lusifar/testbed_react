import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './Welcome.module.css';

import Count from '../../components/Count/Count';
import Result from '../../components/Result/Result';

import { actionType } from '../../constants';

class Welcome extends Component {
  render() {
    return (
      <div className={classes.Welcome}>
        <h1>Welcome Page</h1>
        <hr />
        <button onClick={this.props.incrementHandler}>Increment</button>
        <button onClick={this.props.decrementHandler}>Decrement</button>
        <button
          onClick={() => {
            this.props.addHandler(5);
          }}
        >
          Add 5
        </button>
        <button
          onClick={() => {
            this.props.substractHandler(5);
          }}
        >
          Substract 5
        </button>
        <hr />
        <Count number={this.props.count} />
        <hr />
        <Result items={this.props.result} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count.count,
    result: state.result.result,
  };
};

const mapDistpatchToProps = (dispatch) => {
  return {
    incrementHandler: () => {
      dispatch({ type: actionType.INCREMNET });
    },
    decrementHandler: () => {
      dispatch({ type: actionType.DECREMENT });
    },
    addHandler: (val) => {
      dispatch({ type: actionType.ADD, val });
    },
    substractHandler: (val) => {
      dispatch({ type: actionType.SUBSTRACT, val });
    },
  };
};
export default connect(mapStateToProps, mapDistpatchToProps)(Welcome);

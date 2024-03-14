// components/Counter.js
import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../actions';

const Counter = ({ count, increment, decrement }) => {
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  count: state.counter.count,
});

const mapDispatchToProps = {
  increment,
  decrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

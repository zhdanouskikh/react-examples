import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import counterSlice from './slice';
import CounterComponent from './Component';

import type { State } from '../../types';

const CounterContainer = () => {
  const counter = useSelector<State, number>((state) => state.counter.value);
  const dispatch = useDispatch();

  const [value, setValue] = React.useState(1);

  const handleValueChange = (newValue: number) => {
    setValue(newValue);
  }

  const handleIncrement = () => {
    dispatch(counterSlice.actions.increment(value));
  };

  const handleDecrement = () => {
    dispatch(counterSlice.actions.decrement(value));
  };


  return (
    <CounterComponent
      counter={counter}
      value={value}
      onValueChange={handleValueChange}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
    />
  )
};

export default CounterContainer;
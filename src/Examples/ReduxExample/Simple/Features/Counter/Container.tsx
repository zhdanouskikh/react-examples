import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { COUNTER_ACTIONS } from './types';
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
    dispatch({ type: COUNTER_ACTIONS.INCREMENT, payload: value });
  };

  const handleDecrement = () => {
    dispatch({ type: COUNTER_ACTIONS.DECREMENT, payload: value });
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
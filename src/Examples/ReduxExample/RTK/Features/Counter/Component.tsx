import React from 'react';
import type { CounterComponentProps } from './types';


const CounterComponent = (props: CounterComponentProps) => {
  const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    if (!isNaN(value)) {
      props.onValueChange(value);
    }
  };

  return (
    <div>
      <p>Counter: {props.counter}</p>
      <button onClick={props.onIncrement}>Increment</button>
      <button onClick={props.onDecrement}>Decrement</button>
      <br/>

      <label htmlFor='modifier'>Modifier</label>
      <input id='modifier' type="number" value={props.value} onChange={handleValueChange} />
    </div>
  )
}

export default CounterComponent;

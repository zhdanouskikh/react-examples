import type { Action } from 'redux';

export type CounterComponentProps = {
  value: number;
  counter: number;
  onValueChange: (newValue: number) => void;
  onIncrement: () => void;
  onDecrement: () => void;
}

export type CounterState = {
  value: number;
}

export enum COUNTER_ACTIONS {
  INCREMENT = 'COUNTER/INCREMENT',
  DECREMENT = 'COUNTER/DECREMENT',
}

export type IncrementAction = Action<COUNTER_ACTIONS.INCREMENT> & { payload: number };
export type DecrementAction = Action<COUNTER_ACTIONS.DECREMENT> & { payload: number };
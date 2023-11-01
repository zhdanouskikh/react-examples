import { COUNTER_ACTIONS } from './types';
import type { AnyAction } from 'redux';
import type { CounterState, IncrementAction, DecrementAction } from './types';

const initialState: CounterState = { value: 0 };
const counterReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case COUNTER_ACTIONS.INCREMENT: {
      const castedAction = action as IncrementAction;
      return { value: state.value + castedAction.payload };
    }
    case COUNTER_ACTIONS.DECREMENT: {
      const castedAction = action as DecrementAction;
      return { value: state.value - castedAction.payload };
    }
    default:
      return state
  }
};

export default counterReducer;
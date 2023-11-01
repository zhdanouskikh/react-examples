import { combineReducers } from 'redux';
import counterReducer from './Features/Counter/slice';

const reducer = combineReducers({
  counter: counterReducer,
});

export default reducer;
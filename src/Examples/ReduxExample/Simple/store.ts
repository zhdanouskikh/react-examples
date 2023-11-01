import { createStore } from 'redux';
import reducer from './reducer';
import enhancer from './enhancer';

const store = createStore(reducer, enhancer);
export default store;
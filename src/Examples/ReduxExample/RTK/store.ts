import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './Features/Counter/slice';

const store = configureStore({
  reducer: {
    [counterSlice.name]: counterSlice.reducer,
  },
  devTools: true,
});

export default store;
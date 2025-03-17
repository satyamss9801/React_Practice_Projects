import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/tododslice';

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});

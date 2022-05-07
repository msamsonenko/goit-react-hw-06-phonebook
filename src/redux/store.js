import { configureStore } from '@reduxjs/toolkit';
import { myReducer } from './reducer';

export const store = configureStore({
  reducer: {
    contacts: myReducer,
  },
});

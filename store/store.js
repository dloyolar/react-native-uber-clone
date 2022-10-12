import { configureStore } from '@reduxjs/toolkit';
import { navSlice } from './slices';

export const store = configureStore({
  reducer: {
    nav: navSlice.reducer,
  },
});

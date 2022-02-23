import { configureStore } from '@reduxjs/toolkit';
import albumReducer from '../features/slices/albumSlice';

export const store = configureStore({
  reducer: {
    albums: albumReducer,
  },
});

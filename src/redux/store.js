import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slices/UserSlice';
import reFetchSlice from './slices/reFetchSlice';


export const store = configureStore({
  reducer: {
    reFetch: reFetchSlice,
    user: userSlice,
  },
});

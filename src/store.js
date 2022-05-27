import { configureStore } from '@reduxjs/toolkit';
import { featuresSlice } from './features/features-slice';

export const store = configureStore({
  reducer: {
    features: featuresSlice.reducer,
  },
});

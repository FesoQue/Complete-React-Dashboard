import { configureStore } from '@reduxjs/toolkit';
import { featuresSlice } from './features/features-slice';
import { themeSlice } from './features/theme-slice';

export const store = configureStore({
  reducer: {
    features: featuresSlice.reducer,
    themes: themeSlice.reducer,
  },
});

import { configureStore } from '@reduxjs/toolkit';
import { modalSlice } from './features.js/modal/modal-slice';

export const store = configureStore({
  reducer: {
    modal: modalSlice.reducer,
  },
});

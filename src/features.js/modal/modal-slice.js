import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isSidebarOpen: false,
};

export const modalSlice = createSlice({
  name: 'features',
  initialState,
  reducers: {
    openModal: (state) => {
      console.log(state);
    },
  },
});

export const { openModal } = modalSlice.actions;

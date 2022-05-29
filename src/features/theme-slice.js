import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentMode: 'light',
  currentColor: '#1A97F5',
  themeSettings: false,
};

export const themeSlice = createSlice({
  name: 'themes',
  initialState,
  reducers: {
    handleThemeMode: (state, action) => {
      return { ...state, currentMode: action.payload };
      // localStorage.setItem('themeMode', action.payload)
    },
    handleColorMode: (state, action) => {
      return { ...state, currentColor: action.payload };
      state.currentColor = action.payload;
    },
    handleThemeSettings: (state, action) => {
      return { ...state, themeSettings: action.payload };
    },
  },
});

export const { handleThemeMode, handleColorMode, handleThemeSettings } =
  themeSlice.actions;

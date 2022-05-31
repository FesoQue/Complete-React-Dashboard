import { createSlice } from '@reduxjs/toolkit';

const setCurrentColor = () => {
  let color = localStorage.getItem('themeColor');
  if (color) {
    return color;
  } else {
    return '#0059b2';
  }
};
const setCurrentMode = () => {
  let mode = localStorage.getItem('themeMode');
  if (mode) {
    return mode;
  } else {
    return 'light';
  }
};

const initialState = {
  currentMode: setCurrentMode(),
  currentColor: setCurrentColor(),
  themeSettings: false,
};

export const themeSlice = createSlice({
  name: 'themes',
  initialState,
  reducers: {
    handleThemeMode: (state, action) => {
      return { ...state, currentMode: action.payload };
    },
    handleColorMode: (state, action) => {
      return { ...state, currentColor: action.payload };
    },
    handleThemeSettings: (state, action) => {
      state.themeSettings = action.payload;
    },
  },
});

export const { handleThemeMode, handleColorMode, handleThemeSettings } =
  themeSlice.actions;

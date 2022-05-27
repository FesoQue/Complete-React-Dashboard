import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isSidebarOpen: true,
  isOpen: {
    isCartOpen: false,
    isChatOpen: false,
    isNotificationOpen: false,
    isprofileOpen: false,
  },
  userProfile: false,
  notification: false,
  screenSize: window.innerWidth,
};

export const featuresSlice = createSlice({
  name: 'features',
  initialState,
  reducers: {
    toggleSidebar: (state, action) => {
      // state.isSidebarOpen = action.payload;
      return { ...state, isSidebarOpen: action.payload };
    },
    handleOpenState: (state, action) => {
      // state.isOpen = {
      //   isCartOpen: action.payload.cart,
      //   isChatOpen: action.payload.chat,
      //   isNotificationOpen: action.payload.notification,
      //   isprofileOpen: action.payload.profile,
      // };
      return {
        ...state,
        isOpen: {
          ...state.isOpen,
          isCartOpen: action.payload.cart,
          isChatOpen: action.payload.chat,
          isNotificationOpen: action.payload.notification,
          isprofileOpen: action.payload.profile,
        },
      };
    },
    handleScreenSize: (state, action) => {
      return { ...state, screenSize: action.payload };
    },
  },
});

export const { toggleSidebar, handleOpenState, handleScreenSize } =
  featuresSlice.actions;

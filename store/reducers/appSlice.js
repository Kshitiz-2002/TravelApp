import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = !!action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
    setAuthStatus: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    // Add reducers to update user bookings
    addTrainBooking: (state, action) => {
      if (state.user) {
        if (!state.user.bookings) {
          state.user.bookings = [];
        }
        state.user.bookings.push(action.payload);
      }
    },
    addBusBooking: (state, action) => {
      if (state.user) {
        if (!state.user.bookings) {
          state.user.bookings = [];
        }
        state.user.bookings.push(action.payload);
      }
    },
    setUserLoginStatus: (state, action) => {
        state.isAuthenticated = action.payload;
      },
  },
});

export const { setUser, setLoading, setError, clearError, setAuthStatus, addTrainBooking, addBusBooking, setUserLoginStatus } = appSlice.actions;

export default appSlice.reducer;

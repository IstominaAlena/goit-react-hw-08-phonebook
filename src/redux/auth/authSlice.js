import { createSlice } from '@reduxjs/toolkit';
import { signupUser, loginUser, logoutUser, refreshUser } from './authOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  refreshStatus: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [signupUser.pending](state) {
      state.error = null;
    },
    [signupUser.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.error = null;
    },
    [signupUser.rejected](state, { payload }) {
      state.error = payload;
    },

    [loginUser.pending](state) {
      state.error = null;
    },
    [loginUser.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.error = null;
    },
    [loginUser.rejected](state, { payload }) {
      state.status = 'rejected';
      state.error = payload;
    },

    [logoutUser.pending](state) {
      state.error = null;
    },
    [logoutUser.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.error = null;
    },
    [logoutUser.rejected](state, { payload }) {
      state.error = payload;
    },

    [refreshUser.pending](state) {
      state.refreshStatus = true;
      state.error = null;
    },
    [refreshUser.fulfilled](state, { payload }) {
      state.user = payload;
      state.isLoggedIn = true;
      state.refreshStatus = false;
      state.error = null;
    },
    [refreshUser.rejected](state, { payload }) {
      state.refreshStatus = false;
      state.error = payload;
    },
  },
});

export default authSlice.reducer;

import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { token } from '../../shared/functions/tokenFn';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const path = {
  SIGNUP: '/users/signup',
  LOGIN: '/users/login',
  LOGOUT: '/users/logout',
  CURRENT: '/users/current',
};

export const signupUser = createAsyncThunk('auth/signupUser', async (user, { rejectWithValue }) => {
  try {
    const { data } = await axios.post(path.SIGNUP, user);
    token.set(data.token);
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const loginUser = createAsyncThunk('auth/loginUser', async (user, { rejectWithValue }) => {
  try {
    const { data } = await axios.post(path.LOGIN, user);
    token.set(data.token);
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const logoutUser = createAsyncThunk('auth/logoutUser', async (_, { rejectWithValue }) => {
  try {
    await axios.post(path.LOGOUT);
    token.unset();
    return;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refreshUser',
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    const persistedToken = state.auth.token;

    if (persistedToken === 'null') {
      return;
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get(path.CURRENT);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

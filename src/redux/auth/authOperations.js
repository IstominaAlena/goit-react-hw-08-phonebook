import { createAsyncThunk } from '@reduxjs/toolkit';

import { signupUserAPI, loginUserAPI } from '../../services/authAPI';

export const signupUser = createAsyncThunk('auth/signupUser', async (user, { rejectWithValue }) => {
  try {
    const { data } = await signupUserAPI(user);
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const loginUser = createAsyncThunk('auth/loginUser', async (user, { rejectWithValue }) => {
  try {
    const { data } = await loginUserAPI(user);
    console.log(data);
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

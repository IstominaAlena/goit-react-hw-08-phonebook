import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { token } from '../../shared/functions/tokenFn';

const path = '/contacts';

export const getContacts = createAsyncThunk(
  'contacts/getContacts',
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    const persistedToken = state.auth.token;

    if (!persistedToken) {
      return;
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get(path);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(path, contact);
      const responsedContact = {
        ...contact,
        id: data.id,
      };
      return responsedContact;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(path + '/' + id);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

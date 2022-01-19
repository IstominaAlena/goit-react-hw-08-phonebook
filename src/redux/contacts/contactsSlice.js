import { createSlice } from '@reduxjs/toolkit';

import { getContacts, addContact, deleteContact } from './contactsOperations';

import { filterContacts } from './filterAction';

const initialState = {
  items: [],
  filter: '',
  status: 'idle',
  error: null,
};

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  extraReducers: {
    [getContacts.pending](state) {
      state.status = 'pending';
      state.error = null;
    },
    [getContacts.fulfilled](state, { payload }) {
      state.status = 'resolved';
      state.items = payload;
    },
    [getContacts.rejected](state, { payload }) {
      state.status = 'rejected';
      state.error = payload;
    },

    [addContact.pending](state) {
      state.status = 'pending';
      state.error = null;
    },
    [addContact.fulfilled](state, { payload }) {
      state.status = 'resolved';
      state.items.push(payload);
    },
    [addContact.rejected](state, { payload }) {
      state.status = 'rejected';
      state.error = payload;
    },

    [deleteContact.pending](state) {
      state.status = 'pending';
      state.error = null;
    },
    [deleteContact.fulfilled](state, { payload }) {
      state.status = 'resolved';
      const newItems = state.items.filter(item => item.id !== payload);
      state.items = newItems;
    },
    [deleteContact.rejected](state, { payload }) {
      state.status = 'rejected';
      state.error = payload;
    },
    [filterContacts.type](state, { payload }) {
      state.filter = payload;
    },
  },
});

export default contactSlice.reducer;

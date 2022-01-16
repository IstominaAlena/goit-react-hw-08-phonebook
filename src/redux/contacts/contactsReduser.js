import { createReducer, combineReducers } from '@reduxjs/toolkit';

import { getContacts, addContact, deleteContact } from './itemsOperations';

import { filterContacts } from './filterAction';

const items = createReducer([], {
  [getContacts.fulfilled]: (_, { payload }) => payload,
  [addContact.fulfilled]: (state, { payload }) => [...state, payload],
  [deleteContact.fulfilled]: (state, { payload }) => state.filter(item => item.id !== payload),
});

const status = createReducer('idle', {
  [getContacts.pending]: () => 'pending',
  [getContacts.fulfilled]: () => 'resolved',
  [getContacts.rejected]: () => 'rejected',
  [addContact.pending]: () => 'pending',
  [addContact.fulfilled]: () => 'resolved',
  [addContact.rejected]: () => 'rejected',
  [deleteContact.pending]: () => 'pending',
  [deleteContact.fulfilled]: () => 'resolved',
  [deleteContact.rejected]: () => 'rejected',
});

const error = createReducer(null, {
  [getContacts.rejected]: (_, action) => action.payload,
  [getContacts.pending]: () => null,
  [addContact.rejected]: (_, action) => action.payload,
  [addContact.pending]: () => null,
  [deleteContact.rejected]: (_, action) => action.payload,
  [deleteContact.pending]: () => null,
});

const filter = createReducer('', {
  [filterContacts.type]: (_, { payload }) => payload,
});

export default combineReducers({ items, filter, status, error });

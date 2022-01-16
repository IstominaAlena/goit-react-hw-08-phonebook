import { createAsyncThunk } from '@reduxjs/toolkit';

import { getContactsAPI, addContactAPI, deleteContactAPI } from '../../services/contactsAPI';

export const getContacts = createAsyncThunk(
  'contacts/getContacts',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await getContactsAPI();
      return contacts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const responsedContact = await addContactAPI(contact);
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
      await deleteContactAPI(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

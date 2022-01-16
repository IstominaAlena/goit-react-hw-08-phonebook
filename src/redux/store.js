// process - глобальная переменная в Node.js
// process.env.NODE_ENV - какая стадия проекта (девелопмент, продакшн...)

import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import contactsReduser from './contacts/contactsReduser';

const store = configureStore({
  reducer: {
    contacts: contactsReduser,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV === 'development',
});

export default store;

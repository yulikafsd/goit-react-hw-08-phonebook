import { createSlice } from '@reduxjs/toolkit';
// import { fetchContacts, addContact, deleteContact } from './operations';

const initialState = {};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  //   extraReducers: {
  //     // FETCH
  //     [fetchContacts.pending](state) {
  //       state.operation = 'fetch';
  //       state.isLoading = true;
  //     },

  //     [fetchContacts.fulfilled](state, { payload }) {
  //       state.operation = null;
  //       state.isLoading = false;
  //       state.error = null;
  //       state.items = payload;
  //     },

  //     [fetchContacts.rejected]: handleRejected,

  //     // DELETE CONTACT
  //     [deleteContact.pending](state, { meta }) {
  //       state.operation = `${meta.arg}`;
  //       state.isLoading = true;
  //     },

  //     [deleteContact.fulfilled](state, { payload }) {
  //       state.operation = null;
  //       state.isLoading = false;
  //       state.error = null;
  //       const index = state.items.findIndex(contact => contact.id === payload);
  //       state.items.splice(index, 1);
  //     },

  //     [deleteContact.rejected](state, { payload }) {
  //       state.operation = null;
  //       state.isLoading = false;
  //       state.error = payload;
  //     },

  //     // ADD CONTACT
  //     [addContact.pending](state) {
  //       state.operation = 'add';
  //       state.isLoading = true;
  //     },
  //     [addContact.fulfilled](state, { payload }) {
  //       state.items = [...state.items, payload];
  //       state.operation = null;
  //       state.isLoading = false;
  //       state.error = null;
  //     },
  //     [addContact.rejected](state, { payload }) {
  //       state.isLoading = false;
  //       state.operation = null;
  //       state.error = payload;
  //     },
  //   },
});

export const authReducer = authSlice.reducer;

// Перенести персистор слайса из стора сюда

// const authPersistConfig = {
//   key: 'auth',
//   storage,
//   whitelist: ['token'],
// };

//     auth: persistReducer(authPersistConfig, authReducer),

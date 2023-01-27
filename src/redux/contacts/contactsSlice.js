import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';
import { logOut } from 'redux/auth/operations';

const initialState = {
  items: [],
  isLoading: false,
  operation: null,
  error: null,
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.operation = null;
  state.error = payload;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.pending, state => {
        state.operation = 'fetch';
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.operation = null;
        state.isLoading = false;
        state.error = null;
        state.items = payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(deleteContact.pending, (state, { meta }) => {
        state.operation = `${meta.arg}`;
        state.isLoading = true;
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.operation = null;
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(contact => contact.id === payload);
        state.items.splice(index, 1);
      })
      .addCase(deleteContact.rejected, (state, { payload }) => {
        state.operation = null;
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(addContact.pending, state => {
        state.operation = 'add';
        state.isLoading = true;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.items = [...state.items, payload];
        state.operation = null;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addContact.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.operation = null;
        state.error = payload;
      })
      .addCase(logOut.fulfilled, state => {
        state.items = [];
      }),
});

export const contactsReducer = contactsSlice.reducer;

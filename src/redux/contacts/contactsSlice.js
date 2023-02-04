import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  updateContact,
  deleteContact,
} from './operations';
import { logOut } from 'redux/auth/operations';

const initialState = {
  items: [],
  isLoading: false,
  operation: null,
  error: null,
  editedContactId: null,
  isOpen: false,
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.operation = null;
  state.error = payload;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setEditedContactId(state, action) {
      state.editedContactId = action.payload;
    },
    setIsOpen(state, action) {
      state.isOpen = action.payload;
    },
  },
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
      .addCase(addContact.pending, state => {
        state.operation = 'add';
        state.isLoading = true;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.items = [...state.items, payload];
        state.operation = null;
        state.isOpen = false;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addContact.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.operation = null;
        state.error = payload;
      })
      .addCase(updateContact.pending, state => {
        state.operation = 'update';
        state.isLoading = true;
      })
      .addCase(updateContact.fulfilled, (state, { payload }) => {
        state.operation = null;
        state.isLoading = false;
        state.isOpen = false;
        state.error = null;
        const index = state.items.findIndex(
          contact => contact.id === payload.id
        );
        state.items[index].name = payload.name;
        state.items[index].number = payload.number;
        state.editedContactId = null;
      })
      .addCase(updateContact.rejected, (state, { payload }) => {
        state.operation = null;
        state.isLoading = false;
        state.error = payload;
        state.editedContactId = null;
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
      .addCase(logOut.fulfilled, state => {
        state.items = [];
      }),
});

export const { setEditedContactId, setIsOpen } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

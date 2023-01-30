import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  loadMessage,
  addMessage,
  deleteMessage,
  updateMessage,
  errorMessage,
} from 'constants/notifications';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (signal, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/contacts', { signal });
      loadMessage(data);
      return data;
    } catch (e) {
      if (!e.message === 'canceled') {
        errorMessage(e.message);
      }
      return rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/contacts', contact);
      addMessage(data.name);
      return data;
    } catch (e) {
      errorMessage(e.message);
      return rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`/contacts/${contactId}`);
      deleteMessage(data.name);
      return data.id;
    } catch (e) {
      errorMessage(e.message);
      return rejectWithValue(e.message);
    }
  }
);

export const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async (updatedContact, { rejectWithValue }) => {
    try {
      const { data } = await axios.patch(`/contacts/${updatedContact.id}`, {
        name: updatedContact.name,
        number: updatedContact.number,
      });
      updateMessage(data.name);
      return data;
    } catch (e) {
      errorMessage(e.message);
      return rejectWithValue(e.message);
    }
  }
);

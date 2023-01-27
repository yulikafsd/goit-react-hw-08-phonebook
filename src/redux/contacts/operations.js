import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addMessage,
  deleteMessage,
  errorMessage,
  loadMessage,
  emptyListMessage,
} from 'constants/notifications';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (signal, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/contacts', { signal });
      data.length > 0 ? loadMessage(data) : emptyListMessage();
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
  async (contact, thunkAPI) => {
    try {
      const { data } = await axios.post('/contacts', contact);
      addMessage(data.name);
      return data;
    } catch (e) {
      errorMessage(e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/contacts/${contactId}`);
      deleteMessage(data.name);
      return data.id;
    } catch (e) {
      errorMessage(e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

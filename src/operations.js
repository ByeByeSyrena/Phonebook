import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL =
  'https://6545fdf5fe036a2fa9550ed6.mockapi.io/contacts/';

export const getAllContacts = createAsyncThunk(
  'users/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'users/addContact',
  async (contactData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/contacts', contactData);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'users/deleteContact',
  async (userId, { rejectWithValue }) => {
    try {
      await axios.delete(`/contacts/${userId}`);
      return userId;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

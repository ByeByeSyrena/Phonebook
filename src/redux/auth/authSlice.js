import { createSlice } from '@reduxjs/toolkit';
import {
  loginThunk,
  logoutThunk,
  refreshThunk,
  registerThunk,
} from './operations';

const authInitialState = {
  isLoading: false,
  error: null,
  user: {
    name: '',
    email: '',
  },
  token: '',
  isFetchingCurrentUser: false,
};

const authSlice = createSlice({
  name: 'auth/register',
  initialState: authInitialState,
  extraReducers: builder =>
    builder
      .addCase(registerThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(registerThunk.fulfilled, (state, { payload }) => {
        state.error = null;
        state.isLoading = false;
        state.user = payload.user;
        state.token = payload.token;
      })
      .addCase(registerThunk.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(loginThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.error = null;
        state.isLoading = false;
        state.user = payload.user;
        state.token = payload.token;
      })
      .addCase(loginThunk.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(logoutThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(logoutThunk.fulfilled, (state, { payload }) => {
        state.error = null;
        state.isLoading = false;
        state.user = { name: '', email: '' };
        state.token = '';
      })
      .addCase(logoutThunk.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(refreshThunk.pending, state => {
        state.isLoading = true;
        state.isFetchingCurrentUser = true;
      })
      .addCase(refreshThunk.fulfilled, (state, { payload }) => {
        state.error = null;
        state.isLoading = false;
        state.user = payload;
        state.isFetchingCurrentUser = false;
      })
      .addCase(refreshThunk.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
        state.isFetchingCurrentUser = false;
      }),
});

export const authReducer = authSlice.reducer;

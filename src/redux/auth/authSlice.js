import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefresing: false,
  error: null,
  isAuthorising: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder

      // // REGISTER
      .addCase(register.pending, state => {
        state.isAuthorising = true;
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.isAuthorising = false;
        state.error = null;
      })
      .addCase(register.rejected, (state, { payload }) => {
        state.isAuthorising = false;
        state.error = payload;
      })

      // // LOGIN
      .addCase(logIn.pending, state => {
        state.isAuthorising = true;
      })
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.isAuthorising = false;
        state.error = null;
      })
      .addCase(logIn.rejected, (state, { payload }) => {
        state.isAuthorising = false;
        state.error = payload;
      })

      // // LOGOUT
      .addCase(logOut.pending, state => {
        state.isAuthorising = true;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.isAuthorising = false;
        state.error = null;
      })
      .addCase(logOut.rejected, (state, { payload }) => {
        state.isAuthorising = false;
        state.error = payload;
      })

      // // REFRESH
      .addCase(refreshUser.pending, state => {
        state.isRefresing = true;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.isRefresing = false;
        state.error = null;
      })
      .addCase(refreshUser.rejected, (state, { payload }) => {
        state.isRefresing = false;
        state.error = payload;
      }),
});

const authReducer = authSlice.reducer;

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const persistedAuthReducer = persistReducer(
  authPersistConfig,
  authReducer
);

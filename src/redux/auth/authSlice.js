import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logout } from './operations';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefresing: false,
};

const returnInitialState = state => {
  state = initialState;
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(register.pending, (state, action) => state)
      .addCase(register.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, (state, action) => state)
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      }),

  // LOGIN
  //     [login.pending](state, { meta }) {
  //       state.isRefresing = true;
  //     },
  //     [login.fulfilled](state, { payload }) {
  //       state.isRefresing = false;
  //     state.user = payload.user;
  //     },
  //     [login.rejected]: returnInitialState,

  // LOGOUT
  [logout.fulfilled]: returnInitialState,
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

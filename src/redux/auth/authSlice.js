import { createSlice } from '@reduxjs/toolkit';
import { register, logout } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  operation: null,
  isLoading: false,
};

const returnInitialState = state => {
  state = initialState;
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    // REGISTER
    [register.pending](state) {
      state.operation = 'register';
      state.isLoading = true;
    },
    [register.fulfilled](state, { payload }) {
      state.operation = null;
      state.isLoading = false;
      state.error = null;
      state.user = payload.user;
      state.token = payload.token;
    },
    [register.rejected]: returnInitialState,

    // LOGIN
    //     [login.pending](state, { meta }) {
    //       state.operation = `${meta.arg}`;
    //       state.isLoading = true;
    //     },
    //     [login.fulfilled](state, { payload }) {
    //       state.operation = null;
    //       state.isLoading = false;
    //       state.error = null;
    //       const index = state.items.findIndex(contact => contact.id === payload);
    //       state.items.splice(index, 1);
    //     },
    //     [login.rejected](state, { payload }) {
    //       state.operation = null;
    //       state.isLoading = false;
    //       state.error = payload;
    //     },
    // LOGOUT
    [logout.fulfilled]: returnInitialState,
  },
});

export const authReducer = authSlice.reducer;

// Перенести персистор слайса из стора сюда

// const authPersistConfig = {
//   key: 'auth',
//   storage,
//   whitelist: ['token'],
// };

//     auth: persistReducer(authPersistConfig, authReducer),

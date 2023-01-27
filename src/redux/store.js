import { configureStore } from '@reduxjs/toolkit';
// import { getDefaultMiddleware } from '@reduxjs/toolkit';

// import {
//   persistReducer,
//   persistStore,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/authSlice';
import { filterReducer } from './filter/filterSlice';
import { contactsReducer } from './contacts/contactsSlice';

// const middleware = [
//   ...getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
// ];

// const authPersistConfig = {
//   key: 'auth',
//   storage,
//   whitelist: ['token'],
// };

export const store = configureStore({
  reducer: {
    // auth: persistReducer(authPersistConfig, authReducer),
    auth: authReducer,
    contacts: contactsReducer,
    filter: filterReducer,
  },
  // middleware,
  // devTools: process.env.NODE_ENV === 'development',
});

// export const persistor = persistStore(store);

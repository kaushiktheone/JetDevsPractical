import {configureStore} from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import favoriteReducer from './slices/favoriteSlice';
import thunk from 'redux-thunk';

export const store = configureStore({
  reducer: {
    users: userReducer,
    favoriteUser: favoriteReducer,
  },
  middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

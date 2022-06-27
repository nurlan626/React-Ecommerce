
import { configureStore, createReducer } from '@reduxjs/toolkit';
import cartReducer from './cartReducer'
import user from './user';

const store = configureStore({
    reducer: {
      cart: cartReducer,
      user: user
    },
  });

  export default store
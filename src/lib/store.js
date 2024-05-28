import { configureStore } from '@reduxjs/toolkit';
import wishlistSlice from './slice/wishlistSlice';

const store = configureStore({
  reducer: {
    wishlist: wishlistSlice,
  },
});

export default store;
import { configureStore } from '@reduxjs/toolkit'

// Slice
import wishlistSlice from './slice/wishlistSlice'
import cartSlice from './slice/cartSlice'

export const store = () => {
    return configureStore({
        reducer: {
            wishlist: wishlistSlice,
            cart: cartSlice
        },
    })
}
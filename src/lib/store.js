import { configureStore } from '@reduxjs/toolkit'

// Slice
import wishlistSlice from './slice/wishlistSlice'

export const store = () => {
    return configureStore({
        reducer: {
            wishlist: wishlistSlice
        },
    })
}
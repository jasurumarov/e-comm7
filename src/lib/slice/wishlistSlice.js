'use client'
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: JSON.parse(localStorage.getItem("wishlist")) || [],
};

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        toggleWishlist: (state, action) => {
            let index = state.value.findIndex(el => el.id === action.payload.id);
            if (index < 0) {
                state.value = [...state.value, action.payload];
            } else {
                state.value = state.value.filter(el => el.id !== action.payload.id)
            }
            localStorage.setItem("wishlist", JSON.stringify(state.value))
        }
    }
})

export const { toggleWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
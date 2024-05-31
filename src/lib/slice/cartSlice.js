'use client'
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:
        []
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.value = action.payload
        },
        removeItemFromCart: (state, action) => {
            state.value = action.payload
        },
        incrementCartQuantity: (state, action) => {
            state.value = action.payload
        },
        decrementCartQuantity: (state, action) => {
            state.value = action.payload
        },
        // removeAllItemsFromCart: (state) => {
        //     state.value = []
        //     localStorage.removeItem("cart");
        // }
    }
})

export const { addToCart, removeItemFromCart, incrementCartQuantity, decrementCartQuantity, removeAllItemsFromCart } = cartSlice.actions;
export default cartSlice.reducer;
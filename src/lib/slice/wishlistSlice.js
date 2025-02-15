import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: [],
};

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        toggleWishlist: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { toggleWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
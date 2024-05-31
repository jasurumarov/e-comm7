// 'use client'
// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     value: JSON.parse(localStorage.getItem("cart")) || []
// };

// const cartSlice = createSlice({
//     name: 'cart',
//     initialState,
//     reducers: {
//         addToCart: (state, action) => {
//             let index = state.value.findIndex(el => el.id === action.payload.id);
//             if (index < 0) {
//                 state.value = [...state.value, { ...action.payload, quantity: 1 }];
//             } else {
//                 state.value = state.value.map((el, inx) =>
//                     inx === index ? { ...el, quantity: el.quantity + 1 } : el
//                 );
//             }
//             localStorage.setItem("cart", JSON.stringify(state.value))
//         },
//         removeItemFromCart: (state, action) => {
//             state.value = state.value.filter(i => i.id !== action.payload.id);
//             localStorage.setItem("cart", JSON.stringify(state.value));
//         },
//         incrementCartQuantity: (state, action) => {
//             let index = state.value.findIndex(el => el.id === action.payload.id);
//             state.value = state.value.map((el, inx) =>
//                 inx === index ? { ...el, quantity: el.quantity + 1 } : el
//             );
//             localStorage.setItem("cart", JSON.stringify(state.value))
//         },
//         decrementCartQuantity: (state, action) => {
//             let index = state.value.findIndex(el => el.id === action.payload.id);
//             state.value = state.value.map((el, inx) =>
//                 inx === index ? { ...el, quantity: el.quantity - 1 } : el
//             );
//             localStorage.setItem("cart", JSON.stringify(state.value))
//         },
//         removeAllItemsFromCart: (state) => {
//             state.value = []
//             localStorage.removeItem("cart");
//         }
//     }
// })

// export const { addToCart, removeItemFromCart, incrementCartQuantity, decrementCartQuantity, removeAllItemsFromCart } = cartSlice.actions;
// export default cartSlice.reducer;
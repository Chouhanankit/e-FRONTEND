import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cartItems.find(
        (item) => item._id === action.payload._id
      );

      if (existingItem) {
        state.cartItems = state.cartItems.map((item) =>
          item._id === action.payload._id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      } else {
        state.cartItems = [...state.cartItems, action.payload];
      }
    },
    removeToCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item._id !== action.payload
      );
    },
    incrementQty: (state, action) => {
      state.cartItems = state.cartItems.map((item) =>
        item._id === action.payload._id ? { ...item, qty: item.qty + 1 } : item
      );
    },
    decrementQty: (state, action) => {
      state.cartItems = state.cartItems.map((item) =>
        item._id === action.payload._id ? { ...item, qty: item.qty - 1 } : item
      );
    },
  },
});

export const { addToCart, removeToCart, incrementQty, decrementQty } =
  cartSlice.actions;

export default cartSlice.reducer;

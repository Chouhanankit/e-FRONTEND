import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";
import dataSlice from "./data/dataSlice";
import adminSlice from "./admin/adminSlice";
import productSlice from "./product/productSlice";
import cartSlice from "./cart/cartSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    userData: dataSlice,
    admin: adminSlice,
    product: productSlice,
    cart: cartSlice,
  },
});

export default store;

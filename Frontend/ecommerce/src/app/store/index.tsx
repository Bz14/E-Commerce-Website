"use client";
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import featuredProductReducer from "./slices/featuredProductSlice";
import productSlice from "./slices/productSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    featuredProducts: featuredProductReducer,
    products: productSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

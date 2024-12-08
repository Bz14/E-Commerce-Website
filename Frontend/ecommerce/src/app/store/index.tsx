"use client";
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import featuredProductReducer from "./slices/featuredProductSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    featuredProducts: featuredProductReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

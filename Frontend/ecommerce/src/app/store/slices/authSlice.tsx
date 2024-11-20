"use client";
import { createSlice } from "@reduxjs/toolkit";
import { AuthState } from "@/app/globals";

const initialState: AuthState = {
  accessToken: null,
  userProfile: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAccessToken(state, action) {
      state.accessToken = action.payload;
    },
    setUser(state, action) {
      state.userProfile = action.payload;
    },
    logout(state) {
      state.accessToken = null;
      state.userProfile = null;
    },
  },
});

export const { setAccessToken, setUser, logout } = authSlice.actions;
export default authSlice.reducer;

import { SignUpForm } from "@/app/globals";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiUrl = "http://localhost:5000/api/v1"; // process.env.API_URL;

export const signupUser = createAsyncThunk(
  "auth/signup",
  async (data: SignUpForm, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${apiUrl}/auth/signup`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data.message;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

interface SignupData {
  success: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: SignupData = {
  success: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    clearMessage: (state) => {
      state.success = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = null;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.loading = false;
        state.success = action.payload;
        state.error = null;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearMessage } = authSlice.actions;
export default authSlice.reducer;

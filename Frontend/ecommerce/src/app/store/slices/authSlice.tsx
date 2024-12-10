import { SignUpForm, LoginForm } from "@/app/globals";
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

export const loginUser = createAsyncThunk(
  "auth/login",
  async (data: LoginForm, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${apiUrl}/auth/login`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

interface AuthState {
  success: string | null;
  loading: boolean;
  error: string | null;
  token: string | null;
  user: object | null;
}

const initialState: AuthState = {
  success: null,
  loading: false,
  error: null,
  token: null,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    clearMessage: (state) => {
      state.success = null;
      state.error = null;
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
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
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearMessage, logout } = authSlice.actions;
export default authSlice.reducer;

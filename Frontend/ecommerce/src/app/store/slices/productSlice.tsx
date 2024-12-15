import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const apiUrl = "http://localhost:5000/api/products"; // process.env.API_URL

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (params: { category: string; page?: number }, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${apiUrl}?category=${params.category}&page=${params.page}&limit=4`
      );
      return { category: params.category, data: response.data };
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data || "Failed to fetch products"
      );
    }
  }
);

interface ProductState {
  categories: {
    [key: string]: {
      items: object[];
      pagination: {
        currentPage: number;
        totalPages: number;
        total: number;
      };
    };
  };
  loading: boolean;
  error: null | string;
}

const initialState: ProductState = {
  categories: {
    clothes: {
      items: [],
      pagination: {
        currentPage: 1,
        totalPages: 1,
        total: 0,
      },
    },
  },
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    setPage(state, action) {
      const { category, page } = action.payload;
      if (state.categories[category]) {
        state.categories[category].pagination.currentPage = page;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        const { category, data } = action.payload;
        state.categories[category].items = data.products;
        state.categories[category].pagination = data.pagination;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default productSlice.reducer;
export const { setPage } = productSlice.actions;

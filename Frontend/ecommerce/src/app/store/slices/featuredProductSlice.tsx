import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ProductState } from "@globals/globals";

const apiUrl = "http://localhost:5000/api/v1"; // process.env.API_URL;

export const fetchFeaturedProducts = createAsyncThunk(
  "featuredProducts/fetchFeaturedProducts",
  async () => {
    // const featured: Product[] = [
    //   {
    //     id: "2",
    //     name: "Mini dress.",
    //     description:
    //       "A classic mini ware dress.A classic mini ware dress.A classic mini ware dress.",
    //     image: "/assets/dress2.jpg",
    //     size: ["S", "M", "L", "XL"],
    //     price: "200",
    //     oldPrice: "250",
    //     discount: "20%",
    //     reviews: 4,
    //     rating: 4.5,
    //     tags: ["new", "sale"],
    //     gallery: [
    //       { src: "", alt: "Dress 1" },
    //       { src: "", alt: "Dress 2" },
    //       { src: "", alt: "Dress 3" },
    //     ],
    //     colors: ["#f00", "#0f0", "#00f"],
    //     quantity: 10,
    //   },
    //   {
    //     id: "1",
    //     name: "Short sleeve dress.",
    //     description:
    //       "A colorful long dress. A colorful long dress.A colorful long dress. A colorful long dress.",
    //     image: "/assets/dress1.jpg",
    //     size: ["S", "M", "L", "XL"],
    //     price: "200",
    //     oldPrice: "250",
    //     discount: "20%",
    //     reviews: 4,
    //     rating: 4.5,
    //     tags: ["new", "sale"],
    //     gallery: [
    //       { src: "", alt: "Dress 1" },
    //       { src: "", alt: "Dress 2" },
    //       { src: "", alt: "Dress 3" },
    //     ],
    //     colors: ["#f00", "#0f0", "#00f"],
    //     quantity: 10,
    //   },
    //   {
    //     id: "3",
    //     name: "Bridal dress.",
    //     description:
    //       "A long bridal dress.A long bridal dress.A long bridal dress.A long bridal dress.",
    //     image: "/assets/dress3.jpg",
    //     size: ["S", "M", "L", "XL"],
    //     price: "200",
    //     oldPrice: "250",
    //     discount: "20%",
    //     reviews: 4,
    //     rating: 4.5,
    //     tags: ["new", "sale"],
    //     gallery: [
    //       { src: "", alt: "Dress 1" },
    //       { src: "", alt: "Dress 2" },
    //       { src: "", alt: "Dress 3" },
    //     ],
    //     colors: ["#f00", "#0f0", "#00f"],
    //     quantity: 10,
    //   },
    // ];
    // return featured;
    const response = await fetch(`${apiUrl}/products/featured`);
    return response.json();
  }
);

const initialState: ProductState = {
  products: [],
  loading: false,
  error: "",
};

const featuredProductSlice = createSlice({
  name: "featuredProducts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFeaturedProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchFeaturedProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchFeaturedProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Error fetching data";
      });
  },
});

export default featuredProductSlice.reducer;

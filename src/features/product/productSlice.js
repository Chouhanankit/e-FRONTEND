import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productService from "./productService";

const productSlice = createSlice({
  name: "product",
  initialState: {
    isLoading: false,
    isSuccess: false,
    isError: false,
    allproduct: [],
    singleProduct: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchproduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchproduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.allproduct = action.payload;
      })
      .addCase(fetchproduct.rejected, (state) => {
        state.isError = true;
      })
      .addCase(fetchSingleproduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchSingleproduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.singleProduct = action.payload;
      })
      .addCase(fetchSingleproduct.rejected, (state) => {
        state.isError = true;
      });
  },
});

export default productSlice.reducer;

export const fetchproduct = createAsyncThunk(
  "FETCH/product",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await productService.getproduct(token);
    } catch (error) {
      console.log(error);
    }
  }
);

export const fetchSingleproduct = createAsyncThunk(
  "FETCH/SINGLE/product",
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await productService.getSingleProduct(id, token);
    } catch (error) {
      console.log(error);
    }
  }
);

export const fetchProductDelete = createAsyncThunk(
  "FETCH/DELETE/product",
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await productService.getProductDelete(id, token);
    } catch (error) {
      console.log(error);
    }
  }
);

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import adminService from "./adminService";

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    allusers: [],
    alldatas: [],
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: "",
  },

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllAdminUsers.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
        state.message = "";
      })
      .addCase(getAllAdminUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.allusers = action.payload;
        state.isError = false;
        state.message = "";
      })
      .addCase(getAllAdminUsers.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.allusers = null;
        state.message = action.payload;
      })
      .addCase(getAllAdmindatas.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
        state.message = "";
      })
      .addCase(getAllAdmindatas.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.alldatas = action.payload;
        state.isError = false;
        state.message = "";
      })
      .addCase(getAllAdmindatas.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.payload;
        state.alldatas = [];
      });
  },
});

export default adminSlice.reducer;

// GETALL USER
export const getAllAdminUsers = createAsyncThunk(
  "GETALL/USERS",
  async (_, thunkAPI) => {
    const token = thunkAPI.getState().auth.user.token;
    try {
      return await adminService.getUsers(token);
    } catch (error) {
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// GETALL alluersS
export const getAllAdmindatas = createAsyncThunk(
  "GETALL/DATAS",
  async (_, thunkAPI) => {
    const token = thunkAPI.getState().auth.user.token;
    try {
      return await adminService.getDatas(token);
    } catch (error) {
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import dataService from "./dataService";

const initialState = {
  data: null,
  datas: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

const dataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    removeFromState: (state, action) => {
      return {
        ...state,
        datas: state.datas.filter((data) => data._id !== action.payload),
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAlldatas.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
        state.data = null;
        state.datas = [];
        state.message = "";
      })
      .addCase(getAlldatas.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.data = null;
        state.datas = action.payload;
        state.message = "";
      })
      .addCase(getAlldatas.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.data = null;
        state.datas = [];
        state.message = action.payload;
      })
      .addCase(getSingledata.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
        state.data = null;
        state.message = "";
      })
      .addCase(getSingledata.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.data = action.payload;
        state.message = "";
      })
      .addCase(getSingledata.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.data = null;
        state.message = action.payload;
      })
      .addCase(closeSingledata.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
        state.datas = null;
        state.message = "";
      })
      .addCase(closeSingledata.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        // state.datas = action.payload;
        state.message = "";
      })
      .addCase(closeSingledata.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(createSingledata.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
        state.data = null;
        state.message = "";
      })
      .addCase(createSingledata.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.data = action.payload;
        state.isError = false;
        state.message = "";
      })
      .addCase(createSingledata.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.data = null;
        state.message = action.payload;
      });
  },
});

export default dataSlice.reducer;
export const { removeFromState } = dataSlice.actions;

// GET ALL dataS
export const getAlldatas = createAsyncThunk(
  "GETALL DATA",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await dataService.getDatas(token);
    } catch (error) {
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// // GET SINGLE data
export const getSingledata = createAsyncThunk(
  "GET/SINGLE",
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await dataService.getData(id, token);
    } catch (error) {
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// CLOSED SINGLE data
export const closeSingledata = createAsyncThunk(
  "data/CLOSE",
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await dataService.closeData(id, token);
    } catch (error) {
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// // CREATE data
export const createSingledata = createAsyncThunk(
  "data/CREATE",
  async (formdata, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await dataService.createData(formdata, token);
    } catch (error) {
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

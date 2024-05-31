import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authService";
import axios from "axios";

const userExist = JSON.parse(localStorage.getItem("user"));
const usergoogle = JSON.parse(localStorage.getItem("googleuser"));
const initialState = {
  user: userExist ? userExist : null,
  googleuser: usergoogle ? usergoogle : null,
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
        state.message = "";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
        state.isError = false;
        state.message = "";
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.user = null;
        state.message = action.payload;
      })
      .addCase(getGoogleUser.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
        state.message = "";
      })
      .addCase(getGoogleUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.googleuser = action.payload;
        state.isError = false;
        state.message = "";
      })
      .addCase(getGoogleUser.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.user = null;
      })
      .addCase(logOutUser.fulfilled, (state) => {
        state.user = null;
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = "";
      })
      .addCase(logOutGoogleUser.fulfilled, (state) => {
        state.googleuser = null;
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = "";
      });
  },
});

export default authSlice.reducer;

// register user
export const registerUser = createAsyncThunk(
  "REGISTER/USER",
  async (formData, thunkAPI) => {
    try {
      return await authService.register(formData);
    } catch (error) {
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// login user
export const loginUser = createAsyncThunk(
  "LOGIN/USER",
  async (formData, thunkAPI) => {
    try {
      return await authService.login(formData);
    } catch (error) {
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// login google user
export const getGoogleUser = createAsyncThunk("LOGIN/GOOGLE/USER", async () => {
  try {
    const response = await axios.get("http://localhost:8000/login/success", {
      withCredentials: true,
    });
    localStorage.setItem("googleuser", JSON.stringify(response.data.user));
    return response.data.user;
    // console.log(response);
  } catch (error) {
    console.log(error);
    // const message = error.response.data.message;
    // return thunkAPI.rejectWithValue(message);
  }
});

// logout user
export const logOutUser = createAsyncThunk("LOGOUT/USER", async () => {
  localStorage.removeItem("user");
});

export const logOutGoogleUser = createAsyncThunk(
  "LOGOUT/GOOGLE/USER",
  async () => {
    localStorage.removeItem("googleuser");
  }
);

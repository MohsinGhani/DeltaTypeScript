import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { login } from "../../services/login";
import Cookies from "js-cookie";

export const loginApi = createAsyncThunk<
  String,
  { username: string; password: string } & Partial<any>,
  {
    rejectValue: any;
  }
>("login/loginUser", async (payload, thunkAPI) => {
  try {
    const { username, password } = payload;
    const response = await login(username, password);

    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const loginSlice = createSlice({
  name: "login",
  initialState: {
    token: "",
    isLoading: false,
    isSuccess: false,
    error: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginApi.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(loginApi.fulfilled, (state, action) => {
      const myObj: { token: string } = Object(action.payload);
      state.isLoading = false;
      Cookies.set("token", myObj?.token);
      state.isSuccess = true;
      // state.token = action.payload;
    });
    builder.addCase(loginApi.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.token = "";
      state.error = action.payload;
    });
  },
  //   extraReducers: {
  //     [loginApi.pending]: (state: any) => {
  //       state.isLoading = true;
  //     },
  //     [loginApi.fulfilled]: (state: any, action: any) => {
  //       console.log("action.payload ===>", action.payload);
  //       state.isLoading = false;
  //       state.isSuccess = true;
  //       state.token = action.payload;
  //     },
  //     [loginApi.rejected]: (state: any, action: any) => {
  //       console.log("action", action);
  //       state.isLoading = false;
  //       state.isSuccess = false;
  //       state.token = "";
  //       state.error = action.payload;
  //     },
  //   },
});

export default loginSlice.reducer;

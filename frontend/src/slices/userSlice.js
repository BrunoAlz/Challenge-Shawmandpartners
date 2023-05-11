import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userService from "../services/userService";

const initialState = {
  data: [],
  user: {},
  error: false,
  success: false,
  loading: false,
};

export const getUsers = createAsyncThunk(
  "users/listAll",
  async (_, thunkAPI) => {
    const data = await userService.getUsers();
    if (data.data) {
      return thunkAPI.fulfillWithValue(data.data.users);
    } else {
      const message = data;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//  get userProfile Details
export const getUserProfileDetails = createAsyncThunk(
  "user/details",
  async (username, thunkAPI) => {
    const data = await userService.getUserProfileDetails(username);
    console.log(data);

    if (data.data) {
      return thunkAPI.fulfillWithValue(data.data);
    } else {
      const message = data;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        console.log(action.payload);
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getUserProfileDetails.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getUserProfileDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.user = action.payload;
      })
      .addCase(getUserProfileDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.user = {};
      });
  },
});

export default userSlice.reducer;

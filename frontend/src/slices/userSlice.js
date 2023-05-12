import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userService from "../services/userService";

const initialState = {
  data: [],
  user: {},
  repos: [],
  error: false,
  success: false,
  loading: false,
  since: null,
};

export const getUsers = createAsyncThunk(
  "users/listAll",
  async (since, thunkAPI) => {
    try {
      const data = await userService.getUsers(since);
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error while fetching users");
    }
  }
);

//  get userProfile Details
export const getUserProfileDetails = createAsyncThunk(
  "user/details",
  async (username, thunkAPI) => {
    const data = await userService.getUserProfileDetails(username);

    if (data.data) {
      return thunkAPI.fulfillWithValue(data.data);
    } else {
      return thunkAPI.rejectWithValue(data.response.data.error);
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
        state.error = false;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.success = true;
        state.data = action.payload.users;
        state.since = action.payload.since;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.success = false;
        state.data = [];
        state.since = null;
      })
      .addCase(getUserProfileDetails.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getUserProfileDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = false;
        state.user = action.payload;
      })
      .addCase(getUserProfileDetails.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
        state.user = {};
      });
  },
});

export default userSlice.reducer;

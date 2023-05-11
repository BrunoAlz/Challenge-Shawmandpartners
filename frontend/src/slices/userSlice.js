import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userService from "../services/userService";

const initialState = {
  data: [],
  error: false,
  success: false,
  loading: false,
};

export const getUsers = createAsyncThunk(
  "users/listAll",
  async (_, thunkAPI) => {
    const data = await userService.getUsers();
    console.log(data);
    if (data.data) {
      return thunkAPI.fulfillWithValue(data.data.users);
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
        console.log(action.payload)
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;

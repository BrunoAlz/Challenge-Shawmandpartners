import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import reposService from "../services/reposService";

const initialState = {
  repos: [],
  error: false,
  success: false,
  loading: false,
  page: 1
};

//  get user Repos
export const getUserProfileRepos = createAsyncThunk(
  "user/repos",
  async (username, thunkAPI) => {
    const data = await reposService.getUserProfileRepos(username);
    console.log(data);
    if (data) {
      return thunkAPI.fulfillWithValue(data);
    } else {
      return thunkAPI.rejectWithValue(data.error);
    }
  }
);

export const reposSlice = createSlice({
  name: "repos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserProfileRepos.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getUserProfileRepos.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = false;
        state.repos = action.payload.repos;
        state.repos = action.payload.repos;
      })
      .addCase(getUserProfileRepos.rejected, (state) => {
        state.loading = false;
        state.error = true;
        state.repos = [];
      });
  },
});

export default reposSlice.reducer;

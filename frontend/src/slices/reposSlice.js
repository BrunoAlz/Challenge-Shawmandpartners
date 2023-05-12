import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import reposService from "../services/reposService";

const initialState = {
  repos: [],
  error: false,
  success: false,
  loading: false,
  page: 1,
  nextPage: null,
  lastPage: null,
};

//  get user Repos
export const getUserProfileRepos = createAsyncThunk(
  "user/repos",
  async (username, thunkAPI) => {
    const data = await reposService.getUserProfileRepos(username);
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
        state.nextPage = action.payload.nextPage;
        state.lastPage = action.payload.lastPage;
        console.log(state.lastPage);

      })
      .addCase(getUserProfileRepos.rejected, (state) => {
        state.loading = false;
        state.error = true;
        state.repos = [];
      });
  },
});

export default reposSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import reposReducer from "./slices/reposSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    repos: reposReducer,
  },
});

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { sampThunk } from "../thunk/userThunk";

const slice = createSlice({
  name: "userData",
  initialState: {
    userdetail: [],
  },
  reducers: {
    fetch: (state, actions) => {
      state.data = actions.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(sampThunk.pending, (state, actions) => {
      state.isLoading = true;
    });
  },
});

export const { fetch } = slice.actions;
export default slice.reducer;

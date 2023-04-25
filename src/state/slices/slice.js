import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchvideo = createAsyncThunk("fetchvideos", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  return response.json();
});

const slice = createSlice({
  name: "slice",
  initialState: {
    side: false,
    video: true,
    isLoading: false,
    isError: false,
  },
  reducers: {
    hide: (state, actions) => {
      state.side = actions.payload;
    },
    vid: (state, actions) => {
      state.video = actions.payload;
    },
  },
  extraReducers: (builder) => {
    // builder.addCase(sampThunk.pending, (state, actions) => {
    //   state.isLoading = true;
    // });
    builder.addCase(fetchvideo.fulfilled, (state, actions) => {
      state.isLoading = false;
      state.videodata = actions.payload;
    });
    builder.addCase(fetchvideo.pending, (state, actions) => {
      state.isLoading = true;
    });
    builder.addCase(fetchvideo.rejected, (state, actions) => {
      console.log("error", actions.payload);
      state.isError = true;
    });
  },
});

export const { hide, vid } = slice.actions;
export default slice.reducer;

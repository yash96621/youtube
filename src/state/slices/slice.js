import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "slice",
  initialState: {
    side: false,
    video: true,
  },
  reducers: {
    hide: (state, actions) => {
      state.side = actions.payload;
    },
    vid: (state, actions) => {
      state.video = actions.payload;
    },
  },
});

export const { hide, vid } = slice.actions;
export default slice.reducer;

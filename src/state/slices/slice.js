import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "slice",
  initialState: {
    side: false,
    video: true,
    searchshow: false,
  },
  reducers: {
    hide: (state, actions) => {
      state.side = actions.payload;
    },
    vid: (state, actions) => {
      state.video = actions.payload;
    },
    setsearchshow: (state, { payload }) => {
      state.searchshow = payload;
    },
  },
});

export const { hide, vid, setsearchshow } = slice.actions;
export default slice.reducer;

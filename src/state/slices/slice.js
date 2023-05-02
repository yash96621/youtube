import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "slice",
  initialState: {
    side: false,
    video: true,
    searchshow: false,
    bellicon: false,
    IsSearch: false,
    SearchText: "",
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
    setIsSearch: (state, actions) => {
      state.IsSearch = actions.payload;
    },
    setbellicon: (state, { payload }) => {
      state.bellicon = payload;
    },
    setSearchText: (state, { payload }) => {
      state.SearchText = payload;
    },
  },
});

export const { hide, vid, setsearchshow, setIsSearch, setbellicon } = slice.actions;
export default slice.reducer;

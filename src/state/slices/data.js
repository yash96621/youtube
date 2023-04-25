import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
  name: "data",
  initialState: {
    isconnected: false,
    loginshow: false,
    user: null,
  },
  reducers: {
    setuserdata: (state, { payload }) => {
      state.user = payload;
    },
    setconnection: (state, { payload }) => {
      state.isconnected = payload;
    },
    setloginshow: (state, { payload }) => {
      state.loginshow = payload;
    },
  },
  extraReducers: (builder) => {},
});

export const { setloginshow, setconnection, setuserdata } = user.actions;
export default user.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { LoginWithGoogle } from "../thunk/TubeThunk";

const user = createSlice({
  name: "data",
  initialState: {
    isconnected: false,
    loginshow: false,
    dashshow: false,
    Googleuser: null,
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
    setdashboard: (state, { payload }) => {
      state.dashshow = payload;
    },
    logout: (state, { payload }) => {
      sessionStorage.removeItem("googleuser");
      state.isconnected = false;
      state.dashshow = false;
      state.loginshow = false;
      state.Googleuser = null;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(LoginWithGoogle.fulfilled, (state, actions) => {
      state.Googleuser = actions.payload;
      state.isconnected = true;
      state.loginshow = false;
    });
    builder.addCase(LoginWithGoogle.rejected, (state, actions) => {
      console.log(actions.payload);
    });
  },
});

export const { setloginshow, setconnection, setuserdata, logout, setdashboard } = user.actions;
export default user.reducer;

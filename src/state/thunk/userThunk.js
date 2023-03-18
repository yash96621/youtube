import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const userFetchThunk = createAsyncThunk(
  "user/login",
  async ({ email, pass }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("api", { email, pass });
      return data;
    } catch (e) {
      return rejectWithValue("errrrr");
    }
  }
);

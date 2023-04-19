import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const Url = "http://locahost:5000";

export const Login = createAsyncThunk("login", async ({ email }, { rejectWithValue }) => {
  try {
    const { data } = await axios.post(`${Url}/api/auth/login`, {
      email,
    });
    console.log(data);
    return data;
  } catch (e) {
    return rejectWithValue(e);
  }
});

export const FetchSignup = createAsyncThunk(
  "user/signup",
  async ({ email, password, phone, name, type }, { rejectWithValue }) => {
    try {
      console.log(email, password, phone, name, type);
      const { data } = await axios.post(`${Url}/api/auth/signup`, {
        email,
        password,
        phone,
        name,
        type,
        systemSceretKey,
      });
      return data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);
export const FetchResetOtp = createAsyncThunk(
  "user/resetotp",
  async ({ email }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`${Url}/api/auth/emailForReset`, {
        email,
        systemSceretKey,
      });
      return data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const FetchOtpMail = createAsyncThunk(
  "user/emailVerify",
  async ({ email }, { rejectWithValue }) => {
    try {
      console.log(email);
      const { data } = await axios.post(`${Url}/api/auth/emailVerify`, {
        email,
        systemSceretKey,
      });
      return data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);
export const FetchResetPass = createAsyncThunk(
  "user/resetpassword",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`${Url}/api/auth/resetPassword`, {
        email,
        password,
        systemSceretKey,
      });
      return data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const FetchAuthCheck = createAsyncThunk(
  "user/authcheck",
  async ({ authToken }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`${Url}/api/auth/authCheck`, {
        authToken: authToken,
      });
      return data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const FetchAllUser = createAsyncThunk(
  "user/alluser",
  async ({ authToken }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`${Url}/api/adminoperation/getAllUsers`, {
        authToken: authToken,
      });
      console.log(data);
      return data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const FetchAllExpert = createAsyncThunk(
  "user/allexpert",
  async ({ authToken }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`${Url}/api/adminoperation/getAllTutors`, {
        authToken: authToken,
      });
      console.log(data);
      return data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const FetchAllCourses = createAsyncThunk(
  "user/allcourses",
  async ({}, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`${Url}/api/courseoperation/getAllCourses`, {});
      console.log(data);
      return data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const FetchVerifyExpert = createAsyncThunk(
  "user/approve_expert",
  async ({ authToken, email }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`${Url}/api/adminoperation/verifyAccount`, {
        authToken: authToken,
        email: email,
      });
      console.log(data);
      return data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const FetchVerifyCourse = createAsyncThunk(
  "user/approve_courses",
  async ({ authToken, id }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`${Url}/api/adminoperation/verifyCourse`, {
        authToken,
        id,
      });
      console.log(data);
      return data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const FetchDeleteExpert = createAsyncThunk(
  "user/deleteExpert",
  async ({ email, authToken }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`${Url}/api/adminoperation/deleteTutor`, {
        authToken: authToken,
        email,
      });
      console.log(data);
      return data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const FetchDeleteUser = createAsyncThunk(
  "user/deleteUser",
  async ({ email, authToken }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`${Url}/api/adminoperation/deleteUser`, {
        authToken: authToken,
        email,
      });
      console.log(data);
      return data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const FetchDeleteCourse = createAsyncThunk(
  "user/deleteCourse",
  async ({ id, authToken }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`${Url}/api/adminoperation/deleteCourse`, {
        authToken,
        id,
      });
      console.log(data);
      return data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const FetchAddCourse = createAsyncThunk(
  "user/addCourse",
  async ({ name, duration, date, mode, fees, level, details, authToken }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`${Url}/api/courseoperation/addcourse`, {
        authToken,
        name,
        duration,
        date,
        mode,
        fees,
        level,
        details,
      });
      console.log(data);
      return data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const FetchEnroll = createAsyncThunk(
  "user/enrollcourse",
  async ({ id, authToken }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`${Url}/api/courseoperation/enroll`, {
        authToken,
        id,
      });
      console.log(data);
      return data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

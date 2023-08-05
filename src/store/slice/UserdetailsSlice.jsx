import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Action for Creating new users
export const getAllUserData = createAsyncThunk(
  "ceateUsers",
  async (data, { rejectWithValue }) => {
    const response = await fetch(
      "https://64cc7c972eafdcdc8519dfd7.mockapi.io/users",
      {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    try {
      const result = await response.json();
      return result;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err);
    }
  }
);

// Actions for Reading Users
export const showAllUserData = createAsyncThunk(
  "showAllUserData",
  async (args, { rejectWithValue }) => {
    const response = await fetch(
      "https://64cc7c972eafdcdc8519dfd7.mockapi.io/users"
    );
    try {
      const result = await response.json();
      // console.log(result);
      return result;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

export const userdeatilsSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  extraReducers: {
    [getAllUserData.pending]: (state) => {
      state.loading = true;
    },
    [getAllUserData.fulfilled]: (state, action) => {
      state.loading = false;
      state.users.push(action.payload);
    },
    [getAllUserData.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [showAllUserData.pending]: (state) => {
      state.loading = true;
    },
    [showAllUserData.fulfilled]: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    [showAllUserData.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

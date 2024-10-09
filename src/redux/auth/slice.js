import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
    userName: null,
  },
  extraReducers: (builder) => builder.addCase(),
});

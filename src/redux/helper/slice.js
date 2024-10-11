import { createSlice } from "@reduxjs/toolkit";
import themePicker from "../../helpers/themePicker";

const helperSlice = createSlice({
  name: "helper",
  initialState: {
    theme: themePicker(),
  },
});

const helperReducer = helperSlice.reducer;
export default helperReducer;

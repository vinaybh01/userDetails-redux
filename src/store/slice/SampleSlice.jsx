import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 2 };

const sampleSlice = createSlice({
  name: "sample",
  initialState,
  reducers: {
    addNumber: (state, action) => {
      //   return (state.value += action.payload);
      state.value += action.payload;
    },
    subNumber: (state, action) => {
      //   return (state -= action.payload);
      state.value = state.value - action.payload;
    },
  },
});

export const { addNumber, subNumber } = sampleSlice.actions;
export default sampleSlice.reducer;

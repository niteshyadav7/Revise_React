import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
    value: 0,
  },
  reducers: {
    increase: (state, action) => {
      state.count += 1;
    },
    decrease: (state, action) => {
      state.count -= 1;
    },
    addValue: (state, action) => {
      state.count += action.payload;
    },
  },
});

export const { increase, decrease,addValue } = counterSlice.actions;
export default counterSlice.reducer;

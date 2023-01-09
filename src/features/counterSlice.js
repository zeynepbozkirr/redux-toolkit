import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  name: "zeynep",
  todo: ["dd"],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
      state.todo.push("5");
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;

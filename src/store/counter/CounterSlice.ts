import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Counterstate {
  counter: number;
}

const initialState: Counterstate = {
  counter: 5,
};

const CounterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addOne(state) {
      state.counter++;
    },
    substractOne(state) {
      if (state.counter === 0) return;
      state.counter--;
    },
    resetCounter(state, action: PayloadAction<number>) {
      if (state.counter < 0) action.payload = 0;
      state.counter = action.payload;
    },
  },
});

export const { addOne, resetCounter, substractOne } = CounterSlice.actions;

export default CounterSlice.reducer;

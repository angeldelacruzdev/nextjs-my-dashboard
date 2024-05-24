import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Counterstate {
  count: number;
  isReady: boolean;
}

const initialState: Counterstate = {
  count: 5,
  isReady: false
};

const CounterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {

    initCounterState(state, action: PayloadAction<number>) {
      if (state.isReady) return;

      state.count = action.payload;
      state.isReady = true;

    },
    addOne(state) {
      state.count++;
    },
    substractOne(state) {
      if (state.count === 0) return;
      state.count--;
    },
    resetCounter(state, action: PayloadAction<number>) {
      if (state.count < 0) action.payload = 0;
      state.count = action.payload;
    },
  },
});

export const { addOne, resetCounter, substractOne, initCounterState } = CounterSlice.actions;

export default CounterSlice.reducer;

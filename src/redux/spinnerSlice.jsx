import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  spinnerState: false,
};

const spinnerSlice = createSlice({
  name: "spinnerSlice",
  initialState,
  reducers: {
    setSpinnerState: (state, action) => {
      state.spinnerState = action.payload;
    },
  },
});

export const { setSpinnerState } = spinnerSlice.actions;

export default spinnerSlice.reducer;

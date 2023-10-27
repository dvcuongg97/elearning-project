import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  arrCourses: [],
};

const sliceCourses = createSlice({
  name: "sliceCourses",
  initialState,
  reducers: {
    setCourses: (state, { payload }) => {
      state.arrCourses = payload;
    },
  },
});

export const { setCourses } = sliceCourses.actions;

export default sliceCourses.reducer;

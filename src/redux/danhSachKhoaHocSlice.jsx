import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { clientApi } from "../api/api";

export const layDanhSachKhoaHocAction = createAsyncThunk(
  "layDanhSachKhoaHocAction",
  async () => {
    let res = await clientApi.layDanhSachKhoaHocApi();
    return res.data;
  }
);
const initialState = {
  danhSachKhoaHoc: [],
};

const danhSachKhoaHocSlice = createSlice({
  name: "danhSachKhoaHocSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(layDanhSachKhoaHocAction.fulfilled, (state, action) => {
      state.danhSachKhoaHoc = action.payload;
    });
  },
});

// export const {} = danhSachKhoaHocSlice.actions;

export default danhSachKhoaHocSlice.reducer;

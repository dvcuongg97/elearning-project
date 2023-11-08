import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { clientApi } from "../api/api";

export const layDanhSachKhoaHocAction = createAsyncThunk(
  "layDanhSachKhoaHocAction",
  async () => {
    try {
      let res = await clientApi.layDanhSachKhoaHoc();
      if (res.status === 200) {
        return res.data;
      }
    } catch (error) {}
  }
);
export const layDanhMucKhoaHocAction = createAsyncThunk(
  "layDanhMucKhoaHocAction",
  async () => {
    try {
      const res = await clientApi.layDanhMucKhoaHoc();
      if (res.status === 200) {
        return res.data;
      }
    } catch (error) {}
  }
);
const initialState = {
  danhSachKhoaHoc: [],
  danhMucKhoaHoc: [],
};

const khoaHocSlice = createSlice({
  name: "khoaHocSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(layDanhSachKhoaHocAction.fulfilled, (state, action) => {
      state.danhSachKhoaHoc = action.payload;
    });
    builder.addCase(layDanhMucKhoaHocAction.fulfilled, (state, action) => {
      state.danhMucKhoaHoc = action.payload;
    });
  },
});

// export const {} = khoaHocSlice.actions;

export default khoaHocSlice.reducer;

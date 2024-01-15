import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { clientApi } from "../api/api";

export const layDanhSachKhoaHocAction = createAsyncThunk(
  "layDanhSachKhoaHocAction",
  async () => {
    let res = await clientApi.layDanhSachKhoaHoc();
    if (res.status === 200) {
      return res.data;
    }
  }
);
export const layDanhMucKhoaHocAction = createAsyncThunk(
  "layDanhMucKhoaHocAction",
  async () => {
    const res = await clientApi.layDanhMucKhoaHoc();
    if (res.status === 200) {
      return res.data;
    }
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

// export const { } = khoaHocSlice.actions;

export default khoaHocSlice.reducer;

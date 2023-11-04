import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { clientApi } from "../api/api";

export const layDanhMucKhoaHocAction = createAsyncThunk(
  "layDanhMucKhoaHocAction",
  async () => {
    const res = await clientApi.layDanhMucKhoaHocApi();
    return res.data;
  }
);

const initialState = {
  danhMucKhoaHoc: [],
};

const danhMucKhoaHocSlice = createSlice({
  name: "danhMucKhoaHocSlice",
  initialState,
  reducers: {
    setSearchState: (state, action) => {
      state.search = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(layDanhMucKhoaHocAction.fulfilled, (state, action) => {
      state.danhMucKhoaHoc = action.payload;
    });
  },
});

// export const { setSearchState } = danhMucKhoaHocSlice.actions;

export default danhMucKhoaHocSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { clientProfileApi } from "../api/api";
import { userLocalStorage } from "../api/localService";
import { message } from "antd";
export const clientSigninAction = createAsyncThunk(
  "clientSigninAction",
  async (values) => {
    try {
      const res = await clientProfileApi.dangNhap(values);
      if (res.status === 200) {
        message.success("Đăng Nhập Thành Công!");
        userLocalStorage.set(res.data);
        return res.data;
      }
    } catch (error) {
      message.error(error.response.data);
    }
  }
);

export const layThongTinTaiKhoanAction = createAsyncThunk(
  "layThongTinTaiKhoanAction",
  async () => {
    try {
      const res = await clientProfileApi.layThongTinTaiKhoan();
      if (res.status === 200) {
        return res.data;
      }
    } catch (error) {}
  }
);
const initialState = {
  clientInfo: userLocalStorage.get(),
  clientDetail: {},
};

const clientProfileSlice = createSlice({
  name: "clientProfileSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(clientSigninAction.fulfilled, (state, action) => {
      state.clientInfo = action.payload;
    });
    builder.addCase(layThongTinTaiKhoanAction.fulfilled, (state, action) => {
      state.clientDetail = action.payload;
    });
  },
});

// export const { setClientDetail } = clientProfileSlice.actions;

export default clientProfileSlice.reducer;

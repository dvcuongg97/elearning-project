import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userProfileApi } from "../api/api";
import { userLocalStorage } from "../api/localService";

import { message } from "antd";

export const userLoginAction = createAsyncThunk(
  "userLoginAction",
  async (values) => {
    try {
      const res = await userProfileApi.dangNhap(values);
      if (res.status === 200) {
        message.success("Đăng Nhập Thành Công!");
        userLocalStorage.set(res.data);
        window.location.reload();
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
      const res = await userProfileApi.layThongTinTaiKhoan();
      if (res.status === 200) {
        return res.data;
      }
    } catch (error) {}
  }
);

const initialState = {
  userLogin: userLocalStorage.get(),
  userProfile: {},
};

const userProfileSlice = createSlice({
  name: "userProfileSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userLoginAction.fulfilled, (state, action) => {
      state.userLogin = action.payload;
    });
    builder.addCase(layThongTinTaiKhoanAction.fulfilled, (state, action) => {
      state.userProfile = action.payload;
    });
  },
});

// export const {} = userProfileSlice.actions;

export default userProfileSlice.reducer;

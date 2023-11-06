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
        userLocalStorage.get(res.data);
        message.success("Đăng Nhập Thành Công!");
        return res.data;
      }
    } catch (error) {
      message.error(error.response.data);
    }
  }
);

const initialState = {
  clientInfo: userLocalStorage.get(),
};

const clientProfileSlice = createSlice({
  name: "clientProfileSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(clientSigninAction.fulfilled, (state, action) => {
      state.clientInfo = action.payload;
    });
  },
});

// export const {} = clientProfileSlice.actions;

export default clientProfileSlice.reducer;

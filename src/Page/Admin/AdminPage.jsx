import React from 'react'
import {userLocalStorage} from '../../api/localService';
import { Table } from 'antd';

export default function AdminPage() {
  let admin = userLocalStorage.get()
  console.log(admin);
  return (
    <div>
      <div>Thông tin Admin</div>
      <div>Tài khoản: {admin.taiKhoan}</div>
      <div>Tên: {admin.hoTen}</div>
      <div>Email: {admin.email}</div>
      <div>Điện thoại: {admin.soDT}</div>
    </div>

  )
}

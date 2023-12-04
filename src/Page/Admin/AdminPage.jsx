import React from 'react'
import {userLocalStorage} from '../../api/localService';
import { Table } from 'antd';

export default function AdminPage() {
  let admin = userLocalStorage.get()
  console.log(admin);
  return (
    <div className="max-w-md mx-auto bg-white rounded-md overflow-hidden my-4">
      <table className="w-full border-collapse">
        <tbody>
          <tr className="bg-gray-100 border-b">
            <td colSpan="2" className="py-2 px-4 font-bold text-lg">Thông tin Admin</td>
          </tr>
          <tr className="border-b">
            <td className="py-2 px-4 font-semibold">Tài khoản:</td>
            <td className="py-2 px-4">{admin.taiKhoan}</td>
          </tr>
          <tr className="border-b">
            <td className="py-2 px-4 font-semibold">Tên:</td>
            <td className="py-2 px-4">{admin.hoTen}</td>
          </tr>
          <tr className="border-b">
            <td className="py-2 px-4 font-semibold">Email:</td>
            <td className="py-2 px-4">{admin.email}</td>
          </tr>
          <tr className="border-b">
            <td className="py-2 px-4 font-semibold">Điện thoại:</td>
            <td className="py-2 px-4">{admin.soDT}</td>
          </tr>
        </tbody>
      </table>
    </div>

  )
}

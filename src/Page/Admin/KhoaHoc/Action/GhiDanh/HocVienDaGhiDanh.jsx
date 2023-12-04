import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux';
import {Button, Table, message} from 'antd';
import { adminGhiDanh } from '../../../../../api/api';
import axios from 'axios';
import { TOKEN_CYBERSOFT } from '../../../../../api/configApi';
import { userLocalStorage } from '../../../../../api/localService';

export default function HocVienDaGhiDanh() {
  const khoaHocData = useSelector((state) => state.adminSlice.khoaHoc)
  const [danhSachHV, setdanhSachHV] = useState([]);
  let fetchListHv = () => { 
    axios.post('https://elearningnew.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachHocVienKhoaHoc',khoaHocData, 
    {  headers: {
      TokenCybersoft: TOKEN_CYBERSOFT,
      Authorization: "Bearer " + userLocalStorage.get()?.accessToken,
    },}
    )
    .then((res) => {
              console.log(res);
              setdanhSachHV(res.data)
            })
    .catch((err) => {
             console.log(err);
            });
   }
  useEffect(() => {
      fetchListHv()
  }, [khoaHocData]);
  let handleXoaHocVien = (hocVien) => { 
    console.log(hocVien);
    let ttdk = {
      maKhoaHoc: khoaHocData.maKhoaHoc,
      taiKhoan: hocVien.taiKhoan
    }
    axios.post('https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/HuyGhiDanh',ttdk, 
    {  headers: {
      TokenCybersoft: TOKEN_CYBERSOFT,
      Authorization: "Bearer " + userLocalStorage.get()?.accessToken,
    },}
    )
    .then((res) => {
            message.success("Xóa thành công")
            fetchListHv()
          })
    .catch((err) => {
           console.log(err);
          });
   }
  const columns = [
    {
      title: 'Tài khoản',
      dataIndex: 'taiKhoan',
      key: 'taiKhoan',
    },
    {
      title: 'Bí danh',
      dataIndex: 'biDanh',
      key: 'biDanh',
    },
    {
      title: 'Action',
      render: (_,hocVien) => {
        return <>
            <Button className='bg-red-500 text-white' onClick={() => { handleXoaHocVien(hocVien) }}>Xóa</Button>
        </>
      }
    },
  ];
  return (
    <div>
        <h1 className='text-lg font-semibold'>Học viên chờ xét duyệt</h1>
        <Table dataSource={danhSachHV} columns={columns} 
         pagination={{
          pageSize: 3,
          showSizeChanger: false,
        }}
        />
    </div>
  )
}
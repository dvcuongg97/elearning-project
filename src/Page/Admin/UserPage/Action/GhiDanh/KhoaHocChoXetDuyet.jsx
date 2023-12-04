import React from 'react'
import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import { Button, Table, message } from 'antd';
import axios from 'axios';
import { TOKEN_CYBERSOFT } from '../../../../../api/configApi';
import { userLocalStorage } from '../../../../../api/localService';

export default function KhoaHocChoXetDuyet() {
    const userData = useSelector((state) => state.adminSlice.nguoiDung)
    const [danhSachKH, setdanhSachKH] = useState([]);
    let fetchListKh = () => { 
      axios.post('https://elearningnew.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachKhoaHocChoXetDuyet',userData, 
      {  headers: {
        TokenCybersoft: TOKEN_CYBERSOFT,
        Authorization: "Bearer " + userLocalStorage.get()?.accessToken,
      },}
      )
      .then((res) => {
              setdanhSachKH(res.data)
            })
      .catch((err) => {
             console.log(err);
            });
     }
    useEffect(() => {
        fetchListKh()
    }, [userData]);
    let handleXoaKhoaHoc = (khoaHoc) => { 
      console.log(khoaHoc);
      let ttdk = {
        maKhoaHoc: khoaHoc.maKhoaHoc,
        taiKhoan: userData.taiKhoan
      }
      axios.post('https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/HuyGhiDanh',ttdk, 
      {  headers: {
        TokenCybersoft: TOKEN_CYBERSOFT,
        Authorization: "Bearer " + userLocalStorage.get()?.accessToken,
      },}
      )
      .then((res) => {
              message.success("Xóa thành công")
              fetchListKh()
            })
      .catch((err) => {
             console.log(err);
            });
     }

    let handleDangKy = (khoaHoc) => { 
      let ttdk = {
        maKhoaHoc: khoaHoc.maKhoaHoc,
        taiKhoan: userData.taiKhoan
      }
      axios.post('https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/GhiDanhKhoaHoc',ttdk, 
      {  headers: {
        TokenCybersoft: TOKEN_CYBERSOFT,
        Authorization: "Bearer " + userLocalStorage.get()?.accessToken,
      },}
      )
      .then((res) => {
              message.success("Ghi danh thành công")
              fetchListKh()
            })
      .catch((err) => {
             console.log(err);
            });
     }
      const columns = [
        {
          title: 'Mã khóa học',
          dataIndex: 'maKhoaHoc',
          key: 'maKhoaHoc',
        },
        {
          title: 'Tên khóa học',
          dataIndex: 'tenKhoaHoc',
          key: 'tenKhoaHoc',
        },
        {
          title: 'Action',
          render: (_,khoaHoc) => {
            return <>
            <Button className='bg-green-500 text-white' onClick={() => { handleDangKy(khoaHoc) }}>Xác thực</Button>
            <Button className='bg-red-500 text-white' onClick={() => { handleXoaKhoaHoc(khoaHoc) }}>Xóa</Button>
            </>
          }
        },
      ];
      
  return (
    <div>
        <h1 className='text-lg font-semibold'>Khóa học chờ xét duyệt</h1>
        <Table dataSource={danhSachKH} columns={columns} 
         pagination={{
                  pageSize: 3,
                  showSizeChanger: false,
        }}
        />
    </div>
  )
}

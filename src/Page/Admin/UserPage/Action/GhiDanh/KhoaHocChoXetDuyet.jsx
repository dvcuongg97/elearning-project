import React from 'react'
import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import { adminGhiDanh } from '../../../../../api/api';
import { Button, Table } from 'antd';

export default function KhoaHocChoXetDuyet() {
    const userData = useSelector((state) => state.adminSlice.nguoiDung)
    console.log(userData);
    const [danhSachKH, setdanhSachKH] = useState([]);
    let fetchListKh = () => { 
        adminGhiDanh.khoaHocChoXetDuyet(userData)
        .then((res) => {
                console.log(res);
                setdanhSachKH(res.data)
              })
        .catch((err) => {
               console.log(err);
              });
     }
    useEffect(() => {
        fetchListKh()
    }, []);
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
          title: 'Bí danh',
          dataIndex: 'biDanh',
          key: 'biDanh',
        },
        {
          title: 'Action',
          render: (_,khoaHoc) => {
            return <>
            <Button>Xác thực</Button>
            <Button>Xóa</Button>
            </>
          }
        },
      ];
      
  return (
    <div>
        <h1>Khóa học chờ xét duyệt</h1>
        <Table dataSource={danhSachKH} columns={columns} />
    </div>
  )
}

import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux';
import {Button, Table} from 'antd';
import { adminGhiDanh } from '../../../../../api/api';

export default function HocVienDaGhiDanh() {
  const khoaHocData = useSelector((state) => state.adminSlice.khoaHoc)
  const [danhSachHV, setdanhSachHV] = useState([]);
  let fetchListHv = () => { 
      adminGhiDanh.hocVienDaGhiDanh(khoaHocData)
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
  }, []);
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
            <Button>Xác thực</Button>
            <Button>Xóa</Button>
        </>
      }
    },
  ];
  return (
    <div>
        <h1 className='text-lg font-semibold'>Học viên chờ xét duyệt</h1>
        <Table dataSource={danhSachHV} columns={columns} />
    </div>
  )
}
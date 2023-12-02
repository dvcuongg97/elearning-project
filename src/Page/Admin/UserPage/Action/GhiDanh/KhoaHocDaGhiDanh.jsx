import { Button, Table } from 'antd';
import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import { adminGhiDanh } from '../../../../../api/api';

export default function KhoaHocDaGhiDanh() {
    const userData = useSelector((state) => state.adminSlice.nguoiDung)
    console.log(userData);
    const [danhSachKH, setdanhSachKH] = useState([]);
    let fetchListKh = () => { 
        adminGhiDanh.khoaHocDaGhiDanh(userData)
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
            <Button>Hủy ghi danh</Button>
            </>
          }
        },
      ];
      
  return (
    <div>
        <h1 className='text-lg font-semibold'>Khóa học đã ghi danh</h1>
        <Table dataSource={danhSachKH} columns={columns} />
    </div>
  )
}

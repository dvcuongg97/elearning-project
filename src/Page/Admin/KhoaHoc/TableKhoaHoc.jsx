import React, { useEffect, useState } from 'react'
import { Button, Table, Tag, message } from 'antd';
import { adminApi, clientApi } from '../../../api/api';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
import { setData, setKhoaHoc } from '../../../redux/adminSlice';
import { NavLink } from 'react-router-dom';
import Search from 'antd/es/input/Search';


export default function TableKhoaHoc() {
    const [listKhoaHoc, setListKhoaHoc] = useState([]);
    let fetchListKhoaHoc = () => { 
          clientApi.layDanhSachKhoaHoc()
          .then((res) => {
                  console.log(res);
                  setListKhoaHoc(res.data)
                })
          .catch((err) => {
                console.log(err);
                });
     }
    useEffect(() => {
       fetchListKhoaHoc()
    }, []);
    let handleDeleteKhoaHoc = (maKhoaHoc) => { 
        Swal.fire({
            title: "Xác nhận xóa",
            text: "Bạn sẽ không thể hoàn tác!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Delete"
          }).then((result) => {
            if (result.isConfirmed) { 
                adminApi.xoaKhoaHoc_Admin(maKhoaHoc)
                .then((res) => {
                        console.log(res);
                        message.success("Xóa thành công")
                    })
                .catch((err) => {
                    message.error(err.response.data.content)
                    console.log(err);
                    });
            }
          });
    }
    const dispatch = useDispatch();
    let handleEditKhoaHoc = (khoaHoc) => { 
      console.log(khoaHoc);
      dispatch(setKhoaHoc(khoaHoc))
     }
     const onSearch = (value, _e, info) => {
      console.log(value);
      adminApi.timKhoaHoc_Admin(value)
      .then((res) => {
              console.log(res);
              setListKhoaHoc(res.data)
            })
      .catch((err) => {
             console.log(err);
            });
     }
let columnsHeader = [
      {
        title: 'Mã khóa học',
        dataIndex: 'maKhoaHoc',
        key: 'maKhoaHoc',
      },
      {
        title: 'Bí danh',
        dataIndex: 'biDanh',
        key: 'biDanh',
      },
      {
        title: 'Tên khóa học',
        dataIndex: 'tenKhoaHoc',
        key: 'tenKhoaHoc',
      },
      {
        title: 'Mô tả',
        dataIndex: 'moTa',
        key: 'moTa',
      },
      {
        title: 'Lượt xem',
        dataIndex: 'luotXem',
        key: 'luotXem',
      },
      {
        title: 'Đánh giá',
        dataIndex: 'danhGia',
        key: 'danhGia',
      },
      {
        title: 'Hình ảnh',
        dataIndex: 'hinhAnh',
        key: 'hinhAnh',
        render: (_,khoaHoc) => { 
            return <img className='h-60 w-60 object-fill' src={khoaHoc.hinhAnh}/>
         }
      },
      {
        title: 'Mã nhóm',
        dataIndex: 'maNhom',
        key: 'maNhom',
      },
      {
        title: 'Ngày tạo',
        dataIndex: 'ngayTao',
        key: 'ngayTao',
      },
      {
        title: 'Mã danh mục',
        dataIndex: 'maDanhMucKhoaHoc',
        key: 'maDanhMucKhoaHoc',
        render: (_,khoaHoc) => { 
            return khoaHoc.danhMucKhoaHoc.maDanhMucKhoahoc
         }
      },
      {
        title: 'Người tạo',
        dataIndex: 'taiKhoanNguoiTao',
        key: 'taiKhoanNguoiTao',
        render: (_,khoaHoc) => { 
            return khoaHoc.nguoiTao.hoTen
         }
      },
      {
        title: 'Action',
        render: (_,khoaHoc) => { 
            // console.log(user);
            return <>
            <NavLink to={"/admin/khoahoc/edit"}><Button onClick={() => { handleEditKhoaHoc(khoaHoc) }} className='bg-yellow-500 text-white'>Edit</Button></NavLink>
            <Button onClick={() => { handleDeleteKhoaHoc(khoaHoc.maKhoaHoc) }} className='bg-red-600 text-white'>Delete</Button>
            </>
         }
      },
]
  return (
    <div>
        <Search placeholder="Nhập tên khóa học" onSearch={onSearch} enterButton/>
        {/* {isLoanding && <Spiner/>} */}
        <Table dataSource={listKhoaHoc} columns={columnsHeader} />;
    </div>
  )
}

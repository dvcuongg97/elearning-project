import React, { useEffect, useState } from 'react'
import { Button, Modal, Table, Tag, message } from 'antd';
import { adminApi, clientApi } from '../../../api/api';
import Swal from 'sweetalert2';
import {useDispatch, useSelector} from 'react-redux';
import { setData, setKhoaHoc } from '../../../redux/adminSlice';
import Search from 'antd/es/input/Search';
import AddKhoaHoc from './Action/AddKhoaHoc';
import EditKhoaHoc from './Action/EditKhoaHoc';
import GhiDanhKH from './Action/GhiDanhKH';


export default function TableKhoaHoc() {
    const [listKhoaHoc, setListKhoaHoc] = useState([]);
    let fetchListKhoaHoc = () => { 
          clientApi.layDanhSachKhoaHoc()
          .then((res) => {
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
                    message.error(err.response.data)
                    console.log(err);
                    });
            }
          });
    }
    const dispatch = useDispatch();
    let handleEditKhoaHoc = (khoaHoc) => { 
      setHandleType("edit")
      dispatch(setKhoaHoc(khoaHoc))
      showModal()
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
     const [isModalOpen, setIsModalOpen] = useState(false);
     const [handleType, setHandleType] = useState();

     const showModal = () => {
       setIsModalOpen(true);
     };
     const handleOk = () => {
      setIsModalOpen(false);
    };
  
    const handleCancel = () => {
      setIsModalOpen(false);
      fetchListKhoaHoc()
    };

    const closeModal = () => {
      setIsModalOpen(false);
    };
    let handleAdd = () => { 
      setHandleType("add")
      showModal()
     }
     let handleGhiDanh = (khoaHoc) => {
      console.log(khoaHoc);
      dispatch(setKhoaHoc(khoaHoc))
      setHandleType("ghiDanh")
      showModal()
     }
     const khoaHocData = useSelector((state) => state.adminSlice.khoaHoc)
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
        title: 'Lượt xem',
        dataIndex: 'luotXem',
        key: 'luotXem',
      },
      {
        title: 'Hình ảnh',
        dataIndex: 'hinhAnh',
        key: 'hinhAnh',
        render: (_,khoaHoc) => { 
            return <img className='h-40 w-80 object-fill mx-auto block' src={khoaHoc.hinhAnh}/>
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
            return <>
            <Button onClick={() => {handleGhiDanh(khoaHoc)}} className='bg-green-500 text-white'>Ghi danh</Button>
            <Button onClick={() => { handleEditKhoaHoc(khoaHoc) }} className='bg-yellow-500 text-white'>Edit</Button>
            <Button onClick={() => { handleDeleteKhoaHoc(khoaHoc.maKhoaHoc) }} className='bg-red-600 text-white'>Delete</Button>
            </>
         }
      },
]
  return (
    <div>
        <Button className='bg-blue-500 text-lg' size="large" type="primary" onClick={handleAdd}>
        Thêm khóa học
      </Button>
        <Search className='mt-5 bg-blue-500 rounded-md' placeholder="Nhập tên khóa học" onSearch={onSearch} enterButton/>
        <Table dataSource={listKhoaHoc} columns={columnsHeader} />
        <Modal
        width= {handleType=="ghiDanh"?1000:600}
        title={handleType=="ghiDanh"?<div className='text-lg mb-2'>Thông tin học viên của khóa {khoaHocData.tenKhoaHoc}</div>:<div className='text-lg mb-2'>Thông tin khóa học</div>}
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}>
        {handleType=="add"&& <AddKhoaHoc closeModal={closeModal}/>}
        {handleType=="edit"&& <EditKhoaHoc closeModal={closeModal}/>}
        {handleType=="ghiDanh"&& <GhiDanhKH/>}
      </Modal>
    </div>
  )
}

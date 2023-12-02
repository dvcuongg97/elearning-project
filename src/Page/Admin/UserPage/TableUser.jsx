import React, { useEffect, useState } from 'react'
import { Button, Modal, Table, Tag, message } from 'antd';
import { adminApi } from '../../../api/api';
import Swal from 'sweetalert2';
import {useDispatch, useSelector} from 'react-redux';
import { setData } from '../../../redux/adminSlice';
import Search from 'antd/es/input/Search';
import AddUser from './Action/AddUser';
import EditUser from './Action/EditUser';
import GhiDanhHV from './Action/GhiDanhHV';

export default function TableUser() {
    const [listUser, setListUser] = useState([]);
    let fetchListUser = () => { 
          adminApi.layDSNguoiDung_Admin()
          .then((res) => {
                  console.log(res);
                  setListUser(res.data)
                })
          .catch((err) => {
                console.log(err);
                });
     }
    useEffect(() => {
       fetchListUser()
    }, []);
    let handleDelete = (taiKhoan) => { 
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
                adminApi.xoaNguoiDung_Admin(taiKhoan)
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
     const onSearch = (value, _e, info) => {
      console.log(value);
      adminApi.timKiemNguoiDung_Admin(value)
      .then((res) => {
              console.log(res);
              setListUser(res.data)
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
    };

    const closeModal = () => {
      setIsModalOpen(false);
    };
    let handleAdd = () => { 
      setHandleType("add")
      showModal()
     }
    let handleEdit = (user) => {
      setHandleType("edit")
      dispatch(setData(user))
      showModal()
     }
    let handleGhiDanh = (user) => {
      console.log(user);
      dispatch(setData(user))
      setHandleType("ghiDanh")
      showModal()
     }
     const userData = useSelector((state) => state.adminSlice.nguoiDung)
let columnsHeader = [
      {
        title: 'Tài khoản',
        dataIndex: 'taiKhoan',
        key: 'taiKhoan',
      },
      {
        title: 'Họ tên',
        dataIndex: 'hoTen',
        key: 'hoTen',
      },
      {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
      },
      {
        title: 'Số ĐT',
        dataIndex: 'soDt',
        key: 'soDt',
      },
      {
        title: 'Type',
        dataIndex: 'maLoaiNguoiDung',
        key: 'maLoaiNguoiDung',
        render: (text) => {
            if (text=="HV") {
                return <Tag color="green" >Học viên</Tag>
            } else {
                return <Tag color="red" >Giáo vụ</Tag>
            }
        }
      },
      {
        title: 'Action',
        render: (_,user) => { 
            return <>
            <Button onClick={() => {handleGhiDanh(user)}} className='bg-green-500 text-white'>Ghi danh</Button>
            <Button onClick={() => {handleEdit(user)}}className='bg-yellow-500 text-white'>Sửa</Button>
            <Button onClick={() => {handleDelete(user.taiKhoan)}} className='bg-red-600 text-white'>Xóa</Button>
            </>
         }
      },
]
  return (
    <div>
       <Button type="primary" onClick={handleAdd}>
        Thêm người dùng
      </Button>
        <Search placeholder="Nhập tên người dùng" onSearch={onSearch} enterButton/>
        <Table dataSource={listUser} columns={columnsHeader} />
      <Modal
        title={handleType=="ghiDanh"?`Thông tin khóa học của ${userData.hoTen}`:"Thông tin học viên"}
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        {handleType=="add"&& <AddUser closeModal={closeModal}/>}
        {handleType=="edit"&& <EditUser closeModal={closeModal}/>}
        {handleType=="ghiDanh"&& <GhiDanhHV/>}
      </Modal>
    </div>
  )
}

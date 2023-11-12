import React, { useEffect, useState } from 'react'
import { Button, Table, Tag, message } from 'antd';
import { clientApi } from '../../../api/api';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
import { setData } from '../../../redux/adminSlice';
import { NavLink } from 'react-router-dom';
import Search from 'antd/es/input/Search';


export default function TableUser() {
    const [listUser, setListUser] = useState([]);
    let fetchListUser = () => { 
          clientApi.layDSNguoiDung_Admin()
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
                clientApi.xoaNguoiDung_Admin(taiKhoan)
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
    let handleEdit = (user) => { 
      dispatch(setData(user))
     }
     const onSearch = (value, _e, info) => {
      console.log(value);
      clientApi.timKiemNguoiDung_Admin(value)
      .then((res) => {
              console.log(res);
              setListUser(res.data)
            })
      .catch((err) => {
             console.log(err);
            });
     }
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
            // console.log(user);
            return <>
            <NavLink to={"/admin/user/edit"}><Button onClick={() => {handleEdit(user)}}className='bg-yellow-500 text-white'>Edit</Button></NavLink>
            <Button onClick={() => {handleDelete(user.taiKhoan)}} className='bg-red-600 text-white'>Delete</Button>
            </>
         }
      },
]
  return (
    <div>
        <Search placeholder="Nhập tên người dùng" onSearch={onSearch} enterButton/>
        {/* {isLoanding && <Spiner/>} */}
        <Table dataSource={listUser} columns={columnsHeader} />;
    </div>
  )
}

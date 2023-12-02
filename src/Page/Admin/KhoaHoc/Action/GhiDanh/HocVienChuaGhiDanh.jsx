import React from 'react'
import {Select, Button, Form, message} from 'antd';
import {Option} from 'antd/es/mentions';
import {useEffect, useState} from 'react';
import {adminApi, adminGhiDanh} from '../../../../../api/api';
import {useSelector} from 'react-redux';

const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 8,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 16,
      },
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };

export default function HocVienChuaGhiDanh() {
    const khoaHocData = useSelector((state) => state.adminSlice.khoaHoc)
    const [danhSachHocVien, setDanhSachHocVien] = useState([]);
    useEffect(() => {
        adminGhiDanh.nguoiDungChuaGhiDanh(khoaHocData)
        .then((res) => {
            console.log(res.data);
            setDanhSachHocVien(res.data.map((item) => { 
                    return {
                        value: item.taiKhoan,
                        label: item.hoTen,
                    } }))
              })
        .catch((err) => {
               console.log(err);
              });
    }, []);
   const [form] = Form.useForm();
    const onFinish = (values) => {
        console.log(values);
        let dangky = {
            maKhoaHoc: khoaHocData.maKhoaHoc,
            taiKhoan: values.taiKhoan
          }
          console.log(dangky);
          adminGhiDanh.ghiDanhKhoaHoc(dangky)
          .then((res) => {
                  console.log(res);
                  message.success("Ghi danh thành công")
                })
          .catch((err) => {
                 console.log(err);
                });
      };
  return (
    <div>
         <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      style={{
        maxWidth: 600,
      }}
      scrollToFirstError>
      <Form.Item
      name="taiKhoan"
      label="Chọn học viên">
            <Select
                showSearch
                style={{
                width: 200,
                }}
                placeholder="Search to Select"
                optionFilterProp="children"
                filterOption={(input, option) => (option?.label ?? '').includes(input)}
                filterSort={(optionA, optionB) =>
                        (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                        }
                        options={danhSachHocVien}/>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary bg-blue-500" htmlType="submit">
          Ghi danh
        </Button>
      </Form.Item>
    </Form>
    </div>
  )
}

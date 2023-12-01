import React, { useEffect, useState } from 'react';
import {Select, Space, Button, DatePicker, Form, Input, InputNumber, message, Table} from 'antd';
import { adminGhiDanh, clientApi } from '../../../api/api';
import { Option } from 'antd/es/mentions';

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

  const columns = [
    {
      title: 'Tài khoản',
      dataIndex: 'taiKhoan',
      key: 'taiKhoan',
    },
    {
      title: 'Mật khẩu',
      dataIndex: 'matKhau',
      key: 'matKhau',
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
        <Button>Ghi danh</Button>
        <Button>Hủy ghi danh</Button>
        </>
      }
    },
  ];
export default function GhiDanhDvKhoaHoc() {

    const [danhSachKhoaHoc, setDanhSachKhoaHoc] = useState([]);
    useEffect(() => {
        clientApi.layDanhSachKhoaHoc()
        .then((res) => {
                setDanhSachKhoaHoc(res.data.map((item) => { 
                    return {
                        value: item.maKhoaHoc,
                        label: item.tenKhoaHoc,
                    } }))
              })
        .catch((err) => {
               console.log(err);
              });
    }, []);

    const [danhSachHV, setDanhSachHV] = useState([])
    const [form] = Form.useForm();
    const onFinish = (fieldsValue) => {
        console.log(fieldsValue);
        if (fieldsValue.maNhom == "chuaGhiDanh") {
          adminGhiDanh.nguoiDungChuaGhiDanh(fieldsValue)
          .then((res) => {
                  console.log(res);
                  setDanhSachHV(res.data)
                })
          .catch((err) => {
                 console.log(err);
                });
        } else if (fieldsValue.maNhom == "daGhiDanh") {
          adminGhiDanh.hocVienDaGhiDanh(fieldsValue)
          .then((res) => {
                  console.log(res);
                  setDanhSachHV(res.data)
                })
          .catch((err) => {
                 console.log(err);
                });
        } else if (fieldsValue.maNhom == "choXetDuyet") {
          adminGhiDanh.hocVienChoXetDuyet(fieldsValue)
          .then((res) => {
                  console.log(res);
                  setDanhSachHV(res.data)
                })
          .catch((err) => {
                 console.log(err);
                });
        }
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
      name="maKhoaHoc"
      label="Chọn khóa học">
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
                        options={danhSachKhoaHoc}/>
      </Form.Item>
      <Form.Item
        name="maNhom"
        label="Nhóm">
        <Select placeholder="Chọn nhóm">
          <Option value="chuaGhiDanh">Người dùng chưa ghi danh</Option>
          <Option value="daGhiDanh">Người dùng đã ghi danh</Option>
          <Option value="choXetDuyet">Người dùng chờ xét duyệt</Option>
        </Select>
      </Form.Item>

      <Form.Item {...tailFormItemLayout}>
        <Button type="primary bg-blue-500" htmlType="submit">
          Lọc
        </Button>
      </Form.Item>
    </Form>
      <Table dataSource={danhSachHV} columns={columns} />;
    </div>
  )
}

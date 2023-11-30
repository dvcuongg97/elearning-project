import React, { useEffect, useState } from 'react';
import {Select, Space, Button, DatePicker, Form, Input, InputNumber, message, Table} from 'antd';
import {adminGhiDanh, clientApi, adminApi} from '../../../api/api';
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
        <Button>Ghi danh</Button>
        <Button>Hủy ghi danh</Button>
        </>
      }
    },
  ];
export default function GhiDanhDvNguoiDung() {

    const [danhSachNguoiDung, setDanhSachNguoiDung] = useState([]);
    useEffect(() => {
        adminApi.layDSNguoiDung_Admin()
        .then((res) => {
                setDanhSachNguoiDung(res.data.map((item) => { 
                    return {
                        value: item.taiKhoan,
                        label: item.taiKhoan,
                    } }))
              })
        .catch((err) => {
               console.log(err);
              });
    }, []);

    const [danhSachHV, setDanhSachHV] = useState([])
    const [form] = Form.useForm();
    const onFinish = ({taiKhoan,maNhom}) => {
        console.log(taiKhoan,maNhom);
        if (maNhom == "chuaGhiDanh") {
          adminGhiDanh.khoaHocChuaGhiDanh(taiKhoan)
          .then((res) => {
                  console.log(res);
                  setDanhSachHV(res.data)
                })
          .catch((err) => {
                 console.log(err);
                });
        } else if (maNhom == "daGhiDanh") {
          adminGhiDanh.khoaHocDaGhiDanh(taiKhoan)
          .then((res) => {
                  console.log(res);
                  setDanhSachHV(res.data)
                })
          .catch((err) => {
                 console.log(err);
                });
        } else if (maNhom == "choXetDuyet") {
          adminGhiDanh.khoaHocChoXetDuyet(taiKhoan)
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
      name="taiKhoan"
      label="Tài khoản học viên">
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
                        options={danhSachNguoiDung}/>
      </Form.Item>
      <Form.Item
        name="maNhom"
        label="Nhóm">
        <Select placeholder="Chọn nhóm">
          <Option value="chuaGhiDanh">Khóa học chưa ghi danh</Option>
          <Option value="daGhiDanh">Khóa học đã ghi danh</Option>
          <Option value="choXetDuyet">Khóa học chờ xét duyệt</Option>
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

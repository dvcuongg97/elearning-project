import React from 'react'
import {useSelector} from 'react-redux';
import {Select, Button, Form, Table, message} from 'antd';
import {Option} from 'antd/es/mentions';
import {adminGhiDanh, clientApi} from '../../../../../api/api';
import {useEffect, useState} from 'react';

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

export default function KhoaHocChuaGhiDanh() {
    const userData = useSelector((state) => state.adminSlice.nguoiDung)
    const [form] = Form.useForm();
    const [danhSachKhoaHoc, setDanhSachKhoaHoc] = useState([]);
    useEffect(() => {
        adminGhiDanh.khoaHocChuaGhiDanh(userData.taiKhoan)
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
    const onFinish = (value) => {
        console.log(value);
        let dangky = {
          maKhoaHoc: value.maKhoaHoc,
          taiKhoan: userData.taiKhoan
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
      name="maKhoaHoc"
      label={<div className='text-lg font-semibold'>Chọn khóa học</div>}>
            <Select
                showSearch
                style={{
                width: 200,
                }}
                placeholder="Nhập để tìm"
                optionFilterProp="children"
                filterOption={(input, option) => (option?.label ?? '').includes(input)}
                filterSort={(optionA, optionB) =>
                        (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                        }
                        options={danhSachKhoaHoc}/>
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

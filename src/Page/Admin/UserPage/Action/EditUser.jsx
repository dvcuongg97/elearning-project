import React, { useEffect, useState } from 'react';
import {
  Button,
  Form,
  Input,
  Radio,
  Select,
  message,
} from 'antd';
import { useSelector } from 'react-redux';
import { adminApi, clientApi } from '../../../../api/api';
import axios from 'axios';
import { TOKEN_CYBERSOFT } from '../../../../api/configApi';
import { userLocalStorage } from '../../../../api/localService';
const { Option } = Select;

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

const EditUser = (props) => {
  const { closeModal } = props;
  const userData = useSelector((state) => state.adminSlice.nguoiDung)
  const [form] = Form.useForm();
  const onFinish = (values) => {
    axios.put('https://elearningnew.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung',values, 
    {  headers: {
      TokenCybersoft: TOKEN_CYBERSOFT,
      Authorization: "Bearer " + userLocalStorage.get()?.accessToken,
    },}
    )
    .then((res) => {
            message.success("Sửa thành công")
            closeModal()
          })
    .catch((err) => {
           console.log(err);
          });
  };
  const [formKey, setFormKey] = useState(0);
  useEffect(() => {
    console.log("userData changed:", userData);
    setFormKey((prevKey) => prevKey + 1);
  }, [userData]);
  return (
    <Form
       initialValues={userData}
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      style={{
        maxWidth: 600,
      }}
      scrollToFirstError
    >
      <Form.Item
        name="taiKhoan"
        label="Tài khoản"
        rules={[
          {
            required: true,
            message: 'Vui lòng nhập tài khoản',
            whitespace: true,
          },
        ]}
      >
        <Input disabled/>
      </Form.Item>

      <Form.Item
        name="matKhau"
        label="Mật khẩu"
        rules={[
          {
            required: true,
            message: 'Vui lòng nhập mật khẩu',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="hoTen"
        label="Họ Tên"
        rules={[
          {
            required: true,
            message: 'Vui lòng nhập tên người dùng',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      
      <Form.Item
        name="soDt"
        label="Số điện thoại"
        rules={[
          {
            required: true,
            message: 'Vui lòng nhập số điện thoại',
          },
        ]}
      >
        <Input/>
      </Form.Item>

      <Form.Item name="maLoaiNguoiDung" label="Loại người dùng">
      <Radio.Group>
        <Radio value="HV">Học viên</Radio>
        <Radio value="GV">Giáo vụ</Radio>
      </Radio.Group>
    </Form.Item>

      <Form.Item
        name="maNhom"
        label="Mã nhóm"
        rules={[
          {
            required: true,
            message: 'Vui lòng chọn mã nhóm',
          },
        ]}
      >
        <Select placeholder="Chọn nhóm">
          <Option value="GP01">GP01</Option>
          <Option value="GP02">GP02</Option>
          <Option value="GP03">GP03</Option>
          <Option value="GP04">GP04</Option>
          <Option value="GP05">GP05</Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item {...tailFormItemLayout}>
        <Button type="primary bg-blue-500" htmlType="submit">
          Cập nhật người dùng
        </Button>
      </Form.Item>
    </Form>
  );
};
export default EditUser;
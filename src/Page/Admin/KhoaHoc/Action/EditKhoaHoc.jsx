import React, { useEffect, useState } from 'react';
import { InboxOutlined, UploadOutlined } from '@ant-design/icons';
import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Upload,
  message,
} from 'antd';
import { adminApi, clientApi } from '../../../../api/api';
import {useSelector} from 'react-redux';
import moment from 'moment/moment';
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

const normFile = (e) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };
const config = {
    rules: [
      {
        type: 'object',
        required: false,
        message: 'Please select time!',
      },
    ],
  };


const EditKhoaHoc = () => {

const [danhMucKhoaHoc, setDanhMucKhoaHoc] = useState([]);
    useEffect(() => {
        clientApi.layDanhMucKhoaHoc()
        .then((res) => {
                setDanhMucKhoaHoc(res.data.map((item) => { 
                    return {
                        value: item.maDanhMuc,
                        label: item.tenDanhMuc,
                    } }))
              })
        .catch((err) => {
               console.log(err);
              });
    }, []);
    
const [danhSachNguoiDung, setDanhSachNguoiDung] = useState([]);
    useEffect(() => {
        adminApi.layDSNguoiDung_Admin()
        .then((res) => {
                setDanhSachNguoiDung(res.data.map((item) => { 
                     if (item.maLoaiNguoiDung == 'GV') {
                        return {
                            value: item.taiKhoan,
                            label: item.hoTen,
                        }
                     }
                 }))
              })
        .catch((err) => {
               console.log(err);
              });
    }, []);

let danhSachGV = danhSachNguoiDung.filter((item) => item !== undefined)

const khoaHocData = useSelector((state) => state.adminSlice.khoaHoc)
console.log(khoaHocData);
  const [form] = Form.useForm();
  const onFinish = (fieldsValue) => {
    const values = {
        ...fieldsValue,
        'ngayTao': fieldsValue['ngayTao'].format('DD/MM/YYYY')
    }
    adminApi.themKhoaHoc_Admin(values)
    .then((res) => {
            console.log(res);
          })
    .catch((err) => {
           console.log(err);
          });
    console.log('Received values of form: ', values);
  };
  return (
    <Form
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
        name="maKhoaHoc"
        label="Mã khóa học"
        rules={[
          {
            required: false,
            message: 'Vui lòng nhập mã khóa học',
            whitespace: true,
          },
        ]}
      >
        <Input disabled defaultValue={khoaHocData!=null?khoaHocData.maKhoaHoc:""}/>
      </Form.Item>

      <Form.Item
        name="biDanh"
        label="Bí danh"
        rules={[
          {
            required: false,
            message: 'Vui lòng nhập bí danh',
          },
        ]}
      >
        <Input defaultValue={khoaHocData!=null?khoaHocData.biDanh:""}/>
      </Form.Item>

      <Form.Item
        name="tenKhoaHoc"
        label="Tên khóa học"
        rules={[
          {
            required: false,
            message: 'Vui lòng nhập tên khóa học',
            whitespace: true,
          },
        ]}
      >
        <Input defaultValue={khoaHocData!=null?khoaHocData.tenKhoaHoc:""}/>
      </Form.Item>
      
      <Form.Item
        name="moTa"
        label="Mô tả"
        rules={[
          {
            required: false,
            message: 'Vui lòng nhập mô tả',
            whitespace: true,
          },
        ]}
      >
        <Input defaultValue={khoaHocData!=null?khoaHocData.moTa:""}/>
      </Form.Item>

      <Form.Item
        name="luotXem"
        label="Lượt xem"
      >
        <InputNumber defaultValue={khoaHocData!=null?khoaHocData.luotXem:""}/>
      </Form.Item>

      <Form.Item
        name="danhGia"
        label="Đánh giá"
      >
        <InputNumber defaultValue={khoaHocData!=null?khoaHocData.danhGia:""}/>
      </Form.Item>

      <Form.Item
        name="hinhAnh"
        label="Hình ảnh"
        rules={[
          {
            required: false,
            message: 'Vui lòng nhập hình ảnh',
            whitespace: true,
          },
        ]}
      >
        <Input defaultValue={khoaHocData!=null?khoaHocData.hinhAnh:""}/>
      </Form.Item>

      <Form.Item
        name="maNhom"
        label="Mã nhóm"
        rules={[
          {
            required: false,
            message: 'Vui lòng chọn mã nhóm',
          },
        ]}
      >
        <Select placeholder="Chọn nhóm" defaultValue={khoaHocData!=null?khoaHocData.maNhom.toUpperCase():""}>
          <Option value="GP01">GP01</Option>
          <Option value="GP02">GP02</Option>
          <Option value="GP03">GP03</Option>
          <Option value="GP04">GP04</Option>
          <Option value="GP05">GP05</Option>
        </Select>
      </Form.Item>

      <Form.Item shouldUpdate name="ngayTao" label="Ngày tạo" {...config}>
      <DatePicker format="DD/MM/YYYY" />
      </Form.Item>

      <Form.Item
      name="maDanhMucKhoaHoc"
      label="Danh mục"
      hasFeedback
      rules={[
        {
          required: false,
          message: 'Please select your country!',
        },
      ]}
    >
            <Select
                defaultValue={khoaHocData!=null?khoaHocData.danhMucKhoaHoc.maDanhMucKhoahoc:""}
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
                        options={danhMucKhoaHoc}
  />
      </Form.Item>

      <Form.Item
      name="taiKhoanNguoiTao"
      label="Tài khoản người tạo"
      hasFeedback
      rules={[
        {
          required: false,
          message: 'Please select your country!',
        },
      ]}
    >
            <Select
                defaultValue={khoaHocData!=null?khoaHocData.nguoiTao.taiKhoan:""}
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
                        options={danhSachGV}
  />
      </Form.Item>

      <Form.Item {...tailFormItemLayout}>
        <Button type="primary bg-blue-500" htmlType="submit">
          Cập nhật khóa học
        </Button>
      </Form.Item>
    </Form>
  );
};
export default EditKhoaHoc;
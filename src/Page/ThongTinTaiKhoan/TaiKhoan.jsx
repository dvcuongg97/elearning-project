import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Modal, Progress, message } from "antd";
import { userProfileApi } from "../../api/api";
import { useSelector } from "react-redux";
import { userLocalStorage } from "../../api/localService";

export default function TaiKhoan() {
  const { userLogin } = useSelector((state) => state.userProfileSlice);
  // const userLogin = localStorage.get();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const formik = useFormik({
    initialValues: {
      taiKhoan: userLogin?.taiKhoan,
      matKhau: "",
      hoTen: "",
      email: "",
      soDT: "",
      maLoaiNguoiDung: userLogin.maLoaiNguoiDung,
      maNhom: "GP01",
    },
    validationSchema: Yup.object().shape({
      // taiKhoan: Yup.string()
      //   .min(2, "Tài khoản quá ít kí tự")
      //   .max(16, "Tài khoản quá 16 kí tự")
      //   .required("Tài khoản không được để trống"),

      matKhau: Yup.string()
        .required("Tài khoản không được để trống")
        .matches(
          /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
          "Mật khẩu phải ít nhất 8 tự gồm chữ, số, và kí tự đặc biệt"
        ),

      hoTen: Yup.string()
        .required("Tên không được để trống")
        .matches(
          /^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/,
          "Chỉ nhập kí tự chữ"
        ),

      email: Yup.string()
        .email("Email không hợp lệ")
        .required("Email không được để trống"),

      soDT: Yup.string()
        .required("Số điện thoại không được để trống")
        .matches(
          /([+84|84|0]+(3|5|7|8|9|1[2|6|8|9]))+([0-9]{8})\b/,
          "Số điện thoại chưa đúng định đạng"
        ),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const res = await userProfileApi.capNhatThongTinTaiKhoan(values);
        if (res.status === 200) {
          message.success("Cập nhật thành công");
          userLocalStorage.set(res.data);
          window.location.reload();
          resetForm();
        }
      } catch (error) {
        message.error(error.response.data);
      }
    },
  });

  return (
    <>
      <div className="md:grid grid-cols-2 mb-12">
        <div className="col-span-1 space-y-1 text-lg">
          <p className="font-medium">
            Email:{" "}
            <span className="text-gray-400 font-normal ml-2">
              {userLogin.email}
            </span>
          </p>
          <p className="font-medium">
            Họ và tên:
            <span className="text-gray-400 font-normal ml-2">
              {userLogin.hoTen}
            </span>
          </p>
          <p className="font-medium">
            Số điện thoại:{" "}
            <span className="text-gray-400 font-normal ml-2">
              {userLogin.soDT}
            </span>
          </p>
        </div>
        <div className="col-span-1 space-y-1 text-lg">
          <p className="font-medium">
            Tài khoản:{" "}
            <span className="text-gray-400 font-normal ml-2">
              {userLogin.taiKhoan}
            </span>
          </p>
          <p className="font-medium">
            Nhóm:{" "}
            <span className="text-gray-400 font-normal ml-2">
              {userLogin.maNhom}
            </span>
          </p>
          <p className="font-medium">
            Đối tượng:{" "}
            <span className="text-gray-400 font-normal ml-2">
              {userLogin.maLoaiNguoiDung === "HV" ? "Học viên" : "Admin"}
            </span>
          </p>
          <button
            className="px-4 py-1 font-medium hover:text-white bg-blue-400 hover:bg-blue-400 mt-6"
            onClick={showModal}
          >
            Cập nhật
          </button>
        </div>
      </div>
      <div className="userProgress md:block hidden">
        <Progress
          size={[600, 20]}
          percent={99.9}
          format={(percent) => (
            <span className="text-green-500 font-medium text-lg">
              {percent}% HTML
            </span>
          )}
          status="active"
          strokeColor={{
            "0%": "#87d068",
            "50%": "#ffe58f",
            "100%": "#ffccc7",
          }}
        />
        <Progress
          size={[600, 20]}
          percent={99.9}
          format={(percent) => (
            <span className="text-green-500 font-medium text-lg">
              {percent}% CSS
            </span>
          )}
          status="active"
          strokeColor={{ "0%": "#108ee9", "100%": "#87d068" }}
        />
        <Progress
          size={[600, 20]}
          percent={99.9}
          format={(percent) => (
            <span className="text-green-500 font-medium text-lg">
              {percent}% JavaScript
            </span>
          )}
          status="active"
          strokeColor={{ from: "#108ee9", to: "#87d068" }}
        />
        <Progress
          size={[600, 20]}
          percent={99.9}
          format={(percent) => (
            <span className="text-green-500 font-medium text-lg">
              {percent}% React JS
            </span>
          )}
          status="active"
          strokeColor={{
            "0%": "#87d068",
            "50%": "#ffe58f",
            "100%": "#ffccc7",
          }}
        />
      </div>

      {/* modal cap nhat thong tin tai khoan */}
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <form action="#" onSubmit={formik.handleSubmit}>
          {" "}
          <h6>Họ và tên</h6>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2 w-full"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            type="text"
            placeholder="Họ tên"
            name="hoTen"
            value={formik.values.hoTen}
          />
          {formik.errors.hoTen && formik.touched.hoTen ? (
            <div className="errorMessage">{formik.errors.hoTen}</div>
          ) : (
            <div className="message"></div>
          )}
          <h6>Mật khẩu</h6>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2 w-full"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            type="password"
            placeholder="Mật khẩu"
            name="matKhau"
            value={formik.values.matKhau}
          />
          {formik.errors.matKhau && formik.touched.matKhau ? (
            <div className="errorMessage">{formik.errors.matKhau}</div>
          ) : (
            <div className="message"></div>
          )}
          <h6>Email</h6>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2 w-full"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            type="email"
            placeholder="Email"
            name="email"
            value={formik.values.email}
          />
          {formik.errors.email && formik.touched.email ? (
            <div className="errorMessage">{formik.errors.email}</div>
          ) : (
            <div className="message"></div>
          )}
          <h6>Số điện thoại</h6>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2 w-full"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            type="phone"
            placeholder="Số điện thoại"
            name="soDT"
            value={formik.values.soDT}
          />
          {formik.errors.soDT && formik.touched.soDT ? (
            <div className="errorMessage">{formik.errors.soDT}</div>
          ) : (
            <div className="message"></div>
          )}
          <div className="modal-footer">
            <button
              type="submit"
              className="bg-slate-500 hover:bg-slate-400 p-2 px-1 rounded-lg font-medium"
            >
              Hoàn thành
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
}

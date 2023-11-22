import React, { useEffect } from "react";
import "../../asset/css/ThongTinTaiKhoan/ThongTinTaiKhoan.scss";

import { Tabs } from "antd";
import { useDispatch, useSelector } from "react-redux";
import TaiKhoan from "./TaiKhoan";
import KhoaHoc from "./KhoaHoc";
import { layThongTinTaiKhoanAction } from "../../redux/userProfileSlice";

export default function ThongTinTaiKhoan() {
  // window.location.reload();

  const { userLogin } = useSelector((state) => state.userProfileSlice);
  const onChange = (key) => {
    // console.log(key);
  };
  const tabsContent = [
    {
      key: "1",
      label: (
        <span className=" text-center md:text-lg font-medium">
          Thông tin tài khoản
        </span>
      ),
      children: <TaiKhoan />,
    },
    {
      key: "2",
      label: (
        <span className="text-center md:text-lg font-medium">
          Danh Sách Khóa Học
        </span>
      ),
      children: <KhoaHoc />,
    },
  ];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(layThongTinTaiKhoanAction());
    // window.location.reload();
  }, []);

  return (
    <>
      <section className="infoPage">
        <div className="p-12 bg-yellow-400">
          <p className="text-white font-medium text-3xl">THÔNG TIN CÁ NHÂN</p>
          <p className="text-white">THÔNG TIN HỌC VIÊN</p>
        </div>
        <div className="infoPageContainer">
          <div className="leftInfoPage">
            <div className="infoUserSection">
              <img
                alt=".."
                src={`https://i.pravatar.cc/150?u=${userLogin?.taiKhoan}`}
              />
              <p className="text-lg font-medium">{userLogin?.hoTen}</p>
              <p>Lập trình viên Front-End</p>
              <div className="px-6 py-3 bg-blue-400">Hồ sơ cá nhân</div>
            </div>
          </div>
          <div className="rightInfoPage">
            <Tabs
              className="mx-auto"
              defaultActiveKey="1"
              items={tabsContent}
              onChange={onChange}
            />
          </div>
        </div>
      </section>
    </>
  );
}

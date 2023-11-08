import React, { Fragment, useEffect } from "react";
import { clientProfileApi } from "../../api/api";
import { HuyGhiDanhKhoaHoc } from "../../api/modal/clientAction";
import { message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { layThongTinTaiKhoanAction } from "../../redux/clientProfileSlice";

export default function KhoaHoc() {
  const { clientDetail } = useSelector((state) => state.clientProfileSlice);
  console.log("clientDetail", clientDetail);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(layThongTinTaiKhoanAction());
  }, []);

  const handleHuyKhoaHoc = (khoaHoc) => {
    let huyGhiDanh = new HuyGhiDanhKhoaHoc();
    huyGhiDanh.taiKhoan = clientDetail.taiKhoan;
    huyGhiDanh.maKhoaHoc = khoaHoc.maKhoaHoc;
    clientProfileApi
      .huyGhiDanh(huyGhiDanh)
      .then((res) => {
        message.success("Hủy khóa học thành công");
        setTimeout(() => {
          window.location.reload();
        }, 500);
      })
      .catch((err) => {
        message.error(err.response.data);
      });
  };

  return (
    <>
      {clientDetail.chiTietKhoaHocGhiDanh?.map((khoaHoc, index) => {
        return (
          <Fragment key={index}>
            <div className="grid grid-cols-5 gap-3 mb-3 pb-3 border-b-2">
              <div className="col-span-1">
                <img
                  className="imgNet h-full"
                  src={khoaHoc.hinhAnh}
                  alt="..."
                />
              </div>
              <div className="col-span-3 space-y-2 flex-col justify-start">
                <h6>{khoaHoc.tenKhoaHoc}</h6>
                <p className="colorCardTitle">
                  ES6 là một chuẩn Javascript mới được đưa ra vào năm 2015 với
                  nhiều quy tắc và cách sử dụng khác nhau...
                </p>
                <div>
                  <span>
                    <i className="far fa-clock iconOclock text-green-500 ml-2" />{" "}
                    8 giờ
                  </span>
                  <span className="ml-3">
                    <i className="far fa-calendar iconCalendar text-green-500" />{" "}
                    23 giờ
                  </span>
                  <span className="ml-3">
                    <i className="fas fa-signal iconLevel text-green-500" /> All
                    level
                  </span>
                </div>

                <span className="text-center text-yellow-400">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </span>
                <div className="flex items-center">
                  <img
                    className="w-12 h-12 rounded-full"
                    src="https://cdn.dribbble.com/users/2364329/screenshots/6676961/02.jpg?compress=1&resize=800x600"
                    alt="..."
                  />
                  <span className="ml-2">Nguyễn Nam</span>
                </div>
              </div>
              <div className="col-span-1 flex items-end justify-start">
                <button
                  onClick={() => handleHuyKhoaHoc(khoaHoc)}
                  className="btnGlobal"
                >
                  Hủy khóa học
                </button>
              </div>
            </div>
          </Fragment>
        );
      })}
    </>
  );
}

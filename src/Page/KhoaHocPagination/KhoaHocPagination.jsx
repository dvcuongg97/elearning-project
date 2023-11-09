import React, { useEffect, useState } from "react";
import { Pagination } from "antd";
import { clientApi } from "../../api/api";
import { renderCard } from "../renderCard/renderCard";

export default function KhoaHocPagination() {
  let [khoaHocPhanTrang, setKhoaHocPhanTrang] = useState({});
  let [page, setPage] = useState(1);
  useEffect(() => {
    async function layDSKH_PhanTrangAction() {
      try {
        const res = await clientApi.layDSKH_PhanTrang(page);
        if (res.status === 200) {
          setKhoaHocPhanTrang(res.data);
        }
      } catch (error) {
        console.log("error:", error.message);
      }
    }
    layDSKH_PhanTrangAction();
  }, [page]);
  return (
    <section className="coursePagination">
      <div className="p-12 text-white bg-yellow-400 uppercase">
        <p className="text-3xl font-semibold">KHÓA HỌC</p>
        <p className="text-lg font-medium"> BẮT ĐẦU HÀNH TRÌNH NÀO!!!</p>
      </div>
      <div className="p-12">
        <div className="hidden md:grid grid-cols-6 w-full">
          <div
            style={{ backgroundColor: "#264653" }}
            className="px-5 py-7 flex flex-col justify-center items-center"
          >
            <p className="font-medium text-white pb-3">CHƯƠNG TRÌNH HỌC</p>
            <i className="text-white text-3xl pb-3 fas fa-laptop"></i>
            <p className="text-white text-xl">300</p>
          </div>
          <div
            style={{ backgroundColor: "#2a9d8f" }}
            className="px-5 py-7 flex flex-col justify-center items-center"
          >
            <p className="font-medium text-white pb-3">NHÀ SÁNG TẠO</p>
            <i className="text-white text-3xl pb-3 fas fa-camera"></i>
            <p className="text-white text-xl">10000</p>
          </div>
          <div
            style={{ backgroundColor: "#e9c46a" }}
            className="px-5 py-7 flex flex-col justify-center items-center"
          >
            <p className="font-medium text-white pb-3">NHÀ THIẾT KẾ</p>
            <i className="text-white text-3xl pb-3 fas fa-briefcase"></i>
            <p className="text-white text-xl">400</p>
          </div>
          <div
            style={{ backgroundColor: "#f4a261" }}
            className="px-5 py-7 flex flex-col justify-center items-center"
          >
            <p className="font-medium text-white pb-3">BÀI GIẢNG</p>
            <i className="text-white text-3xl pb-3 fas fa-book"></i>
            <p className="text-white text-xl">3000</p>
          </div>
          <div
            style={{ backgroundColor: "#ee8959" }}
            className="px-5 py-7 flex flex-col justify-center items-center"
          >
            <p className="font-medium text-white pb-3">VIDEO</p>
            <i className="text-white text-3xl pb-3 fas fa-play-circle"></i>
            <p className="text-white text-xl">40000</p>
          </div>
          <div
            style={{ backgroundColor: "#e76f51" }}
            className="px-5 py-7 flex flex-col justify-center items-center"
          >
            <p className="font-medium text-white pb-3">LĨNH VỰC</p>
            <i className="text-white text-3xl pb-3 fas fa-dice-d20"></i>
            <p className="text-white text-xl">400</p>
          </div>
        </div>
      </div>
      <div className="md:w-4/5 w-full mx-auto md:grid md:grid-cols-6 lg:grid-cols-12 gap-12 mb-12">
        {renderCard.allCard(khoaHocPhanTrang.items)}
      </div>
      <div className="flex justify-center mb-12">
        <Pagination
          showSizeChanger={false}
          current={page}
          total={khoaHocPhanTrang.totalPages * 10}
          onChange={(page) => {
            setPage(page);
          }}
        />
      </div>
    </section>
  );
}

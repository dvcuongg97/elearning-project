import React, { useEffect, useState } from "react";
import "../../asset/css/GlobalStyle/CardKhoaHoc.scss";
import "../../asset/css/GlobalStyle/TabDanhMucKhoaHoc.scss";

import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { renderCard } from "../renderCard/renderCard";
import { clientApi } from "../../api/api";

export default function KhoaHocTheoDanhMuc() {
  const param = useParams();
  const { filterCard } = renderCard;
  let [khoaHocTheoDanhMuc, setKhoaHocTheoDanhMuc] = useState([]);
  const { danhMucKhoaHoc } = useSelector((state) => state.khoaHocSlice);

  useEffect(() => {
    const layKhoaHocTheoDanhMuc = async (params) => {
      try {
        const res = await clientApi.layKhoaHocTheoDanhMuc(params);
        if (res.status === 200) {
          setKhoaHocTheoDanhMuc(res.data);
        }
      } catch (error) {
        console.log("error", error.message);
      }
    };
    layKhoaHocTheoDanhMuc(param.maDanhMuc);
  }, [param.maDanhMuc]);

  const renderTitle = () => {
    return danhMucKhoaHoc
      ?.filter((item) => item.maDanhMuc === param.maDanhMuc)
      .map((item, index) => {
        return (
          <span
            className="border-2 p-3  rounded-lg text-blue-500 font-medium"
            key={index}
          >
            {item.tenDanhMuc}
          </span>
        );
      });
  };

  return (
    <section className="indexKhoaHoc">
      <div className="p-12 bg-yellow-400 ">
        <p
          style={{
            color: "#1f2471",
          }}
          className="text-black font-bold text-2xl text-center uppercase"
        >
          danh sách khóa học hiện có
        </p>
      </div>

      <div className="tabz-wraper">
        <div className="block mb-12 ml-6">{renderTitle()}</div>
        <div></div>
        <div className="content-activez">
          <div className="md:w-4/5 w-full mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
              {filterCard(0, 0, param.maDanhMuc, khoaHocTheoDanhMuc)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

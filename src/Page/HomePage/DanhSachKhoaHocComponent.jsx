import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { renderCard } from "../../component/renderCard/renderCard";
import { layDanhSachKhoaHocAction } from "../../redux/khoaHocSlice";

export default function DanhSachKhoaHocComponent() {
  const { danhMucKhoaHoc, danhSachKhoaHoc } = useSelector(
    (state) => state.khoaHocSlice
  );
  let [labelState, setLabelState] = useState("BackEnd");
  let { filterCard, renderTabDanhMucKhoaHoc } = renderCard;
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(layDanhSachKhoaHocAction());
  }, []);

  return (
    <section className="section-course mb-20">
      <p
        style={{
          color: "#1f2471",
        }}
        className="text-black font-bold text-2xl text-center uppercase"
      >
        danh sách khóa học nổi bật
      </p>
      <div className="tabz-wraper ">
        <div className="tabz-label md:block hidden">
          <ul className="labelz-list ">
            {renderTabDanhMucKhoaHoc(danhMucKhoaHoc, labelState, setLabelState)}
          </ul>
        </div>
        <div className="content-activez">
          <div className="w-4/5 mx-auto">
            <div className="md:grid md:grid-cols-12  gap-12 mb-12">
              {filterCard(0, 4, labelState, danhSachKhoaHoc)}
            </div>
            <div className=" flex justify-center items-center">
              <NavLink
                to={`/khoahoc`}
                className="border-2 border-slate-300 hover:border-slate-400 text-lg capitalize text-purple-950 font-medium rounded-lg px-2 mb-6"
              >
                Xem Tất Cả
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

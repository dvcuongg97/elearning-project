import React, { useEffect, useState } from "react";
import "../../asset/css/Layout/Header.scss";
import { useDispatch, useSelector } from "react-redux";
import { layDanhMucKhoaHocAction } from "../../redux/danhMucKhoaHocSlice";
import { useNavigate } from "react-router-dom";

export default function Header() {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let { danhMucKhoaHoc } = useSelector((state) => state.danhMucKhoaHocSlice);
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });
  useEffect(() => {
    dispatch(layDanhMucKhoaHocAction());
  }, []);

  const isSticky = (e) => {
    const header = document.querySelector(".header");
    const scrollTop = window.scrollY;
    scrollTop >= 300
      ? header.classList.add("headerFixed")
      : header.classList.remove("headerFixed");
  };
  const renderMenuKhoaHoc = () => {
    return danhMucKhoaHoc.map((item, index) => {
      return (
        <li key={index}>
          <a href={`/danhmuckhoahoc/${item.maDanhMuc}`}>{item.tenDanhMuc}</a>
        </li>
      );
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // const search = toLowerCaseNonAccentVietnamese(e.target.search.value);
    navigate(`/timkiemkhoahoc/${e.target.search.value}`);
  };

  return (
    <section className="header ">
      <div className="headerLeft">
        <a aria-current="page" className="textLogo active" href="/">
          <img src="../image/logo/cyberlogo.png" alt="..." width={250} />
        </a>
        <form onSubmit={handleSubmit}>
          <input
            name="search"
            action="#"
            className="searchForm"
            type="text"
            placeholder="Tìm kiếm"
          />
        </form>
      </div>
      <div className="headerRight">
        <ul className="menuHeader ">
          <li className="courseCate">
            <i className="fas fa-bars mr-1" />
            <a href="/">Danh mục</a>
            <ul className="courseCateList">{renderMenuKhoaHoc()}</ul>
          </li>
          <li>
            <a href="/khoahoc">Khóa học</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li className="eventHeader courseCate">
            <a href="/sukien">Sự kiện</a>
            <ul className="courseCateList">
              <li>
                <button>Sự kiện Sale Cuối Năm</button>
              </li>
              <li>
                <button>Sự kiện Giáng sinh</button>
              </li>
              <li>
                <button>Sự kiện Noel</button>
              </li>
            </ul>
          </li>
          <li>
            <a href="/thongtin">Thông tin</a>
          </li>
        </ul>
      </div>
      <div className="showIconHeader">
        <button className="btnGlobal">
          <a href="/login">Đăng nhập</a>
        </button>
        {/* <div className="menuMobie">
          <i className="fas fa-sort-down iconMenuMobie" />
          <ul className="menuHeaderMobie">
            <li>
              <form>
                <input
                  action
                  className="searchFormMobile"
                  type="text"
                  placeholder="Tìm kiếm"
                />
              </form>
            </li>
            <li className="courseCateMobie">
              <a href="/trangchu">Danh mục</a>
              <ul className="courseCateListMobie">
                <li>
                  <a href="/danhmuckhoahoc/BackEnd">Lập trình Backend</a>
                </li>
                <li>
                  <a href="/danhmuckhoahoc/Design">Thiết kế Web</a>
                </li>
                <li>
                  <a href="/danhmuckhoahoc/DiDong">Lập trình di động</a>
                </li>
                <li>
                  <a href="/danhmuckhoahoc/FrontEnd">Lập trình Front end</a>
                </li>
                <li>
                  <a href="/danhmuckhoahoc/FullStack">Lập trình Full Stack</a>
                </li>
                <li>
                  <a href="/danhmuckhoahoc/TuDuy">Tư duy lập trình</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/khoahoc">Khóa học</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li className="eventHeaderMobie courseCateMobie">
              <a href="/sukien">Sự kiện</a>
              <ul className="courseCateListMobie">
                <li>
                  <a href="/sukien/lastYear">Sự kiện Sale Cuối Năm</a>
                </li>
                <li>
                  <a href="/sukien/Noel">Sự kiện Giáng sinh</a>
                </li>
                <li>
                  <a href="/sukien/Noel">Sự kiện Noel</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/thongtin">Thông tin</a>
            </li>
            <li>
              <a href="/trangchu">Đăng xuất</a>
            </li>
          </ul>
        </div> */}
      </div>
    </section>
  );
}

import React, { useEffect } from "react";
import "../../asset/css/Layout/Header.scss";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { userLocalStorage } from "../../api/localService";
import { layDanhMucKhoaHocAction } from "../../redux/khoaHocSlice";
import { MenuFoldOutlined } from "@ant-design/icons";

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { clientInfo } = useSelector((state) => state.clientProfileSlice);
  const { danhMucKhoaHoc } = useSelector((state) => state.khoaHocSlice);
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
    scrollTop >= 250
      ? header.classList.add("headerFixed")
      : header.classList.remove("headerFixed");
  };
  const renderMenuKhoaHoc = () => {
    return danhMucKhoaHoc?.map((item, index) => {
      return (
        <li key={index}>
          <NavLink to={`/danhmuckhoahoc/${item.maDanhMuc}`}>
            {item.tenDanhMuc}
          </NavLink>
        </li>
      );
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/timkiemkhoahoc/${e.target.search.value.trim()}`);
  };
  const handleLogout = () => {
    userLocalStorage.remove("USER");
    navigate("/");
    window.location.reload();
  };
  const renderShowMobie = () => {
    const menuMobie = document.querySelector(".menuHeaderMobie");
    if (menuMobie) {
      menuMobie.classList.toggle("active");
    } else {
      return "";
    }
  };
  const renderLogin = () => {
    if (clientInfo) {
      return (
        <div className="flex justify-between items-center">
          <NavLink className="infoHeader" to="/thongtintaikhoan">
            <img
              className="avatar"
              src={`https://i.pravatar.cc/150?u=${clientInfo?.taiKhoan}`}
              alt="..."
            />
          </NavLink>
          <div className="cursor-pointer text-yellow-500 hover:text-yellow-400 text-2xl ml-2">
            <i onClick={handleLogout} className="fas fa-power-off "></i>
          </div>
        </div>
      );
    } else {
      return (
        <button className="btnGlobal">
          <NavLink to="/dangnhapdangky">Đăng nhập</NavLink>
        </button>
      );
    }
  };
  return (
    <section className="header">
      <div className="headerLeft">
        <a aria-current="page" className="textLogo active" href="/">
          <img
            className=""
            src="../image/logo/cyberlogo.png"
            alt="..."
            width={150}
          />
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
            <a href="/">Blog</a>
          </li>
          <li className="eventHeader courseCate">
            <a href="/">Sự kiện</a>
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
            <a href="/">Thông tin</a>
          </li>
        </ul>
      </div>
      <div className="showIconHeader">{renderLogin()}</div>
      <div className="menuMobie">
        <div onClick={renderShowMobie} className="iconMenuMobie ">
          <MenuFoldOutlined />
        </div>
        <ul className="menuHeaderMobie">
          <li>
            <form onSubmit={handleSubmit}>
              <input
                name="search"
                action=""
                className="searchFormMobile"
                type="text"
                placeholder="Tìm kiếm"
              />
            </form>
          </li>
          <li className="courseCateMobie">
            <NavLink to="#">Danh mục</NavLink>
            <ul className="courseCateListMobie">{renderMenuKhoaHoc()}</ul>
          </li>
          <li>
            <NavLink to="/">Khóa học</NavLink>
          </li>
          <li>
            <NavLink to="/">Blog</NavLink>
          </li>
          <li className="eventHeaderMobie courseCateMobie">
            <NavLink to="/">Sự kiện</NavLink>
          </li>
          <li>
            <NavLink to="/">Thông tin</NavLink>
          </li>
        </ul>
      </div>
    </section>
  );
}

import React, { useEffect } from "react";
import "../../asset/css/Layout/Header.scss";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { userLocalStorage } from "../../api/localService";
import { layDanhMucKhoaHocAction } from "../../redux/khoaHocSlice";

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
    navigate(`/timkiemkhoahoc/${e.target.search.value}`);
  };
  return (
    <section className="header">
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
      <div className="showIconHeader">
        {clientInfo ? (
          <div className="flex justify-between items-center">
            <NavLink className="infoHeader" to="/thongtintaikhoan">
              <img
                className="avatar"
                src={`https://i.pravatar.cc/150?u=${clientInfo?.taiKhoan}`}
                alt="..."
              />
            </NavLink>
            <i
              onClick={() => {
                userLocalStorage.remove("USER");
                navigate("/");
                window.location.reload();
              }}
              className="fas fa-power-off cursor-pointer text-yellow-500 hover:text-yellow-400 text-2xl ml-2"
            ></i>
          </div>
        ) : (
          <button className="btnGlobal">
            <NavLink to="/dangnhapdangky">Đăng nhập</NavLink>
          </button>
        )}

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

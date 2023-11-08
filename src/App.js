import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Ex_HomePage from "./Page/HomePage/Ex_HomePage";
import HomeLayout from "./template/HomeTemplate/LayoutHome";
import KhoaHocTheoDanhMuc from "./Page/KhoaHocTheoDanhMuc/KhoaHocTheoDanhMuc";
import ChiTietKhoaHoc from "./Page/ChiTietKhoaHoc/ChiTietKhoaHoc";
import KhoaHocPagination from "./Page/KhoaHocPagination/KhoaHocPagination";
import TimKiemKhoaHoc from "./Page/TimKiemKhoaHoc/TimKiemKhoaHoc";
import DangNhapDangKy from "./Page/DangNhap_DangKy/DangNhapDangKy";
import ThongTinCaNhan from "./Page/ThongTinCaNhan/ThongTinTaiKhoan";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <HomeLayout>
                <Ex_HomePage />
              </HomeLayout>
            }
          ></Route>
          <Route
            path="/danhmuckhoahoc/:maDanhMuc"
            element={
              <HomeLayout>
                <KhoaHocTheoDanhMuc />
              </HomeLayout>
            }
          ></Route>
          <Route
            path="/chitietkhoahoc/:maKhoaHoc"
            element={
              <HomeLayout>
                <ChiTietKhoaHoc />
              </HomeLayout>
            }
          ></Route>
          <Route
            path="/khoahoc"
            element={
              <HomeLayout>
                <KhoaHocPagination />
              </HomeLayout>
            }
          ></Route>
          <Route
            path="/timkiemkhoahoc/:tenKhoaHoc"
            element={
              <HomeLayout>
                <TimKiemKhoaHoc />
              </HomeLayout>
            }
          ></Route>
          <Route path="/dangnhapdangky" element={<DangNhapDangKy />}></Route>
          <Route
            path="/thongtintaikhoan"
            element={
              <HomeLayout>
                <ThongTinCaNhan />
              </HomeLayout>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

{
  /* <>
      <Spinner />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          ></Route>

          <Route
            path="/movie/:maPhim"
            element={
              <Layout>
                <DetailMain />
              </Layout>
            }
          ></Route>
          <Route
            path="/booking/:maLichChieu"
            element={
              <Layout>
                <BookingTicket />
              </Layout>
            }
          ></Route>
          <Route
            path="/userinfo"
            element={
              <Layout>
                <UserInfo />
              </Layout>
            }
          ></Route>
          <Route path="/login" element={<UserLogin />}></Route>
          <Route path="/dangky" element={<DangKy />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </> */
}

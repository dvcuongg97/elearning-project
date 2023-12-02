import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Page/HomePage/Ex_HomePage";
import HomeLayout from "./template/HomeTemplate/LayoutHome";
import KhoaHocTheoDanhMuc from "./Page/KhoaHocTheoDanhMuc/KhoaHocTheoDanhMuc";
import ChiTietKhoaHoc from "./Page/ChiTietKhoaHoc/ChiTietKhoaHoc";
import KhoaHocPagination from "./Page/KhoaHocPagination/KhoaHocPagination";
import TimKiemKhoaHoc from "./Page/TimKiemKhoaHoc/TimKiemKhoaHoc";
import DangNhapDangKy from "./Page/DangNhap_DangKy/DangNhapDangKy";
import ThongTinTaiKhoan from "./Page/ThongTinTaiKhoan/ThongTinTaiKhoan";
import Spinner from "./component/Spinner/Spinner";
import AdminLayout from "./template/AdminLayout/AdminLayout";
import AdminPage from "./Page/Admin/AdminPage";
import ListUser from "./Page/Admin/UserPage/ListUser";

import ListKhoaHoc from "./Page/Admin/KhoaHoc/ListKhoaHoc";



import { FloatButton } from "antd";
import Page404 from "./Page/Page404/Page404";
import PrivateRoute from "./template/AdminLayout/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Spinner />
      <FloatButton.BackTop type="primary" />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <HomeLayout>
                <HomePage />
              </HomeLayout>
            }
          />
          <Route
            path="/danhmuckhoahoc/:maDanhMuc"
            element={
              <HomeLayout>
                <KhoaHocTheoDanhMuc />
              </HomeLayout>
            }
          />
          <Route
            path="/chitietkhoahoc/:maKhoaHoc"
            element={
              <HomeLayout>
                <ChiTietKhoaHoc />
              </HomeLayout>
            }
          />
          <Route
            path="/khoahoc"
            element={
              <HomeLayout>
                <KhoaHocPagination />
              </HomeLayout>
            }
          />
          <Route
            path="/timkiemkhoahoc/:tenKhoaHoc"
            element={
              <HomeLayout>
                <TimKiemKhoaHoc />
              </HomeLayout>
            }
          />
          <Route path="/dangnhapdangky" element={<DangNhapDangKy />}></Route>
          <Route
            path="/thongtintaikhoan"
            element={
              <HomeLayout>
                <ThongTinTaiKhoan />
              </HomeLayout>
            }
          />
          <Route path="*" element={<Page404 />} />
            {/* Admin page */}
            <Route
            path=""
            element={<PrivateRoute><AdminLayout/></PrivateRoute>}>
              <Route path="/admin" element={<AdminPage/>}/>
              <Route path="/admin/user" element={<ListUser/>}/>
              <Route path="/admin/khoahoc" element={<ListKhoaHoc/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

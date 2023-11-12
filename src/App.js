import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Ex_HomePage from "./Page/HomePage/Ex_HomePage";
import HomeLayout from "./template/HomeTemplate/LayoutHome";
import KhoaHocTheoDanhMuc from "./Page/KhoaHocTheoDanhMuc/KhoaHocTheoDanhMuc";
import ChiTietKhoaHoc from "./Page/ChiTietKhoaHoc/ChiTietKhoaHoc";
import KhoaHocPagination from "./Page/KhoaHocPagination/KhoaHocPagination";
import TimKiemKhoaHoc from "./Page/TimKiemKhoaHoc/TimKiemKhoaHoc";
import AdminLayout from "./template/AdminLayout/AdminLayout";
import AdminPage from "./Page/Admin/AdminPage";
import ListUser from "./Page/Admin/UserPage/ListUser";
import AddUser from "./Page/Admin/UserPage/Action/AddUser";
import EditUser from "./Page/Admin/UserPage/Action/EditUser";

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
          {/* Admin page */}
          <Route
            path=""
            element={<AdminLayout/>}>
              <Route path="/admin" element={<AdminPage/>}/>
              <Route path="/admin/user" element={<ListUser/>}/>
              <Route path="/admin/user/add" element={<AddUser/>}/>
              <Route path="/admin/user/edit" element={<EditUser/>}/>
          </Route>
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

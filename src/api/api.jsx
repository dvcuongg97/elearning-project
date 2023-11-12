import { https } from "./configApi";

const API_GROUP = "GP01";
const PAGE_SIZE = 12;

export const clientApi = {
  layDanhSachKhoaHocApi: () => {
    return https.get(
      `api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=${API_GROUP}`
    );
  },
  layDanhMucKhoaHocApi: () => {
    return https.get(`/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc`);
  },
  layKhoaHocTheoDanhMucApi: (maDanhMuc) => {
    return https.get(
      `api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${maDanhMuc}&MaNhom=${API_GROUP}`
    );
  },
  layThongTinKhoaHocApi: (maKhoaHoc) => {
    return https.get(
      `api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${maKhoaHoc}`
    );
  },
  layDSKH_PhanTrangApi: (page) => {
    return https.get(
      `api/QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang?page=${page}&pageSize=${PAGE_SIZE}&MaNhom=${API_GROUP}`
    );
  },
  layDSNguoiDung_Admin: () => { 
    return https.get(
      `api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${API_GROUP}`
    );
   },
   xoaNguoiDung_Admin: (taiKhoan) => { 
    return https.delete(
      `/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`
    );
   },
   themNguoiDung_Admin: (user) => { 
    return https.post(
      `api/QuanLyNguoiDung/ThemNguoiDung`
    );
   },
   capNhatNguoiDung_Admin: (user) => { 
    return https.put(
      `api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`
    );
   },
   timKiemNguoiDung_Admin: (tenNguoiDung) => { 
    return https.get(
      `api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=${API_GROUP}&tuKhoa=${tenNguoiDung}`
    );
   },
   xoaKhoaHoc_Admin: (makhoaHoc) => { 
    return https.delete(
      `api/QuanLyKhoaHoc/XoaKhoaHoc?MaKhoaHoc=${makhoaHoc}`
    );
   },
   timKhoaHoc_Admin: (tenKhoaHoc) => {
    return https.get(
      `api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=${tenKhoaHoc}&MaNhom=${API_GROUP}`
    );
  },
  themKhoaHoc_Admin: (khoaHoc) => { 
    return https.post(
      `api/QuanLyKhoaHoc/ThemKhoaHoc`
    );
   },
};

import { https } from "./configApi";
import { DangKyKhoaHoc, HuyGhiDanhKhoaHoc } from "../model/userAction";

const API_GROUP = "GP01";
const PAGE_SIZE = 12;

export const clientApi = {
  layDanhSachKhoaHoc: () => {
    return https.get(
      `api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=${API_GROUP}`
    );
  },
  layDanhMucKhoaHoc: () => {
    return https.get(`/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc`);
  },
  layKhoaHocTheoDanhMuc: (maDanhMuc) => {
    return https.get(
      `api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${maDanhMuc}&MaNhom=${API_GROUP}`
    );
  },
  layThongTinKhoaHoc: (maKhoaHoc) => {
    return https.get(
      `api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${maKhoaHoc}`
    );
  },
  layDSKH_PhanTrang: (page) => {
    return https.get(
      `api/QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang?page=${page}&pageSize=${PAGE_SIZE}&MaNhom=${API_GROUP}`
    );
  },
};

export const userProfileApi = {
  dangNhap: (values) => {
    return https.post("api/QuanLyNguoiDung/DangNhap", values);
  },
  dangKy: (values) => {
    return https.post("api/QuanLyNguoiDung/DangKy", values);
  },
  layThongTinTaiKhoan: () => {
    return https.post("api/QuanLyNguoiDung/ThongTinTaiKhoan");
  },
  capNhatThongTinTaiKhoan: (values) => {
    return https.put("api/QuanLyNguoiDung/CapNhatThongTinNguoiDung", values);
  },
  dangKyKhoaHoc: (dangKyKhoaHoc = new DangKyKhoaHoc()) => {
    return https.post("api/QuanLyKhoaHoc/DangKyKhoaHoc", dangKyKhoaHoc);
  },
  huyGhiDanh: (huyGhiDanh = new HuyGhiDanhKhoaHoc()) => {
    return https.post("api/QuanLyKhoaHoc/HuyGhiDanh", huyGhiDanh);
  },
};

export const adminApi = {
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
}

export const adminGhiDanh = {
   khoaHocChuaGhiDanh: (taiKhoan) => { 
    return https.post(
      `api/QuanLyNguoiDung/LayDanhSachKhoaHocChuaGhiDanh?TaiKhoan=${taiKhoan}`
    );
   },
}
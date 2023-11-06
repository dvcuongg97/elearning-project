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
};

export const clientProfileApi = {
  dangNhap: (values) => {
    return https.post("api/QuanLyNguoiDung/DangNhap", values);
  },
  dangKy: (values) => {
    return https.post("api/QuanLyNguoiDung/DangKy", values);
  },
};

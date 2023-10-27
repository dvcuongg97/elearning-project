// export let getDataPhongVeApi = (maLichChieu) => {
//   return https.get(
//     `/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`
//   );
// };

import { https } from "./configApi";

export let getArrCourses = () => {
  return https.get(`api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01`);
};

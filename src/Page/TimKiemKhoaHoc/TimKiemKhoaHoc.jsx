import React, { useEffect, useState } from "react";
import "../../asset/css/TimKiemKhoaHoc/TimKiemKhoaHoc.scss";
import { Rate } from "antd";
import { renderCard } from "../renderCard/renderCard";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  layDanhMucKhoaHocAction,
  layDanhSachKhoaHocAction,
} from "../../redux/khoaHocSlice";

function toLowerCaseNonAccentVietnamese(str) {
  str = str?.toLowerCase();
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
  str = str.replace(/đ/g, "d");
  str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, "");
  str = str.replace(/\u02C6|\u0306|\u031B/g, "");
  console.log("🚀toLowerCaseNonAccentVietnamese", str);
  return str;
}

export default function TimKiemKhoaHoc() {
  const param = useParams();
  const dispatch = useDispatch();
  const { allCard } = renderCard;
  const { danhSachKhoaHoc } = useSelector((state) => state.khoaHocSlice);
  console.log(
    "🚀 ~ file: TimKiemKhoaHoc.jsx:29 ~ TimKiemKhoaHoc ~ danhSachKhoaHoc:",
    danhSachKhoaHoc
  );
  const [search, setSearch] = useState(param.tenKhoaHoc);

  useEffect(() => {
    dispatch(layDanhSachKhoaHocAction());
    dispatch(layDanhMucKhoaHocAction());
  }, [search]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearch(event.target.search.value);
  };
  const filterSearch = (search) => {
    toLowerCaseNonAccentVietnamese(search);
    const filterRes = danhSachKhoaHoc?.filter((khoaHoc) =>
      khoaHoc.tenKhoaHoc.toLowerCase().includes(search.toLowerCase())
    );
    return filterRes;
  };
  const filterResult = filterSearch(search);
  let filterLength = filterResult.length;
  console.log(
    "🚀 ~ file: TimKiemKhoaHoc.jsx:56 ~ TimKiemKhoaHoc ~ filterLength:",
    filterLength
  );

  return (
    <section className="searchPage">
      <div className="searchTitle">
        <h3>khóa học</h3>
        <p>KẾT QUẢ TÌM KIẾM KHÓA HỌC!!!</p>
      </div>
      <div className="searchContainer">
        <div className="searchCheckbox">
          <div className="searchFilter">
            <div className="filterItem">
              <h3>Khóa Học</h3>
              <label className="containerLabel">
                Tất Cả
                <input type="checkbox" />
                <span className="checkmark" />
              </label>
              <label className="containerLabel">
                Front End
                <input type="checkbox" />
                <span className="checkmark" />
              </label>
              <label className="containerLabel">
                Back End
                <input type="checkbox" />
                <span className="checkmark" />
              </label>
              <label className="containerLabel">
                HTML /CSS
                <input type="checkbox" />
                <span className="checkmark" />
              </label>
            </div>
            <div className="filterItem">
              <h3>Cấp Độ</h3>
              <label className="containerLabel">
                Tất Cả
                <input type="checkbox" />
                <span className="checkmark" />
              </label>
              <label className="containerLabel">
                Trung Cấp
                <input type="checkbox" />
                <span className="checkmark" />
              </label>
              <label className="containerLabel">
                Cao Cấp
                <input type="checkbox" />
                <span className="checkmark" />
              </label>
              <label className="containerLabel">
                Mới Bắt Đầu
                <input type="checkbox" />
                <span className="checkmark" />
              </label>
            </div>
            <div className="filterItem">
              <h3>Khóa Học</h3>
              <label className="containerLabel">
                <Rate value={2} disabled />
                <input type="checkbox" />
                <span className="checkmark" />
              </label>
              <label className="containerLabel">
                <Rate value={3} disabled />
                <input type="checkbox" />
                <span className="checkmark" />
              </label>
              <label className="containerLabel">
                <Rate value={4} disabled />
                <input type="checkbox" />
                <span className="checkmark" />
              </label>
              <label className="containerLabel">
                <Rate value={5} disabled />
                <input type="checkbox" />
                <span className="checkmark" />
              </label>
            </div>
          </div>
        </div>
        <div className="searchResult">
          <div className="resultContainer">
            <div className="inputField">
              <label className="labelInputField">tìm kiếm khóa học</label>
              <form onSubmit={handleSubmit}>
                <input
                  name="search"
                  type="text"
                  className="textInput"
                  placeholder="Nhập tên khóa học..."
                />
              </form>
            </div>
            <div className="grid col-span-12">
              <span className="text-gray-500 text-md">
                Tìm thấy {filterLength} khóa học
              </span>
            </div>
            {filterResult.length > 0 ? (
              allCard(filterResult)
            ) : (
              <div className="notFound">
                <span>không tìm thấy từ khóa:</span>
                <span>{search}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

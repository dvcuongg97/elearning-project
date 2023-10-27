import React, { useEffect } from "react";
import "../../asset/css/HomePage/CourseStyles.scss";
import { useDispatch, useSelector } from "react-redux";
import { getArrCourses } from "../../api/api";
import { setCourses } from "../../redux/sliceCourses";

export default function Courses() {
  const dispatch = useDispatch();
  let { arrCourses } = useSelector((state) => state.sliceCourses);
  useEffect(() => {
    getArrCourses()
      .then((res) => {
        console.log(res.data);
        dispatch(setCourses(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const renderKhoaHocI = () => {
    return arrCourses?.slice(0, 4).map((khoaHoc) => {
      return (
        <div
          key={khoaHoc.maKhoaHoc}
          className="col-span-3 cardGlobalRes mt-4 cardEffect"
        >
          <a className="cardGlobal" href="/chitiet/121212334023">
            <img src={khoaHoc.hinhAnh} alt="..." />
            <span className="stikerCard">{khoaHoc.tenKhoaHoc}</span>
            <div className="cardBodyGlobal">
              <h6 className="text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                cumque architecto sequi porro minima eveniet ducimus labore non
                nisi adipisci!
              </h6>
              <div className="titleMaker">
                <div className="imgCardFooter">
                  <img
                    className="rounded-full"
                    src={`https://i.pravatar.cc/300?u=${khoaHoc.nguoiTao?.taiKhoan}`}
                    alt="..."
                  />
                </div>
                <span className="ml-2 colorCardTitle">
                  {khoaHoc.nguoiTao?.hoTen}
                </span>
              </div>
            </div>
            <div className="cardFooter">
              <div>
                <p>
                  800.000<sup>đ</sup>
                </p>
                <p>
                  400.000<sup>đ</sup>
                </p>
              </div>
              <div>
                <i className="fas fa-star mr-1 textStar" />
                <span className="textStar">4.9</span>
                <span className="colorCardTitle">(7840)</span>
              </div>
            </div>
          </a>
        </div>
      );
    });
  };
  const renderKhoaHocII = (start, end) => {
    return arrCourses.slice(start, end).map((khoaHoc) => {
      return (
        <div
          key={khoaHoc.maKhoaHoc}
          className="col-span-3 relative cardGlobalRes mt-4"
        >
          <a className="cardGlobal " href="/chitiet/1231250">
            <img src={khoaHoc.hinhAnh} alt="..." />
            <span className="stikerCard">{khoaHoc.tenKhoaHoc}</span>
            <div className="cardBodyGlobal">
              <h6 className="text-justify">
                Velit quae earum perspiciatis. Pariatur accusamus possimus nemo
                earum ut odit hic tenetur sequi architecto quisquam suscipit
                odio sapiente, ab mollitia fuga corrupti commodi
              </h6>
              <div className="cardIcon">
                <span>
                  <i className="far fa-clock iconOclock" />8 giờ
                </span>
                <span>
                  <i className="far fa-calendar-alt iconCalendar" />4 tuần
                </span>
                <span>
                  <i className="fas fa-signal iconLevel" />
                  Tất cả
                </span>
              </div>
            </div>
            <div className="cardFooter">
              <div className="titleMaker">
                <div className="imgCardFooter">
                  <img
                    className="rounded-full"
                    src={`https://i.pravatar.cc/300?u=${khoaHoc.nguoiTao?.taiKhoan}`}
                    alt="..."
                  />
                </div>
                <span className="ml-2 colorCardTitle">
                  {khoaHoc.nguoiTao?.hoTen.slice(0, 10)}
                </span>
              </div>
              <div>
                <p>
                  800.000<sup>đ</sup>
                </p>
                <p>
                  400.000<sup>đ</sup>
                  <i className="fas fa-tag iconTag" />
                </p>
              </div>
            </div>
          </a>
          <div className="subCard">
            <a className="cardGlobal " href="/chitiet/1231250">
              <div className="subCardHead">
                <img src="/static/media/emoji.6d1b7051.png" alt="..." />
                <span className="ml-1 colorCardTitle">Elun Musk Ricard</span>
              </div>
              <h6>BOOTCAMP - LẬP TRÌNH FULL STACK TỪ ZERO ĐẾN CÓ VIỆC</h6>
              <p className="colorCardTitle">
                Đã có hơn 6200 bạn đăng kí học và có việc làm thông qua chương
                trình đào tạo Bootcamp Lập trình Front End chuyên nghiệp. Khóa
                học 100% thực hành cường độ cao theo dự án thực tế và kết nối
                doanh nghiệp hỗ trợ tìm việc ngay sau khi học...
              </p>
              <div className="cardIcon">
                <span>
                  <i className="far fa-clock iconOclock" />8 giờ
                </span>
                <span>
                  <i className="far fa-calendar-alt iconCalendar" />4 tuần
                </span>
                <span>
                  <i className="fas fa-signal iconLevel" />
                  Tất cả
                </span>
              </div>
            </a>
            <button className="btnGlobal btnSubCard">
              {/* <a className="cardGlobal " href="/chitiet/1231250" /> */}
              <a href="/chitiet/1231250">Xem chi tiết</a>
            </button>
          </div>
          <div className="cardSale">
            <span>Yêu thích</span>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="container mx-auto">
      <p className="text-orange-600 mb-3 text-xl font-bold hover:text-orange-400">
        Khóa học phổ biến
      </p>
      <div className="grid grid-cols-12 mb-20">{renderKhoaHocI()}</div>
      <p className="text-black mb-3 text-xl font-bold">Khóa học tham khảo</p>
      <div className="grid grid-cols-12 mb-20">{renderKhoaHocII(4, 8)}</div>
      <p className="text-black mb-3 text-xl font-bold">
        Khóa học Front End React Js
      </p>
      <div className="grid grid-cols-12 mb-20">{renderKhoaHocII(8, 12)}</div>
    </div>
  );
}

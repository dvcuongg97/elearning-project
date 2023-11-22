import React, { useEffect, useState } from "react";
import "../../asset/css/ChiTietKhoaHocPage/ChiTietKhoaHocPage.scss";
import { Rate, message } from "antd";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { renderCard } from "../../component/renderCard/renderCard";
import { clientApi, userProfileApi } from "../../api/api";
import { layDanhSachKhoaHocAction } from "../../redux/khoaHocSlice";
import { DangKyKhoaHoc } from "../../model/userAction";
import { layThongTinTaiKhoanAction } from "../../redux/userProfileSlice";

export default function ChiTietKhoaHoc() {
  const param = useParams();
  const dispatch = useDispatch();
  const [chiTietKhoaHoc, setChiTietKhoaHoc] = useState({});

  const { userProfile, userLogin } = useSelector(
    (state) => state.userProfileSlice
  );
  const { danhSachKhoaHoc } = useSelector((state) => state.khoaHocSlice);

  const khoaHocDangKy = userProfile?.chiTietKhoaHocGhiDanh?.filter(
    (khoaHoc) => {
      return khoaHoc.maKhoaHoc === param.maKhoaHoc;
    }
  );
  console.log(
    "🚀 ~ file: ChiTietKhoaHoc.jsx:27 ~ ChiTietKhoaHoc ~ khoaHocDangKy:",
    khoaHocDangKy
  );

  useEffect(() => {
    dispatch(layDanhSachKhoaHocAction());
    dispatch(layThongTinTaiKhoanAction());
    const layChiTietKhoaHocAction = async (maKhoaHoc) => {
      try {
        const res = await clientApi.layThongTinKhoaHoc(maKhoaHoc);
        if ((res.status = 200)) {
          setChiTietKhoaHoc(res.data);
        }
      } catch (error) {}
    };
    layChiTietKhoaHocAction(param.maKhoaHoc);
  }, [param.maKhoaHoc]);

  const handleDangKy = async (chiTietKhoaHoc) => {
    try {
      if (!userLogin) {
        message.info("Bạn chưa đăng nhập!");
      } else if (khoaHocDangKy.length > 0) {
        message.info("Bạn đã đăng ký khóa học này!");
      } else {
        let dangKyKhoaHoc = new DangKyKhoaHoc();
        dangKyKhoaHoc.taiKhoan = userLogin.taiKhoan;
        dangKyKhoaHoc.maKhoaHoc = chiTietKhoaHoc.maKhoaHoc;
        userProfileApi.dangKyKhoaHoc(dangKyKhoaHoc);
        message.success("Đăng ký khóa học thành công");
        setTimeout(() => {
          window.location.reload();
        }, 500);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="detail">
      <div className="page--title bg-yellow-400 p-12">
        <p className="text-4xl text-white font-medium uppercase">
          THÔNG TIN KHÓA HỌC
        </p>
        <p className="text-md text-white font-medium uppercase">
          TIẾN LÊN VÀ KHÔNG CHẦN CHỪ !!!
        </p>
      </div>
      <div className="detail__container">
        <div className="container__left">
          <div className="left__info">
            <h3>{chiTietKhoaHoc.tenKhoaHoc}</h3>
            <div className="left__iconWraper">
              <div className="iconContent">
                <img
                  alt="..."
                  src={`https://i.pravatar.cc/150?u=${chiTietKhoaHoc?.nguoiTao?.taiKhoan}`}
                />
                <div className="iconText">
                  <span>Giảng viên</span>
                  <span>{chiTietKhoaHoc?.nguoiTao?.hoTen}</span>
                </div>
              </div>
              <div className="iconContent">
                <i className="fas fa-graduation-cap"></i>
                <div className="iconText">
                  <span>Giảng viên</span>
                  <span>Robert Ngô Ngọc</span>
                </div>
              </div>
              <div className="iconRate">
                <span>4.0</span>
                <Rate defaultValue={4} disabled />
                <span>100 đánh giá</span>
              </div>
            </div>
            <div className="left__textWraper">
              <p>
                React.js là thư viện JavaScript phổ biến nhất mà bạn có thể sử
                dụng và tìm hiểu ngày nay để xây dựng giao diện người dùng hiện
                đại, phản ứng cho web.Khóa học này dạy bạn về React chuyên sâu,
                từ cơ bản, từng bước đi sâu vào tất cả các kiến ​​thức cơ bản
                cốt lõi, khám phá rất nhiều ví dụ và cũng giới thiệu cho bạn các
                khái niệm nâng cao.Bạn sẽ nhận được tất cả lý thuyết, hàng tấn
                ví dụ và bản trình diễn, bài tập và bài tập cũng như vô số kiến
                ​​thức quan trọng bị hầu hết các nguồn khác bỏ qua - sau cùng,
                có một lý do tại sao khóa học này lại rất lớn! Và trong trường
                hợp bạn thậm chí không biết tại sao bạn lại muốn học React và
                bạn chỉ ở đây vì một số quảng cáo hoặc "thuật toán" - đừng lo
                lắng: ReactJS là một công nghệ quan trọng với tư cách là một nhà
                phát triển web và trong khóa học này, tôi sẽ cũng giải thích TẠI
                SAO điều đó lại quan trọng!
              </p>

              <div className="ulText">
                <h3>Những gì bạn sẽ học</h3>
                <ul className="ulLeft">
                  <li>
                    <i className="fas fa-check"></i>
                    <span>
                      Xây dựng các ứng dụng web mạnh mẽ, nhanh chóng, thân thiện
                      với người dùng và phản ứng nhanh
                    </span>
                  </li>
                  <li>
                    <i className="fas fa-check"></i>
                    <span>
                      Đăng ký công việc được trả lương cao hoặc làm freelancer
                      trong một trong những lĩnh vực được yêu cầu nhiều nhất mà
                      bạn có thể tìm thấy trong web dev ngay bây giờ
                    </span>
                  </li>
                  <li>
                    <i className="fas fa-check"></i>
                    <span>
                      Cung cấp trải nghiệm người dùng tuyệt vời bằng cách tận
                      dụng sức mạnh của JavaScript một cách dễ dàng
                    </span>
                  </li>
                  <li>
                    <i className="fas fa-check"></i>
                    <span>
                      Tìm hiểu tất cả về React Hooks và React Components
                    </span>
                  </li>
                </ul>
                <ul className="ulRight">
                  <li>
                    <i className="fas fa-check"></i>
                    <span>
                      Thông thạo chuỗi công cụ hỗ trợ React, bao gồm cú pháp
                      Javascript NPM, Webpack, Babel và ES6 / ES2015
                    </span>
                  </li>
                  <li>
                    <i className="fas fa-check"></i>
                    <span>
                      Nhận ra sức mạnh của việc xây dựng các thành phần có thể
                      kết hợp
                    </span>
                  </li>
                  <li>
                    <i className="fas fa-check"></i>
                    <span>
                      Hãy là kỹ sư giải thích cách hoạt động của Redux cho mọi
                      người, bởi vì bạn biết rất rõ các nguyên tắc cơ bản
                    </span>
                  </li>
                  <li>
                    <i className="fas fa-check"></i>
                    <span>
                      Nắm vững các khái niệm cơ bản đằng sau việc cấu trúc các
                      ứng dụng Redux
                    </span>
                  </li>
                </ul>
              </div>

              <div className="introCourse">
                <h3>Nội dung khóa học</h3>

                <div className="introContent__wraper">
                  <div className="introHeading">
                    <span>MỤC 1: GIỚI THIỆU</span>
                    <button className="btnIntro">XEM TRƯỚC</button>
                  </div>
                  <span>Bài học</span>
                  <ul className="ulIntro">
                    <li>
                      <span>
                        <i className="fas fa-play-circle"></i>Các khái niệm về
                        React Component
                      </span>
                      <span>
                        <i className="fas fa-clock"></i>14:35
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="fas fa-play-circle"></i>Thiết lập môi
                        trường cho Windows
                      </span>
                      <span>
                        <i className="fas fa-clock"></i>14:35
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="fas fa-play-circle"></i>TGhi chú nhanh về
                        dấu ngoặc kép cho string interpolation
                      </span>
                      <span>
                        <i className="fas fa-clock"></i>14:35
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="fas fa-play-circle"></i>Các khái niệm về
                        React Component
                      </span>
                      <span>
                        <i className="fas fa-clock"></i>14:35
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="introContent__wraper">
                  <div className="introHeading">
                    <span>MỤC 2: KIẾN THỨC CĂN BẢN</span>
                    <button>XEM TRƯỚC</button>
                  </div>
                  <span>Bài học</span>
                  <ul className="ulIntro">
                    <li>
                      <span>
                        <i className="fas fa-play-circle"></i>Trang chủ và thành
                        phần thư mục
                      </span>
                      <span>
                        <i className="fas fa-clock"></i>14:35
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="fas fa-play-circle"></i>Hướng dẫn khóa học
                        + Liên kết Github
                      </span>
                      <span>
                        <i className="fas fa-clock"></i>14:35
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="fas fa-play-circle"></i>Trang chủ thương
                        mại điện tử + thiết lập SASS
                      </span>
                      <span>
                        <i className="fas fa-clock"></i>14:35
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="fas fa-play-circle"></i>Tệp CSS và SCSS
                      </span>
                      <span>
                        <i className="fas fa-clock"></i>14:35
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="fas fa-play-circle"></i>React 17: Cập nhật
                        các gói + Phiên bản React mới nhất
                      </span>
                      <span>
                        <i className="fas fa-clock"></i>14:35
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="introContent__wraper">
                  <div className="introHeading">
                    <span>MỤC 3: KIẾN THỨC CHUYÊN SÂU</span>
                    <button>XEM TRƯỚC</button>
                  </div>
                  <span>Bài học</span>
                  <ul className="ulIntro">
                    <li>
                      <span>
                        <i className="fas fa-play-circle"></i>connect() and
                        mapStateToProps
                      </span>
                      <span>
                        <i className="fas fa-clock"></i>14:35
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="fas fa-play-circle"></i>Trạng thái thư mục
                        vào Redux
                      </span>
                      <span>
                        <i className="fas fa-clock"></i>14:35
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="fas fa-play-circle"></i>Thành phần Tổng
                        quan về Bộ sưu tập
                      </span>
                      <span>
                        <i className="fas fa-clock"></i>14:35
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container__right">
          <div className="detail__bill">
            <img alt="..." src={chiTietKhoaHoc.hinhAnh} />
            <p className="priceCourse">
              <i className="fas fa-bolt"></i>500.000<sup>đ</sup>
            </p>
            <button
              onClick={() => handleDangKy(chiTietKhoaHoc)}
              className="btnDangKy"
            >
              đăng ký
            </button>
            <ul className="ulDangKy">
              <li>
                <p>
                  Ghi danh:<span> 10 học viên</span>
                </p>
                <i className="fas fa-user-graduate " />
              </li>
              <li>
                <p>
                  Thời gian: <span> 18 giờ</span>
                </p>
                <i className="far fa-clock far fa-calendar-alt" />
              </li>
              <li>
                <p>
                  Bài học:<span> 10</span>
                </p>
                <i className="fas fa-book" />
              </li>
              <li>
                <p>
                  Video:<span> 14</span>
                </p>
                <i className="fas fa-photo-video" />
              </li>
              <li>
                <p>
                  Trình độ:<span> Người mới bắt đầu</span>
                </p>
                <i className="fas fa-database" />
              </li>
            </ul>
            <form className="formCoupon">
              <input type="text" placeholder="Nhập mã" />
            </form>
          </div>
        </div>
      </div>
      <h3 className="text-xl font-medium px-9 mb-9">Khóa học tham khảo</h3>
      <div className="md:grid grid-cols-12  mb-12">
        {renderCard.filterCard(
          4,
          8,
          chiTietKhoaHoc?.danhMucKhoaHoc?.maDanhMucKhoahoc,
          danhSachKhoaHoc
        )}
      </div>
    </section>
  );
}

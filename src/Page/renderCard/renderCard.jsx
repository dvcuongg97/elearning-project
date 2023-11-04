import { Tooltip } from "antd";
import { NavLink } from "react-router-dom";

export const renderCard = {
  filterCard: (start, end, id, dataSource) => {
    if (!end) {
      end = dataSource.lenght;
    }
    const FILTER = dataSource?.filter(
      (item) => item?.danhMucKhoaHoc?.maDanhMucKhoahoc === id
    );
    return FILTER?.slice(start, end)?.map((khoaHoc) => {
      const TOOLTIP_TITLE = (
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              marginBottom: 6,
            }}
          >
            <img
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                marginRight: 12,
              }}
              src={`https://i.pravatar.cc/150?u=${khoaHoc.nguoiTao?.taiKhoan}`}
              alt="..."
            />
            <span
              style={{
                fontSize: 16,
                fontWeight: 500,
              }}
              className="text-slate-500"
            >
              {khoaHoc.nguoiTao?.hoTen}
            </span>
          </div>
          <h6 className="text-slate-900 font-medium mb-2 uppercase text-center">
            {khoaHoc.tenKhoaHoc}
          </h6>
          <p className="colorCardTitle mb-1">
            Đã có hơn 6200 bạn đăng kí học và có việc làm thông qua chương trình
            đào tạo Bootcamp Lập trình Front End chuyên nghiệp. Khóa học 100%
            thực hành cường độ cao theo dự án thực tế và kết nối doanh nghiệp hỗ
            trợ tìm việc ngay sau khi học...
          </p>
          <div className="cardIcon flex justify-around mb-3">
            <span className="text-slate-700">
              <i
                style={{ color: "#f5c002" }}
                className=" far fa-clock iconOclock"
              />
              {""} 8 giờ
            </span>
            <span className="text-slate-700 mr-2">
              <i
                style={{ color: "#f06f68" }}
                className="far fa-calendar-alt iconCalendar ml-2"
              />
              {""} 4 tuần
            </span>
            <span className="text-slate-700 mr-2">
              <i
                style={{ color: "#65c9ff" }}
                className="fas fa-signal iconLevel"
              />
              {""} Tất cả
            </span>
          </div>

          <NavLink
            className="block text-center capitalize bg-green-600 hover:bg-green-500 py-3 font-medium text-lg"
            to={`/chitietkhoahoc/${khoaHoc.maKhoaHoc}`}
          >
            Xem chi tiết
          </NavLink>
        </div>
      );

      return (
        <Tooltip
          color="#fff"
          key={khoaHoc.maKhoaHoc}
          placement="right"
          title={TOOLTIP_TITLE}
        >
          <div className="col-span-3 relative flex justify-center items-center">
            <NavLink
              className="cardGlobal "
              to={`/chitietkhoahoc/${khoaHoc.maKhoaHoc}`}
            >
              <img src={khoaHoc.hinhAnh} alt="..." />
              <span className="stikerCard">{khoaHoc.tenKhoaHoc}</span>
              <div className="cardBodyGlobal">
                <h6>
                  Velit quae earum perspiciatis. Pariatur accusamus possimus
                  nemo earum ut odit hic tenetur.
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
                    {khoaHoc.nguoiTao?.hoTen?.slice(0, 10)}
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
              <div className="cardSale">
                <span>Yêu thích</span>
              </div>
            </NavLink>
          </div>
        </Tooltip>
      );
    });
  },
  renderTabDanhMucKhoaHoc: (danhMucKhoaHoc, labelState, setLabelState) => {
    return danhMucKhoaHoc?.map((item, index) => {
      return (
        <li
          key={index}
          onClick={() => {
            setLabelState(item.maDanhMuc);
          }}
          className={`${
            item.maDanhMuc === labelState
              ? "labelz-name labelz-active"
              : "labelz-name"
          }`}
        >
          <button>{item.tenDanhMuc}</button>
        </li>
      );
    });
  },
  allCard: (dataSource) => {
    return dataSource?.map((khoaHoc) => {
      const TOOLTIP_TITLE = (
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              marginBottom: 6,
            }}
          >
            <img
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                marginRight: 12,
              }}
              src={`https://i.pravatar.cc/150?u=${khoaHoc.nguoiTao?.taiKhoan}`}
              alt="..."
            />
            <span
              style={{
                fontSize: 16,
                fontWeight: 500,
              }}
              className="text-slate-500"
            >
              {khoaHoc.nguoiTao?.hoTen}
            </span>
          </div>
          <h6 className="text-slate-900 font-medium mb-2 uppercase text-center">
            {khoaHoc.tenKhoaHoc}
          </h6>
          <p className="colorCardTitle mb-1">
            Đã có hơn 6200 bạn đăng kí học và có việc làm thông qua chương trình
            đào tạo Bootcamp Lập trình Front End chuyên nghiệp. Khóa học 100%
            thực hành cường độ cao theo dự án thực tế và kết nối doanh nghiệp hỗ
            trợ tìm việc ngay sau khi học...
          </p>
          <div className="cardIcon flex justify-around mb-3">
            <span className="text-slate-700">
              <i
                style={{ color: "#f5c002" }}
                className=" far fa-clock iconOclock"
              />
              {""} 8 giờ
            </span>
            <span className="text-slate-700 mr-2">
              <i
                style={{ color: "#f06f68" }}
                className="far fa-calendar-alt iconCalendar ml-2"
              />
              {""} 4 tuần
            </span>
            <span className="text-slate-700 mr-2">
              <i
                style={{ color: "#65c9ff" }}
                className="fas fa-signal iconLevel"
              />
              {""} Tất cả
            </span>
          </div>

          <NavLink
            className="block text-center capitalize bg-green-600 hover:bg-green-500 py-3 font-medium text-lg"
            to={`/chitietkhoahoc/${khoaHoc.maKhoaHoc}`}
          >
            Xem chi tiết
          </NavLink>
        </div>
      );
      return (
        <Tooltip
          color="#fff"
          key={khoaHoc.maKhoaHoc}
          placement="right"
          title={TOOLTIP_TITLE}
        >
          <div className="col-span-3 relative flex justify-center items-center">
            <NavLink
              className="cardGlobal "
              to={`/chitietkhoahoc/${khoaHoc.maKhoaHoc}`}
            >
              <img src={khoaHoc.hinhAnh} alt="..." />
              <span className="stikerCard">{khoaHoc.tenKhoaHoc}</span>
              <div className="cardBodyGlobal">
                <h6>
                  Velit quae earum perspiciatis. Pariatur accusamus possimus
                  nemo earum ut odit hic tenetur.
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
                    {khoaHoc.nguoiTao?.hoTen?.slice(0, 10)}
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
              <div className="cardSale">
                <span>Yêu thích</span>
              </div>
            </NavLink>
          </div>
        </Tooltip>
      );
    });
  },
};

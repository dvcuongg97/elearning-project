import React, { useState } from "react";
import "../../asset/css/HomePage/Testimonial.scss";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";
import { Rate } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../../node_modules/swiper/swiper.css";
// import Pagination from "../../../node_modules/swiper/modules/pagination.min.mjs";
// import Autoplay from "../../../node_modules/swiper/modules/autoplay.min.mjs";
// import freeMode from "../../../node_modules/swiper/modules/free-mode.min.mjs";
import { Autoplay, Pagination, FreeMode } from "swiper/modules";
import "../../../node_modules/swiper/swiper.css";
import "../../../node_modules/swiper/modules/free-mode.css";
import "../../../node_modules/swiper/modules/pagination.css";
import "swiper/css/pagination";

const logoSwiper = [
  "../image/HomePage/CountUp/crs1.png",
  "../image/HomePage/CountUp/crs2.png",
  "../image/HomePage/CountUp/crs3.png",
  "../image/HomePage/CountUp/crs4.png",
  "../image/HomePage/CountUp/crs5.png",
  "../image/HomePage/CountUp/crs6.png",
  "../image/HomePage/CountUp/crs6.png",
];

const teamGV = [
  {
    img: "../image/HomePage/Testimonial/testi1.jpg",
    name: "IcarDi MenBor",
    content: "Chuyên gia ngôn ngữ Vue Js",
  },
  {
    img: "../image/HomePage/Testimonial/testi2.jpg",
    name: "Bladin Slaham",
    content: "Chuyên gia hệ thống máy tính",
  },
  {
    img: "../image/HomePage/Testimonial/testi3.jpg",
    name: "Chris Andersan",
    content: "Chuyên gia lĩnh vực Full Skill",
  },
  {
    img: "../image/HomePage/Testimonial/testi7.jpg",
    name: "VueLo Gadi",
    content: "Chuyên gia lĩnh vực Phân tích",
  },
  {
    img: "../image/HomePage/Testimonial/testi4.jpg",
    name: "Hoàng Nam",
    content: "Chuyên gia lĩnh vực PHP",
  },
  {
    img: "../image/HomePage/Testimonial/testi5.jpg",
    name: "David Ngô Savani",
    content: "Chuyên gia lĩnh vực Front End",
  },
  {
    img: "../image/HomePage/Testimonial/testi6.jpg",
    name: "Big DadMoon",
    content: "Chuyên gia lĩnh vực lập trình",
  },
];

export default function TestimonialComponent() {
  let [counter, setCounter] = useState(false);

  const renderCounter = (number) => {
    return (
      <ScrollTrigger
        onEnter={() => setCounter(true)}
        onExit={() => setCounter(false)}
      >
        {counter && (
          <CountUp duration={3} start={0} end={number} delay={0}>
            {({ countUpRef }) => (
              <p
                style={{
                  color: "var(--colorGlobal)",
                }}
                className="block text-center text-5xl font-bold text-gre my-3"
                ref={countUpRef}
              />
            )}
          </CountUp>
        )}
      </ScrollTrigger>
    );
  };

  const renderTeamGV = () => {
    return teamGV.map((item, index) => {
      return (
        <SwiperSlide key={index}>
          <div className="testi-card">
            <img src={item.img} alt="..." />
            <div className="card__content">
              <p>{item.name}</p>
              <p>{item.content}</p>
            </div>
            <div className="card__footer">
              <Rate value={5} />
              <p>100 Đánh giá</p>
            </div>
          </div>
        </SwiperSlide>
      );
    });
  };
  return (
    <>
      <section className="md:block hidden couter-section relative">
        <div className="mx-auto">
          <Swiper
            className="w-3/4 mb-3"
            modules={[Autoplay]}
            autoplay={true}
            spaceBetween={30}
            slidesPerView={6}
            speed={1000}
            loop={true}
            navigation
            scrollbar={{ draggable: true }}
          >
            {logoSwiper.map((item, index) => {
              return (
                <SwiperSlide key={index} className="flex justify-center">
                  <img src={item} alt="..." />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        {/* counter number */}
        <div
          style={{
            backgroundColor: "#896eff",
            backgroundImage: 'url("./image/HomePage/CountUp/bg1ct.png")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="py-20 mb-9 "
        >
          <div className="w-2/3 grid grid-cols-2 gap-6 lg:gap-0 lg:grid-cols-4  mx-auto">
            <div className="col-span-1 hover:-translate-y-4 transition-all duration-500">
              <div className="flex justify-center">
                <div className="flex-col justify-center items-center bg-white w-60  py-8 shadow-md shadow-white rounded-lg">
                  <img
                    src="./image/HomePage/CountUp/icon1ct.png"
                    alt="..."
                    className="block w-20 h-20 mb-3 mx-auto"
                  />
                  {renderCounter(9000)}

                  <p className="text-center font-bold text-lg">Học viên</p>
                </div>
              </div>
            </div>
            <div className="col-span-1 hover:-translate-y-2 transition-all duration-500 lg:translate-y-6">
              <div className="flex justify-center ">
                <div className="flex-col justify-center items-center bg-white w-60   py-8 shadow-md shadow-white rounded-lg">
                  <img
                    alt="..."
                    className="block w-20 h-20 mx-auto"
                    src="./image/HomePage/CountUp/icon2ct.png"
                  />
                  {renderCounter(1000)}

                  <p className="text-center font-bold text-lg">Khóa học</p>
                </div>
              </div>
            </div>
            <div className="col-span-1 hover:-translate-y-4 transition-all duration-500">
              <div className="flex justify-center ">
                <div className="flex-col justify-center items-center bg-white w-60   py-8 shadow-md shadow-white rounded-lg">
                  <img
                    src="./image/HomePage/CountUp/icon3ct.png"
                    alt="..."
                    className="block mx-auto w-20 h-20"
                  />
                  {renderCounter(33200)}

                  <p className="text-center font-bold text-lg">Giờ học</p>
                </div>
              </div>
            </div>
            <div className="col-span-1 hover:-translate-y-2 transition-all duration-500 lg:translate-y-6">
              <div className="flex justify-center ">
                <div className="flex-col justify-center items-center bg-white w-60   py-8 shadow-md shadow-white rounded-lg">
                  <img
                    src="./image/HomePage/CountUp/icon4ct.png"
                    alt="..."
                    className="block mx-auto w-20 h-20"
                  />
                  {renderCounter(400)}
                  <p className="text-center font-bold text-lg">Giảng viên</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-testi md:block hidden">
        <Swiper
          className="p-3"
          slidesPerView={6}
          speed={1000}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            400: {
              slidesPerView: 2,
            },
            639: {
              slidesPerView: 4,
            },
            865: {
              slidesPerView: 4,
            },
            1000: {
              slidesPerView: 5,
            },
            1500: {
              slidesPerView: 6,
            },
            1700: {
              slidesPerView: 7,
            },
          }}
        >
          {renderTeamGV()}
        </Swiper>
      </section>

      <div className="review mt-5 md:block hidden">
        <div className="reviewStudent">
          <div className="triangleTopRight" />
          <div className="smallBox smallboxLeftTop" />
          <div className="smallBox smallboxRightBottom" />
          <div className="smallBox smallboxRightTop" />
          <div className="smallBox smallboxLeftBottom" />
          <div className="hvreview-wraper">
            <div className="reviewImg">
              <div className="bgStudentReview" />
              <img src="../image/HomePage/Testimonial/hvreview.png" alt="..." />
            </div>

            <div className="quoteRight">
              <p>
                Chương trình giảng dạy được biên soạn dành riêng cho các bạn Lập
                trình từ trái ngành hoặc đã có kiến thức theo cường độ cao, luôn
                được tinh chỉnh và tối ưu hóa theo thời gian bởi các thành viên
                sáng lập và giảng viên dày kinh nghiệm.Thực sự rất hay và hấp
                dẫn
              </p>
              <div className="qouteName">
                <p>Nhi Dev</p>
                <span>Học viên xuất sắc</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

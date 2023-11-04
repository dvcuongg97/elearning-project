import React from "react";
import { DiNpm, DiReact, DiStackoverflow } from "react-icons/di";

export default function InfoComponent() {
  return (
    <section className="feature mb-12">
      {/* content */}
      <div
        style={{
          backgroundImage: `url('../image/HomePage/HomeSlider/infobg.png')`,
          backgroundPosition: "center",
          padding: "0 48px",
        }}
        className="infoCoureBox"
      >
        <div className="infoCourseHome ">
          <div className="infoItemHome infoLargeItem">
            <div className="infoItemContent">
              <h3>Khóa học</h3>
              <p>
                <span>Học qua dự án thực tế</span>, học đi đôi với hành, không
                lý thuyết lan man, phân tích cội nguồn của vấn đề, xây dựng từ
                các ví dụ nhỏ đến thực thi một dự án lớn ngoài thực tế để học
                viên học xong làm được ngay
              </p>
              <ul>
                <li>
                  <i className="fas fa-check" />
                  <span>Hơn 1000 bài tập và dự án thực tế</span>
                </li>
                <li>
                  <i className="fas fa-check" />
                  <span>Công nghệ cập nhật mới nhất</span>
                </li>
                <li>
                  <i className="fas fa-check" />
                  <span>Hình ảnh, ví dụ, bài giảng sinh động trực quan</span>
                </li>
                <li>
                  <i className="fas fa-check" />
                  <span>Tư duy phân tích, giải quyết vấn đề trong dự án</span>
                </li>
                <li>
                  <i className="fas fa-check" />
                  <span>
                    Học tập kinh nghiệm, qui trình làm dự án, các qui chuẩn
                    trong dự án
                  </span>
                </li>
                <li>
                  <i className="fas fa-check" />
                  <span>
                    Cơ hội thực tập tại các công ty lớn như FPT, Microsoft
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="infoItemHome infoSmallItemA">
            <div className="infoItemContent">
              <h3>Lộ trình phù hợp</h3>
              <ul>
                <li>
                  <i className="fas fa-check" />
                  <span>
                    Lộ trình bài bản từ zero tới chuyên nghiệp, nâng cao
                  </span>
                </li>
                <li>
                  <i className="fas fa-check" />
                  <span>
                    Học, luyện tập code, kỹ thuật phân tích, soft skill
                  </span>
                </li>
                <li>
                  <i className="fas fa-check" />
                  <span>
                    Huấn luyện để phát triển năng lực và niềm đam mê lập trình
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="infoItemHome infoSmallItemB">
            <div className="infoItemContent">
              <h3>Hệ thống học tập</h3>
              <ul>
                <li>
                  <i className="fas fa-check" />
                  <span>
                    Tự động chấm điểm trắc nghiệm và đưa câu hỏi tùy theo mức độ
                    học viên
                  </span>
                </li>
                <li>
                  <i className="fas fa-check" />
                  <span>
                    Thống kê lượt xem video, làm bài, điểm số theo chu kỳ
                  </span>
                </li>
                <li>
                  <i className="fas fa-check" />
                  <span>
                    Thống kê, so sánh khả năng học của các học viên cùng level
                    để đưa ra mục tiêu học tập
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="infoItemHome infoSmallItemA">
            <div className="infoItemContent">
              <h3>Giảng viên</h3>
              <ul>
                <li>
                  <i className="fas fa-check" />
                  <span>
                    Tương tác cùng mentor và giảng viên qua phần thảo luận
                  </span>
                </li>
                <li>
                  <i className="fas fa-check" />
                  <span>Review code và đưa ra các nhận xét góp ý</span>
                </li>
                <li>
                  <i className="fas fa-check" />
                  <span>Chấm điểm tương tác thảo luận giữa các học viên</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="infoItemHome infoSmallItemC">
            <div className="infoItemContent">
              <h3>Chứng nhận</h3>
              <ul>
                <li>
                  <i className="fas fa-check" />
                  <span>Chấm bài và có thể vấn đáp trực tuyến để review</span>
                </li>
                <li>
                  <i className="fas fa-check" />
                  <span>
                    Hệ thống của chúng tôi cũng tạo ra cho bạn một CV trực tuyến
                    độc đáo
                  </span>
                </li>
                <li>
                  <i className="fas fa-check" />
                  <span>
                    Kết nối CV của bạn đến với các đối tác của V learning
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* card */}
      <div className=" w-3/4 mx-auto mb-12">
        <div className="grid grid-cols-12">
          <div className="col-span-4 flex justify-center">
            <div className="cardft-wraper">
              <div className="cardft-content">
                <div className="iconft-wraper1">
                  <div className="iconft-style iconft-style1 ">
                    <DiNpm className="iconft" size={60} />
                  </div>
                </div>
                <h3
                  // style={{ fontWeight: 600, margin: "20px 0" }}
                  className="text-center font-medium"
                >
                  Công nghệ mới, chuyên sâu, thực tế
                </h3>
                <div className="w-3/4 mx-auto text-justify">
                  <p>
                    Fusce sit amet dui vitae urna tristique imperdiet. Donec
                    eget sapien euismod, faucibus nibh non, consequat elit.
                    Praesent sed vehicula.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-4 flex justify-center">
            <div className="cardft-wraper">
              <div className="cardft-content">
                <div className="iconft-wraper2">
                  <div className="iconft-style iconft-style2">
                    <DiReact className="iconft" size={60} />
                  </div>
                </div>
                <h3
                  // style={{ fontWeight: 600, margin: "20px 0" }}
                  className="text-center"
                >
                  Trao tay chìa khóa thành công toàn diện
                </h3>
                <div className="w-3/4 mx-auto text-justify">
                  <p>
                    Fusce sit amet dui vitae urna tristique imperdiet. Donec
                    eget sapien euismod, faucibus nibh non, consequat elit.
                    Praesent sed vehicula.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-4 flex justify-center">
            <div className="cardft-wraper">
              <div className="cardft-content">
                <div className="iconft-wraper3">
                  <div className="iconft-style iconft-style3">
                    <DiStackoverflow className="iconft" size={60} />
                  </div>
                </div>
                <h3
                  // style={{ fontWeight: 600, margin: "20px 0" }}
                  className="text-center font-medium"
                >
                  Nền tảng, tư duy, cốt lõi trong lập trình
                </h3>
                <div className="w-3/4 mx-auto text-justify">
                  <p>
                    Fusce sit amet dui vitae urna tristique imperdiet. Donec
                    eget sapien euismod, faucibus nibh non, consequat elit.
                    Praesent sed vehicula.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

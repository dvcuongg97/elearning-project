import React from "react";
import "../../asset/css/Layout/Footer.scss";

export default function Footer() {
  return (
    <section className="ssfooter">
      <div className="grid grid-cols-1 md:grid-cols-12">
        <div className="col-span-3">
          <div>
            <img
              className="cursor-pointer hover:scale-110 transition-all duration-300"
              width={200}
              alt="..."
              src="../image/logo/cyberlogo.png"
            />
            <ul className="ulMenu ulMenuLogo">
              <li>
                <i className="fas fa-phone-alt iconFooter"></i>
                <span>1800-123-4567</span>
              </li>
              <li>
                <i className="fas fa-envelope-open-text iconFooter"></i>
                <span>devit@gmail.com</span>
              </li>
              <li>
                <i className="fas fa-map-marker-alt iconFooter"></i>
                <span>Đà Nẵng</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-span-6 grid">
          <div className="grid grid-cols-2">
            <div className="col-span-1">
              <h3 className="f-heading">Liên Kết</h3>
              <ul className="ulMenu">
                <li>
                  <i className="fas fa-chevron-right"></i>
                  <span>Trang chủ</span>
                </li>
                <li>
                  <i className="fas fa-chevron-right"></i>
                  <span> Dịch vụ</span>
                </li>
                <li>
                  <i className="fas fa-chevron-right"></i>
                  <span> Nhóm </span>
                </li>
                <li>
                  <i className="fas fa-chevron-right"></i>
                  <span> Blog</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="f-heading">Khóa Học</h3>
              <ul className="ulMenu">
                <li>
                  <i className="fas fa-chevron-right"></i>
                  <span> Front End</span>
                </li>
                <li>
                  <i className="fas fa-chevron-right"></i>
                  <span> Back End</span>
                </li>
                <li>
                  <i className="fas fa-chevron-right"></i>
                  <span>Full stack</span>
                </li>
                <li>
                  <i className="fas fa-chevron-right"></i>
                  <span>Node Js</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-span-3 ">
          <h3 className="f-heading">Đăng Ký Tư Vấn</h3>
          <form>
            <div>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="email"
                  name="floating_email"
                  id="floating_email"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_email"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Địa Chỉ Email ...
                </label>
              </div>
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="text"
                    name="floating_first_name"
                    id="floating_first_name"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="floating_first_name"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Họ ...
                  </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="text"
                    name="floating_last_name"
                    id="floating_last_name"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="floating_last_name"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Tên ...
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Đăng Ký
              </button>
            </div>
          </form>
        </div>
        <div></div>
      </div>
      <div className="py-6 mt-6 border-t-2 md:flex justify-between">
        <div>
          <p className="mb-1">Copyright © 2021. All rights reserved.</p>
        </div>
        <div className="flex justify-around">
          <i className="fab fa-instagram mx-3 text-lg iconFooter" />
          <i className="fab fa-facebook-f mx-3 text-lg iconFooter" />
          <i className="fab fa-twitter mx-3 text-lg iconFooter" />
        </div>
      </div>
    </section>
  );
}

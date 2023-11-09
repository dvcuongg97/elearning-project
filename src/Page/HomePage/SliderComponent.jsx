import React from "react";

import "../../asset/css/HomePage/SliderStyles.scss";

export default function SliderComponent() {
  return (
    <section className="px-12">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="col-span-1 sloganBox">
          <div className="triangleTopRight" />
          <div className="smallBox smallboxLeftTop" />
          <div className="smallBox smallboxRightTop" />
          <div className="smallBox smallboxRightBottom" />
          <div className="smallBox smallboxRightBottom doubleBox" />
          <div className="sloganContainer">
            <div>
              <img
                className="sliderPlaneImg"
                src="../image/HomePage/HomeSlider/planedSlider.png"
                alt="..."
              />
            </div>
            <h1>Chào mừng</h1>
            <h1>đến với môi trường </h1>
            <h1>
              V<span>learning</span>
            </h1>
            <button className="btnGlobal btnSlider mt-4">Bắt đâu nào</button>
          </div>
        </div>
        <div className="col-span-1">
          <div className="sliderRight">
            <div>
              <img
                className="sliderMainImg"
                src="../image/HomePage/HomeSlider/slider2.png"
                alt="..."
              />
              <img
                className="sliderSubImg sliderCodeImg"
                src="../image/HomePage/HomeSlider/codeSlider.png"
                alt="..."
              />
              <img
                className="sliderSubImg sliderMesImg "
                src="../image/HomePage/HomeSlider/messageSlider.png"
                alt="..."
              />
              <img
                className="sliderSubImg sliderCloudImg"
                src="../image/HomePage/HomeSlider/cloudsSlider.png"
                alt="..."
              />
              <img
                className="sliderSubImg sliderCloud2Img"
                src="../image/HomePage/HomeSlider/cloudsSlider.png"
                alt="..."
              />
              <img
                className="sliderSubImg sliderCloud3Img"
                src="../image/HomePage/HomeSlider/cloudsSlider.png"
                alt="..."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

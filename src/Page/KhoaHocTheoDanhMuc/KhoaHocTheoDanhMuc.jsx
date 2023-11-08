import React, { useEffect, useState } from "react";
import "../../asset/css/GlobalStyle/CardKhoaHoc.scss";
import "../../asset/css/GlobalStyle/TabDanhMucKhoaHoc.scss";

import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { renderCard } from "../renderCard/renderCard";
import { clientApi } from "../../api/api";

export default function KhoaHocTheoDanhMuc() {
  const param = useParams();
  const { filterCard, renderTabDanhMucKhoaHoc } = renderCard;
  let [labelState, setLabelState] = useState(param.maDanhMuc);
  let [khoaHocTheoDanhMuc, setKhoaHocTheoDanhMuc] = useState([]);
  const { danhMucKhoaHoc } = useSelector((state) => state.khoaHocSlice);

  useEffect(() => {
    const layKhoaHocTheoDanhMucAction = async (labelState) => {
      try {
        const res = await clientApi.layKhoaHocTheoDanhMuc(labelState);
        if (res.status === 200) {
          setKhoaHocTheoDanhMuc(res.data);
        }
      } catch (error) {
        console.log("error", error.message);
      }
    };
    layKhoaHocTheoDanhMucAction(labelState);
  }, [labelState]);

  return (
    <section className="indexKhoaHoc">
      <div className="p-12 bg-yellow-400 ">
        <p
          style={{
            color: "#1f2471",
          }}
          className="text-black font-bold text-2xl text-center uppercase"
        >
          danh sách khóa học hiện có
        </p>
      </div>

      <div className="tabz-wraper">
        <div className="tabz-label">
          <ul className="labelz-list">
            {renderTabDanhMucKhoaHoc(danhMucKhoaHoc, labelState, setLabelState)}
          </ul>
        </div>
        <div className="content-activez">
          <div className="w-4/5 mx-auto">
            <div className="grid grid-cols-12 gap-12 mb-12">
              {filterCard(0, 0, labelState, khoaHocTheoDanhMuc)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

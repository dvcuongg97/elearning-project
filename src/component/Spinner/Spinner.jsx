import { Spin } from "antd";
import React from "react";
import { useSelector } from "react-redux";

export default function Spinner() {
  let { spinnerState } = useSelector((state) => state.spinnerSlice);
  return spinnerState ? (
    <div
      style={{
        maxWidth: "2000px",
        width: "100%",
        height: "100%",
        background: "#000",
        opacity: 0.9,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 100,
      }}
    >
      <Spin tip="Loading..."></Spin>
    </div>
  ) : (
    ""
  );
}

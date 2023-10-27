import React from "react";
import Slider from "./Slider";
import Course from "./Courses";

export default function HomePage() {
  return (
    <div className="px-12">
      <Slider />
      <Course />
    </div>
  );
}
// .homePage {
//     background-size: cover;
//     background-repeat: no-repeat;
//     padding: 0 50px;
// }

import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function HomeLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

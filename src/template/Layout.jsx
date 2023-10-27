import React from "react";
import NavBar from "../component/NavBar/Navbar";
import Footer from "../component/Footer/Footer";

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}

import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Navbar from "../Common/Navbar";
import Footer from "../Common/Footer";

const MainLayout = () => {
  const { isDark } = useContext(AuthContext);

  return (
    <div
      className="max-w-[1440px] mx-auto min-h-[100vh] relative"
      data-theme={isDark ? "dark" : "light"}
    >
      <nav className="sticky top-0 left-0 right-0 w-full z-50 backdrop-blur-sm bg-white/80">
        <Navbar></Navbar>
      </nav>
      <div className="" style={{ minHeight: `calc(100vh - 372px)` }}>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;

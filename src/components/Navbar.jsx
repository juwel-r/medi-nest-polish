import React, { useContext, useState } from "react";
import { CiCircleList } from "react-icons/ci";
import { FiMenu } from "react-icons/fi";
import { IoIosList } from "react-icons/io";
import { RxCross1, RxCross2 } from "react-icons/rx";
import { Link, NavLink } from "react-router-dom";
import ThemeController from "./ThemeController";
import Lottie from "lottie-react";
import loginBtnLottieAnimation from "../assets/login-btn-lottie-animation.json";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { userInfo, logOut } = useContext(AuthContext);
  const [menuClose, setMenuClose] = useState(false);
  const email1stLetter = userInfo && userInfo.email.charAt(0).toUpperCase();
  console.log(email1stLetter);

  const menus = (
    <>
      <NavLink to="/" className="px-2">
        Home
      </NavLink>
      <NavLink to="/profile" className="px-2">
        My Profile
      </NavLink>
      <NavLink to="/about" className="px-2">
        About Me
      </NavLink>
    </>
  );
  return (
    <nav className="flex lg:justify-between items-center relative">
      {/* Right section */}
      <div
        tabIndex={0}
        onBlur={() => setMenuClose(false)}
        onClick={() => setMenuClose(!menuClose)}
        className="block lg:hidden z-50 relative h-5 w-5 text-2xl pr-4"
      >
        <span
          className={`absolute inset-0 transition-opacity duration-300 ${
            menuClose ? "opacity-100" : "opacity-0"
          }`}
        >
          <RxCross2 />
        </span>
        <span
          className={`absolute inset-0 transition-opacity duration-300 ${
            menuClose ? "opacity-0" : "opacity-100"
          }`}
        >
          <IoIosList />
        </span>
      </div>
      {/* Logo */}
      <h1 className="text-2xl lg:text-3xl text-nowrap px-2">Site Logo</h1>

      {/* Menu */}
      <section className="top-menu flex justify-center w-full mx-auto">
        <div
          className={`z-40 flex flex-col lg:flex-row absolute lg:static backdrop-blur-sm lg:shadow-none shadow-md p-5 pl-2 rounded-sm transition-all duration-200 ease-in-out  ${
            menuClose
              ? " top-[100%] -left-[1%]"
              : "top-[100%] md:-left-[25%] -left-[40%]"
          }`}
        >
          {menus}
          <div className="flex flex-col lg:hidden">
            {userInfo ? (
              <button onClick={logOut} className="text-left px-2">
                Logout
              </button>
            ) : (
              <>
                <Link to="/login" className="px-2">
                  Login
                </Link>
                <Link to="/register" className="px-2">
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </section>
      {/* Right Section */}
      <section className="flex items-center justify-between gap-2">
        {/* Avatar */}
        {userInfo && (
          <div className="avatar online placeholder">
            <div className="bg-neutral text-neutral-content w-10 rounded-full">
              {userInfo?.photoURL ? (
                <img src={userInfo.photoURL} alt="" />
              ) : (
                <h1 className="text-2xl font-bold">{email1stLetter}</h1>
              )}
            </div>
          </div>
        )}

        <div className="hidden lg:flex items-center">
          {userInfo ? (
            <button className="btn btn-outline btn-sm rounded-none"  onClick={logOut}>Logout</button>
          ) : (
            <>
              <Link  to="/register" className="mr-2 btn btn-outline btn-sm rounded-none">
                Register
              </Link>
              <Link to="/login">
                <div
                  className="h-12 w-12"
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content="Login"
                >
                  <Lottie
                    className="h-full w-full p-0"
                    animationData={loginBtnLottieAnimation}
                  ></Lottie>
                </div>
              </Link>
            </>
          )}
        </div>

        {/* theme controller */}
        <ThemeController></ThemeController>
      </section>
    </nav>
  );
};

export default Navbar;

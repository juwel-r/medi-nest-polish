import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import ThemeController from "../components/ThemeController";
import { RxCross2 } from "react-icons/rx";
import { IoIosList } from "react-icons/io";
import logo from "/logo.png";
import Swal from "sweetalert2";
import { Tooltip } from "react-tooltip";
import useAuth from "../Hooks/useAuth";
import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  const { userInfo, logOut } = useAuth();
  const navigate = useNavigate();
  const [menuClose, setMenuClose] = useState(false);
  const [profileMenu, setProfileMenu] = useState(false);
  // const email1stLetter = userInfo.email && userInfo.email.charAt(0).toUpperCase();
  const menus = (
    <>
      <NavLink to="/" className="px-2">
        Home
      </NavLink>
      <NavLink to="/shop" className="px-2">
        Shop
      </NavLink>
    </>
  );

  //Log Out
  const handleLogOut = () => {
    setProfileMenu(false);
    Swal.fire({
      title: "Do you really want to Log out?",
      // text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#1a7bc0",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Log Out!",
    }).then((result) => {
      if (result.isConfirmed) {
        logOut()
          .then(() => {
            navigate("/");
            Swal.fire({
              title: "Logged Out!",
              // text: "Your file has been deleted.",
              icon: "info",
            });
          })
          .catch((error) => {
            Swal.fire({
              title: "Failed To Register!",
              text: error.code,
              icon: "error",
              confirmButtonText: "Try Again",
            });
          });
      }
    });
  };
  return (
    <nav className="px-4 sm:px6 h-[48px] md:h-[64px] flex lg:justify-between items-center relative border-b">
      {/* Right section */}
      <div
        tabIndex={0}
        onBlur={() => setMenuClose(false)}
        onClick={() => setMenuClose(!menuClose)}
        className="block lg:hidden z-50 relative h-5 w-5 text-2xl text-black pr-4"
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
      <Link to="/" className="ml-3 min-w-fit">
        <img
          className="h-9 w-full md:h-10 lg:scale-150 "
          src={logo}
          alt="edu-mate-logo"
        />
      </Link>

      {/* Menu */}
      <section className="top-menu flex justify-center w-full mx-auto ">
        <div
          className={`text-left text-sm sm:text-base text-black z-40 flex flex-col lg:flex-row absolute lg:static backdrop-blur-sm bg-white/90 lg:bg-transparent  lg:backdrop-blur-none lg:shadow-none shadow-md p-5 space-y-2 lg:space-y-0 pl-2 rounded-sm transition-all duration-200 ease-in-out h-screen lg:h-auto ${
            menuClose ? " top-[100%] left-0" : "top-[100%]  -left-96"
          }`}
        >
          {menus}
          <div className="flex flex-col lg:hidden">
            {userInfo ? (
              <button onClick={handleLogOut} className="text-left px-2">
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
        <Link to="/" className="text-white">
          <p className=" md:p-3 p-2 border-2 bg-primary/90 rounded-full relative mr-4 text-lg">
            <FiShoppingCart />
            <span className="text-primary md:text-sm text-xs font-bold text-center absolute -top-1 -right-1 bg-white rounded-full h-5 w-5 flex justify-center items-center border border-primary">
              {/* {cart.length} */}6
              {/* todo:nedd to add cart length */}
            </span>
          </p>
        </Link>
        {/* Avatar */}
        {userInfo && (
          <div className="avatar online placeholder">
            <div className="text-neutral-content w-10 rounded-full">
              {userInfo?.photoURL && (
                <img
                  onClick={() => setProfileMenu(!profileMenu)}
                  src={userInfo.photoURL}
                  alt={userInfo.displayName}
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content={userInfo.displayName}
                />
              )}
            </div>
          </div>
        )}

        <div className="hidden lg:flex items-center">
          {userInfo ? (
            <button
              className="hidden px-4 py-2 bg-gradient-to-r from-pink-500 to-red-500 text-white text-xs font-semibold rounded-full shadow-lg hover:from-red-600 hover:to-pink-600 transform transition-all duration-300"
              onClick={handleLogOut}
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                to="/register"
                className="myBtn mr-2 btn btn-outline btn-sm rounded-none green-button"
              >
                Join Us
              </Link>
              <Link
                to="/login"
                className="myBtn mr-2 btn btn-outline btn-sm rounded-none green-button"
              >
                Login
              </Link>
            </>
          )}
          <div className="border rounded-lg p-2">
            <select name="language" id="" className="">
              <option disabled selected value="">
                Languages
              </option>
              <option value="English">English</option>
              <option value="Bangla">Bangla</option>
            </select>
          </div>
        </div>
        {/* <Tooltip id="my-tooltip" /> */}
        {/* theme controller */}
        <ThemeController></ThemeController>
      </section>
      {/* {profileMenu ? (

      ) : (
        ""
      )} */}
      {userInfo && (
        <div
          className={`flex flex-col items-center gap-2 absolute top-12 sm:top-16 right-0 lg:right-28 bg-white p-4 mr-1 border-2 border-primary/50 shadow-md max-w-80 min-w-52 rounded-xl ${
            profileMenu ? "opacity-100" : "opacity-0"
          } transition-all duration-300 ease-in-out transform`}
        >
          <div className="w-24 h-24 p-1 border border-primary rounded-full">
            <img
              className=" rounded-full h-full w-full object-cover"
              src={userInfo.photoURL}
              alt={userInfo.displayName}
            />
          </div>
          <h1 className="text-primary font-bold text-xl">
            {userInfo.displayName}
          </h1>
          {profileMenu ? (
            <>
              <Link to="profile">
                <button
                  onClick={() => setProfileMenu(false)}
                  className="green-button btn btn-sm"
                >
                  Update Profile
                </button>
              </Link>
              <Link to="/" className="green-button btn btn-sm">Dashboard</Link>
              <button className="red-button btn btn-sm" onClick={handleLogOut}>
                Logout
              </button>
            </>
          ) : (
            ""
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

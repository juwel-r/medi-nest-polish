import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useRole from "../Hooks/useRoll";
import { VscVerifiedFilled } from "react-icons/vsc";
import { RxCross2 } from "react-icons/rx";
import { IoIosList } from "react-icons/io";

const Dashboard = () => {
  const { userInfo } = useAuth();
  const [role] = useRole();
  const [menuClose, setMenuClose] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if ( !dropdownRef.current.contains(event.target)) {
        setMenuClose(false); // Close dropdown only on outside clicks
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  console.log(menuClose)
  return (
    <div className=" min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-6">
      <div className="max-w-[1440px] mx-auto">
        <div className="lg:grid grid-cols-12 gap-4 relative">
          {/* sidebar */}
          <div
           ref={dropdownRef}
           className={`absolute lg:static z-20 col-span-3 bg-white/10 backdrop-blur-lg shadow-lg p-6 rounded-lg border border-white/20 h-fit transform transition-all duration-300 ease-in-out ${
            menuClose ? " top-0 left-0" : "top-0  -left-96"
          }`}
          >
            <div className="flex  items-center mb-6">
              <img
                src={userInfo?.photoURL}
                alt={userInfo?.displayName}
                className="rounded-full object-cover w-12 h-12 mr-3"
              />
              <div>
                <h2 className="text-white font-semibold text-lg flex items-center gap-1">
                  {userInfo?.displayName}
                  <span className="text-2xl">
                    <VscVerifiedFilled className="" />
                  </span>
                </h2>
                <p className="text-white/70 text-sm">{role?.toUpperCase()}</p>
              </div>
            </div>

            {/* sidebar menu */}
            <nav onClick={()=>setMenuClose(false)} className="text-white ">
              <ul className="dashboard-NavLink flex flex-col gap-2 ">
                <Link
                  to="/dashboard"
                  className="font-medium hover:text-white/80 cursor-pointer"
                >
                  Overview
                </Link>
                <NavLink
                  to="manage-user"
                  className="font-medium hover:text-white/80 cursor-pointer"
                >
                  Manage Users
                </NavLink>
                <NavLink
                  to="manage-category"
                  className="font-medium hover:text-white/80 cursor-pointer"
                >
                  Manage Category
                </NavLink>
                <NavLink
                  to="payment-management"
                  className="font-medium hover:text-white/80 cursor-pointer"
                >
                  Payment Management
                  {/* <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full ml-2">
                    7
                  </span> */}
                </NavLink>
                <NavLink
                  to="sales-report"
                  className="font-medium hover:text-white/80 cursor-pointer"
                >
                  Sales Report
                </NavLink>
                <NavLink
                  to="manage-banner-advertise"
                  className="font-medium hover:text-white/80 cursor-pointer"
                >
                  Manage Banner Advertise
                </NavLink>
              </ul>
              <div className="mt-6 border-t border-white/20 pt-4 ">
                <ul className="flex flex-col gap-4">
                  <NavLink
                    to="/"
                    className="font-medium hover:text-white/80 cursor-pointer"
                  >
                    Client Satisfaction
                  </NavLink>
                  <NavLink
                    to="/"
                    className="font-medium hover:text-white/80 cursor-pointer"
                  >
                    Employee Reviews
                    {/* <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full ml-2">
                      1
                    </span> */}
                  </NavLink>
                  <NavLink
                    to="/"
                    className="font-medium hover:text-white/80 cursor-pointer"
                  >
                    Social Media
                  </NavLink>
                </ul>
              </div>
            </nav>
          </div>
          <div className="lg:col-span-9">
            {/*  top section */}
            <div className="bg-white/10 backdrop-blur-lg shadow-lg p-6 rounded-lg border border-white/20 flex items-center justify-between">
              <h1 className="text-white text-lg md:text-xl font-semibold">
                Dashboard of {role?.toUpperCase()} - Medi Nest
              </h1>
              {/* <button className="green-button">
                Upgrade
                todo: need to conditional
              </button> */}
              <div
              ref={dropdownRef}
                tabIndex={0}
                // onBlur={() => setMenuClose(false)}
                onClick={() => {setMenuClose((prev) => !prev);}} 
                className="block lg:hidden z-50 relative h-5 w-5 text-3xl text-white pr-4"
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
            </div>
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;

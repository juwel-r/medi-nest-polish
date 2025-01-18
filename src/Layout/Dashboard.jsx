import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useRole from "../Hooks/useRoll";
import { VscVerifiedFilled } from "react-icons/vsc";

const Dashboard = () => {
  const { userInfo } = useAuth();
  const [role] = useRole();
  return (
    <div className=" min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-6">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-12 gap-4">
          {/* sidebar */}
          <div className="col-span-3 bg-white/20 backdrop-blur-lg shadow-lg p-6 rounded-lg border border-white/20 h-fit">
            <div className="flex  items-center mb-6">
              <img
                src={userInfo?.photoURL}
                alt={userInfo?.displayName}
                className="rounded-full object-cover w-12 h-12 mr-3"
              />
              <div>
                <h2 className="text-white font-semibold text-lg flex items-center gap-1">
                  {userInfo?.displayName}
                  <span className="text-2xl"><VscVerifiedFilled className=""/></span>
                </h2>
                <p className="text-white/70 text-sm">{role?.toUpperCase()}</p>
              </div>
            </div>

            {/* sidebar menu */}
            <nav className="text-white">
              <ul className="dashboard-NavLink flex flex-col gap-2 ">
                <Link
                  to="/dashboard"
                  className="font-medium hover:text-white/80 cursor-pointer"
                >
                  Overview
                </Link>
                <NavLink to="manage-user" className="font-medium hover:text-white/80 cursor-pointer">
                  Manage Users
                </NavLink>
                <NavLink to="manage-category" className="font-medium hover:text-white/80 cursor-pointer">
                  Manage Category
                </NavLink>
                <NavLink to="/" className="font-medium hover:text-white/80 cursor-pointer">
                  Shift Planner
                  <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full ml-2">
                    7
                  </span>
                </NavLink>
                <NavLink to="/" className="font-medium hover:text-white/80 cursor-pointer">
                  Employees
                </NavLink>
                <NavLink to="/" className="font-medium hover:text-white/80 cursor-pointer">
                  Providers
                </NavLink>
              </ul>
              <div className="mt-6 border-t border-white/20 pt-4 ">
                <ul className="flex flex-col gap-4">
                  <NavLink to="/" className="font-medium hover:text-white/80 cursor-pointer">
                    Client Satisfaction
                  </NavLink>
                  <NavLink to="/" className="font-medium hover:text-white/80 cursor-pointer">
                    Employee Reviews
                    <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full ml-2">
                      1
                    </span>
                  </NavLink>
                  <NavLink to="/" className="font-medium hover:text-white/80 cursor-pointer">
                    Social Media
                  </NavLink>
                </ul>
              </div>
            </nav>
          </div>
          {/*  top section */}
          <div className="col-span-9">
            <div className="bg-white/10 backdrop-blur-lg shadow-lg p-6 rounded-lg border border-white/20 flex items-center justify-between">
              <h1 className="text-white text-xl font-semibold">
                Dashboard of {role?.toUpperCase()} - Medi Nest
              </h1>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
                Upgrade
                {/* todo: need to conditional */}
              </button>
            </div>
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;

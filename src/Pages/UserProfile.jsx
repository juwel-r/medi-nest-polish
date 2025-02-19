import React, { useState } from "react";
import useAuth from "../customHooks/useAuth";
import { Helmet } from "react-helmet-async";
import { Fade } from "react-awesome-reveal";
import cover from"../assets/cover.png"

const UserProfile = () => {
  const { userInfo } = useAuth();
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    displayName: userInfo.displayName || "",
    photoURL: userInfo.photoURL || "",
    email: userInfo.email || "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., updating the user profile in the database.
    setEditMode(false);
  };

  return (
    <div className="min-h-screen bg-gray-100/50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div
        className="relative w-full h-48 md:h-64 bg-cover bg-center"
        style={{
          backgroundImage: `url(${cover})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>  
      <div className="max-w-5xl mx-auto p-6 ">
        <div className="bg-white/40 backdrop-blur-lg dark:bg-gray-800/40 p-6 rounded-lg shadow-lg relative -mt-32">
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <img
              src={formData.photoURL || "https://via.placeholder.com/150"}
              alt="User Avatar"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-lg object-cover"
            />
            <div className="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
              <h1 className="text-3xl font-semibold ">
                {formData?.displayName}
              </h1>
              <p className="text-lg text-gray-900">{formData?.email}</p>
              <p className="mt-2 text-sm text-gray-900">Joined: January 2024</p>
              {/* <button
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-primary transition"
                onClick={() => setEditMode(true)}
              >
                Edit Profile
              </button> */}
            </div>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/40 backdrop-blur-lg dark:bg-gray-800/40 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">Personal Information</h2>
            <p className="mt-2">
              <strong>Phone:</strong> +880 1234 567 890
            </p>
            <p className="mt-2">
              <strong>Address:</strong> 123, Dhaka, Bangladesh
            </p>
            <p className="mt-2">
              <strong>Membership:</strong> Premium
            </p>
          </div>
          <div className="bg-white/40 backdrop-blur-lg dark:bg-gray-800/40 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">Recent Activities</h2>
            <ul className="mt-2 list-disc list-inside">
              <li>Purchased "Medicine A" on February 18, 2025</li>
              <li>Reviewed "Product B" on February 16, 2025</li>
              <li>Updated profile picture on February 14, 2025</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

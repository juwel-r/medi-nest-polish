import React, { useState } from "react";
import useAuth from "../customHooks/useAuth";
import { Helmet } from "react-helmet-async";
import { Fade } from "react-awesome-reveal";

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
    <Fade triggerOnce delay={200}>
      <div className="w-[95%] sm:max-w-lg mx-auto p-6 my-6 rounded-lg shadow-md bg-white/20 border border-white/50 text-white">
        <Helmet>
          <title>Profile of {userInfo?.displayName} | Medi Nest</title>
        </Helmet>
        <div className="flex flex-col items-center pt-4 mx-6">
          <img
            src={formData.photoURL || "https://via.placeholder.com/150"}
            alt="User Avatar"
            className="w-44 h-44 rounded-full shadow-md object-cover"
          />
          {!editMode ? (
            <>
              <h1 className="text-2xl font-semibold mt-4">
                {formData?.displayName}
              </h1>
              <p className="">{formData?.email}</p>
              <button
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-primary green-button"
                onClick={() => setEditMode(true)}
              >
                Edit Profile
              </button>
            </>
          ) : (
            <form className="w-full mt-4 space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block  font-medium">Name</label>
                <input
                  type="text"
                  name="displayName"
                  value={formData?.displayName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-white/50 rounded-md focus:ring-1 focus:ring-primary focus:outline-none bg-white/20 shadow-md"
                  required
                />
              </div>
              <div>
                <label className="block  font-medium">Photo URL</label>
                <input
                  type="url"
                  name="photoURL"
                  value={formData?.photoURL}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-white/50 rounded-md focus:ring-1 focus:ring-primary focus:outline-none bg-white/20 shadow-md"
                  required
                />
              </div>
              <div>
                <label className="block  font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  readOnly
                  value={formData?.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-white/50 rounded-md focus:ring-1 focus:ring-primary focus:outline-none bg-white/20 shadow-md"
                  required
                />
              </div>
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  className="red-button"
                  onClick={() => setEditMode(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="green-button">
                  Save
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </Fade>
  );
};

export default UserProfile;

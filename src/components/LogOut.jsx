import React from "react";
import { showAlert, showToast } from "../Utils/alerts";
import useAuth from "../Hooks/useAuth";
import { useNavigate } from "react-router-dom";

const LogOut = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();
  const handleLogOut = () => {
    showAlert({
      title: "Are you sure to Log Out!",
      icon: "warning",
      cancelButton: true,
      confirmButtonText: "Yes, Log Out",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        logOut()
          .then(() => {
            navigate("/");
            showToast("Log out Successful!", "success");
          })
          .catch((error) => {
            showAlert({
              title: "Failed to Logout",
              text: error.message,
              icon: "error",
              confirmButtonText: "Try Again",
              showCancelButton: true,
            });
          });
      }
    });
  };

  return <div onClick={handleLogOut}>Logout</div>;
};

export default LogOut;

import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import LoadingSpin from "../components/LoadingSpin";
import useRole from "../Hooks/useRoll";
import { showAlert } from "../Utils/alerts";

const AdminRoute = ({ children }) => {
  const [role, isLoading] = useRole();
  const { userInfo, authLoading } = useContext(AuthContext);
  const location = useLocation();
  if (authLoading || isLoading) return <LoadingSpin></LoadingSpin>;
  if (userInfo && role==="admin") return <div>{children}</div>;
  else{
      showAlert({
        title: "Unauthorize Access!",
        text: "This page is only for Admin, you are not an Admin.",
        icon: "error",
        confirmButtonText: " Ok ",
      });
    return <Navigate to="/" state={location.pathname}></Navigate>;
  }
};

export default AdminRoute;

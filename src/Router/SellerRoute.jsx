import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import LoadingSpin from "../components/LoadingSpin";
import useRole from "../Hooks/useRoll";
import { showAlert } from "../Utils/alerts";

const SellerRoute = ({ children }) => {
  const [role, isLoading] = useRole();
  const { userInfo, authLoading } = useContext(AuthContext);
  const location = useLocation();
  if (authLoading || isLoading) return <LoadingSpin></LoadingSpin>;
  if (userInfo && role === "seller") return <div>{children}</div>;
  else {
    showAlert({
      title: "Unauthorize Access!",
      text: "This page is only for Seller, Please request to be Seller!.",
      icon: "error",
      confirmButtonText: " Ok ",
    });
    return <Navigate to="/" state={location.pathname}></Navigate>;
  }
};

export default SellerRoute;

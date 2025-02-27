import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import LoadingSpin from "../components/LoadingSpin";

const PrivateRoute = ({ children }) => {
  const { userInfo, authLoading } = useContext(AuthContext);
  const location = useLocation();
  if (authLoading) return <LoadingSpin></LoadingSpin>;
  if (userInfo) return <div>{children}</div>;
  return <Navigate to="/login" state={location.pathname}></Navigate>;
};

export default PrivateRoute;

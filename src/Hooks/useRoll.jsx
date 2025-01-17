import React from "react";
import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useRole = () => {
  const { userInfo, authLoading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: role, isLoading } = useQuery({
    queryKey: [userInfo?.email, "role"],
    enabled: !authLoading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/user/role/${userInfo.email}`);
      console.log(role)
      return res.data?.role;
    },
  });
  return [role, isLoading];
};

export default useRole;
